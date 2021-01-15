<?php

namespace Ceres\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\Router;
use Plenty\Plugin\Routing\ApiRouter;

/**
 * Class CeresRouteServiceProvider
 * @package Ceres\Providers
 */
class CeresRouteServiceProvider extends RouteServiceProvider
{
    public function register()
    {
    }

    /**
     * Define the map routes to templates or REST resources
     * @param Router $router
     * @param ApiRouter $api
     */
    public function map(Router $router, ApiRouter $api)
    {
        $api->version(
            ['v1'],
            ['namespace' => 'Ceres\Controllers'],
            function (ApiRouter $api) {
                $api->get('shop/context/{type?}', 'ContextController@getContext');
            }
        );
    }
}
