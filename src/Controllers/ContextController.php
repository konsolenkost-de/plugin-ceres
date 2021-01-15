<?php

namespace Ceres\Controllers;

use Ceres\Contexts\CategoryItemContext;
use Ceres\Contexts\GlobalContext;
use Ceres\Contexts\SingleItemContext;
use IO\Api\ResponseCode;
use IO\Helper\Utils;
use IO\Services\CategoryService;
use IO\Services\ItemSearch\Factories\VariationSearchResultFactory;
use IO\Services\TemplateConfigService;
use Plenty\Modules\Category\Contracts\CategoryRepositoryContract;
use Plenty\Modules\ShopBuilder\Helper\ShopBuilderRequest;
use Plenty\Modules\Webshop\Contracts\WebstoreConfigurationRepositoryContract;
use Plenty\Modules\Webshop\ItemSearch\Helpers\ResultFieldTemplate;
use Plenty\Modules\Webshop\ItemSearch\SearchPresets\SingleItem;
use Plenty\Modules\Webshop\ItemSearch\SearchPresets\VariationAttributeMap;
use Plenty\Modules\Webshop\ItemSearch\Services\ItemSearchService;
use Plenty\Plugin\Controller;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Http\Response;
use Plenty\Plugin\Log\Loggable;

class ContextController extends Controller
{
    use Loggable;

    public function getContext(Request $request, $type = '')
    {
        switch ($type)
        {
            case 'item':
                return json_encode($this->getItemContext($request));
            case 'category':
                return json_encode($this->getCategoryContext($request));
            default:
                return json_encode($this->getGlobalContext());
        }
    }

    private function getItemContext(Request $request)
    {
        $context = pluginApp(SingleItemContext::class);
        $item = $this->getItem($request->get('itemId'), $request->get('variationId', 0));
        $context->init([
            'item' => $item
        ]);
        return $context;
    }

    private function getItem(
        int $itemId = 0,
        int $variationId = 0
    ) {
        $itemSearchOptions = [
            'itemId' => $itemId,
            'variationId' => $variationId,
            'setCategory' => false
        ];

        $plentyId = Utils::getPlentyId();

        $searches = [
            'item' => SingleItem::getSearchFactory($itemSearchOptions),
            'variationAttributeMap' => VariationAttributeMap::getSearchFactory($itemSearchOptions)
        ];

        /** @var TemplateConfigService $templateConfigService */
        $templateConfigService = pluginApp(TemplateConfigService::class);

        if ($variationId > 0 && $templateConfigService->getInteger('item.show_please_select') == 1) {
            unset($itemSearchOptions['variationId']);
            $searches['dynamic'] = SingleItem::getSearchFactory($itemSearchOptions);
        }

        /** @var ItemSearchService $itemSearchService */
        $itemSearchService = pluginApp(ItemSearchService::class);
        $itemResult = $itemSearchService->getResults($searches);

        if (isset($itemResult['item']['documents'][0]['data']['currentData'])) {
            /** @var CategoryService $categoryService */
            $categoryService = pluginApp(CategoryService::class);
            if (isset($itemResult['item']['documents'][0]['data']['currentData']['category'])) {
                $categoryService->setCurrentCategory(
                    $itemResult['item']['documents'][0]['data']['currentData']['category']
                );
            }
            if (isset($itemResult['item']['documents'][0]['data']['currentData']['item'])) {
                $categoryService->setCurrentItem($itemResult['item']['documents'][0]['data']['currentData']['item']);
            }

            if (isset($itemResult['item']['documents'][0]['data']['currentData']['setComponents'])) {
                $itemResult['setComponents'] = $itemResult['item']['documents'][0]['data']['currentData']['setComponents'];
            }

            if (isset($itemResult['item']['documents'][0]['data']['currentData']['setAttributeMap'])) {
                $itemResult['setAttributeMap'] = $itemResult['item']['documents'][0]['data']['currentData']['setAttributeMap'];
            }

            unset($itemResult['item']['documents'][0]['data']['currentData']);
        }

        /** @var ShopBuilderRequest $shopBuilderRequest */
        $shopBuilderRequest = pluginApp(ShopBuilderRequest::class);

        $defaultCategories = $itemResult['item']['documents'][0]['data']['defaultCategories'];
        $defaultCategory = array_filter(
            $defaultCategories,
            function ($category) use ($plentyId) {
                return $category['plentyId'] == $plentyId;
            }
        );

        $shopBuilderRequest->setMainCategory($defaultCategory[0]['id']);
        $shopBuilderRequest->setMainContentType('singleitem');
        $itemResult['isItemSet'] = false;

        if ($itemResult['item']['documents'][0]['data']['item']['itemType'] === 'set' || $shopBuilderRequest->getPreviewContentType() === 'itemset') {
            $shopBuilderRequest->setMainContentType('itemset');
            $itemResult['isItemSet'] = true;
        }

        if ($shopBuilderRequest->isShopBuilder()) {
            /** @var VariationSearchResultFactory $searchResultFactory */
            $searchResultFactory = pluginApp(VariationSearchResultFactory::class);
            $itemResult['item'] = $searchResultFactory->fillSearchResults(
                $itemResult['item'],
                ResultFieldTemplate::get(ResultFieldTemplate::TEMPLATE_SINGLE_ITEM)
            );

            if($shopBuilderRequest->getPreviewContentType() === 'itemset')
            {
                $previewSetComponentId = $itemResult['item']['documents'][0]['data']['setComponentVariationIds'][0];
                $previewSetComponent = $itemResult['setComponents'][0] ?? [
                        'variation' => [
                            'id' => $previewSetComponentId
                        ]
                    ];

                $itemResult['setComponents'] = [];
                $itemResult['setComponents'][] = $searchResultFactory->fillSearchResults(
                    [
                        'documents' => [
                            ['data' => $previewSetComponent]
                        ]
                    ]
                )['documents'][0]['data'];
            }
        }

        if (empty($itemResult['item']['documents'])) {
            $this->getLogger(__CLASS__)->info(
                "IO::Debug.ItemController_itemNotFound",
                [
                    "itemId" => $itemId,
                    "variationId" => $variationId
                ]
            );
            /** @var Response $response */
            $response = pluginApp(Response::class);
            $response->forceStatus(ResponseCode::NOT_FOUND);

            return $response;
        }

        /** @var WebstoreConfigurationRepositoryContract $webstoreConfigurationRepository */
        $webstoreConfigurationRepository = pluginApp(WebstoreConfigurationRepositoryContract::class);
        $webstoreConfiguration = $webstoreConfigurationRepository->getWebstoreConfiguration();

        $attributeSelectDefaultOption = (int)$webstoreConfiguration->attributeSelectDefaultOption;
        $itemResult['initPleaseSelectOption'] = $variationId <= 0 && $attributeSelectDefaultOption === 1;
        return $itemResult;
    }

    private function getCategoryContext(Request $request)
    {
        /** @var CategoryRepositoryContract $categoryRepo */
        $categoryRepo = pluginApp(CategoryRepositoryContract::class);
        $category = $categoryRepo->findCategoryByUrl(
            $request->get('lvl1'),
            $request->get('lvl2', null),
            $request->get('lvl3', null),
            $request->get('lvl4', null),
            $request->get('lvl5', null),
            $request->get('lvl6', null)
        );

        $context = pluginApp(CategoryItemContext::class);
        $context->init([
            'page' => $request->get('page', 1),
            'itemsPerPage' => $request->get('itemsPerPage', ''),
            'sorting' => $request->get('sorting', ''),
            'category' => $category
        ]);

        return $context;
    }

    private function getGlobalContext()
    {
        $context = pluginApp(GlobalContext::class);
        $context->init([]);
        return $context;
    }
}
