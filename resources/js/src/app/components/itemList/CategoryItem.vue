<template>
    <article class="cmp cmp-product-thumb" :class="'cmp-availability-'+item.variation.availability.id">
        <div :class="paddingClasses" :style="paddingInlineStyles">

            <add-to-basket
                    :variation-id="item.variation.id"
                    :is-salable="!!item.filter && item.filter.isSalable"
                    :has-children="!!item.item && item.item.salableVariationCount > 1"
                    :interval-quantity="item.variation.intervalOrderQuantity || 1"
                    :minimum-quantity="item.variation.minimumOrderQuantity"
                    :maximum-quantity="!!item.variation.maximumOrderQuantity && item.variation.maximumOrderQuantity > 0 ? item.variation.maximumOrderQuantity : null"
                    :order-properties="item.properties.filter(function(prop) { return prop.property.isOderProperty })"
                    :has-order-properties="item.hasOrderProperties"
                    :has-required-order-property="item.hasRequiredOrderProperty"
                    :use-large-scale="true"
                    :show-quantity="false"
                    :item-url="item | itemURL(urlWithVariationId)"
                    :has-price="item | hasItemDefaultPrice"
                    :has-graduated-price="itemGraduatedPriceisCheapestSorting || itemGraduatedPricesalableVariationCount"
                    :item-type="item.item.itemType">
            </add-to-basket>
            <div class="d-lg-none">
                <add-to-wish-list-icon :variation-id="item.variation.id"></add-to-wish-list>
            </div>
            <div class="thumb-image">
                <div class="prop-1-1">
                    <slot name="item-image">
                        <category-image-carousel :image-urls-data="item.images | itemImages(imageUrlAccessor)"
                                                :alt-text="item.texts.name2+' '+item.texts.name3+' kaufen'"
                                                :title-text="item.texts.name2+' '+item.texts.name3+' kaufen'"
                                                :item-url="item | itemURL(urlWithVariationId)"
                                                :enable-carousel="$ceres.config.item.enableImageCarousel"
                                                :disable-carousel-on-mobile="disableCarouselOnMobile"
                                                ref="categoryImageCarousel">
                        </category-image-carousel>
                    </slot>
                </div>
            </div>

            <!-- STORE SPECIALS -->
            <slot name="store-special">
                <img v-if="item.prices.specialOffer && item.prices.default.price.value > item.prices.specialOffer.unitPrice.value || item.prices.rrp && item.prices.rrp.price.value > item.prices.default.unitPrice.value" class="store-special" src="{{ plugin_path('d2gPmThemeKonsolenkost') }}/images/sale-category-item.png" />
                <img v-else-if="item.item.condition.id === 0" class="store-special" src="{{ plugin_path('d2gPmThemeKonsolenkost') }}/images/neu-category-item.png" />
            </slot>
            <!-- ./STORE SPECIALS -->

            <!-- ITEM DETAILS -->
            <slot name="item-details">
                <div class="thumb-content">
                    <a :href="item | itemURL(urlWithVariationId)" class="thumb-title small" :class="{ 'stretched-link': $ceres.config.global.shippingCostsCategoryId == 0 }">
                        <span class="category-item-name">{{ item.texts.name2 | truncate('50') }}</span>
                        <span class="category-item-sub-name">{{ item.texts.name3 | truncate('20') }}</span>
                    </a>

                    <div class="d-flex justify-content-between align-items-end">
                        <div class="thumb-meta mt-2">
                            <slot name="before-prices"></slot>

                            <div class="prices">
                                <div class="price-view-port">
                                    <template v-if="item.prices.specialOffer && item.prices.default.price.value > item.prices.specialOffer.unitPrice.value || item.prices.rrp && item.prices.rrp.price.value > item.prices.default.unitPrice.value">
                                        <span class="small">{{ trans('d2gPmThemeKonsolenkost::Theme.categoryItemOnlySale') }}</span>
                                        <del class="crossprice" v-if="item.prices.rrp.price.value > item.prices.default.unitPrice.value">
                                            {{ item.prices.rrp.unitPrice.formatted | itemCrossPrice }}
                                        </del>
                                        <del class="crossprice" v-else>
                                            {{ item.prices.default.unitPrice.formatted | itemCrossPrice }}
                                        </del>
                                    </template>
                                </div>

                                <div class="price">
                                    <template v-if="item.item.itemType === 'set'">
                                        {{ $translate("Ceres::Template.itemSetPrice", { price: itemSetPrice }) }}
                                    </template>
                                    <template v-else-if="!!item.item && item.item.salableVariationCount > 1 && $ceres.isCheapestSorting" >
                                        {{ $translate("Ceres::Template.categoryItemFromPrice", { price: itemPrice }) }}
                                    </template>
                                    <template v-else>
                                        <span class="small">{{ trans('d2gPmThemeKonsolenkost::Theme.categoryItemOnly') }}</span> {{ item.prices.default.unitPrice.formatted | specialOffer(item.prices, "unitPrice", "formatted") }}
                                    </template>
                                </div>
                            </div>
                        </div>

                        <slot name="after-prices"></slot>

                    <div class="category-lowest-price small" v-if="item.prices.default.lowestPrice.value && hasCrossPrice">
                        <span v-html="$translate('Ceres::Template.itemLowestPrice', {'price': item.prices.default.lowestPrice.formatted})"></span>
                    </div>

                    <div class="category-unit-price small" v-if="!(item.unit.unitOfMeasurement === 'C62' && item.unit.content === 1)">
                        <span>{{ item.unit.content }}</span>
                        <span>&nbsp;{{ item.unit.names.name }}</span>
                        <span v-if="item.variation.mayShowUnitPrice">&nbsp;| {{ basePrice }}</span>
                        <span class="availability" :class="'availability-'+item.variation.availability.id"></span>
                    </div>

                    <add-to-basket
                            :variation-id="item.variation.id"
                            :is-salable="!!item.filter && item.filter.isSalable"
                            :has-children="!!item.item && item.item.salableVariationCount > 1"
                            :interval-quantity="item.variation.intervalOrderQuantity || 1"
                            :minimum-quantity="item.variation.minimumOrderQuantity"
                            :maximum-quantity="!!item.variation.maximumOrderQuantity && item.variation.maximumOrderQuantity > 0 ? item.variation.maximumOrderQuantity : null"
                            :order-properties="item.properties.filter(function(prop) { return prop.property.isOderProperty })"
                            :has-order-properties="item.hasOrderProperties"
                            :has-required-order-property="item.hasRequiredOrderProperty"
                            :use-large-scale="false"
                            :show-quantity="false"
                            :item-url="item | itemURL(urlWithVariationId)"
                            :has-price="item | hasItemDefaultPrice"
                            :has-graduated-price="itemGraduatedPriceisCheapestSorting || itemGraduatedPricesalableVariationCount"
                            :item-type="item.item.itemType">
                    </add-to-basket>

                    <div class="vat small text-muted">
                        {{ $translate("Ceres::Template.itemFootnote") }} <span v-if="showNetPrices">{{ $translate("Ceres::Template.itemExclVAT") }}</span>
                        <span v-else>{{ $translate("Ceres::Template.itemInclVAT") }}</span>
                        {{ $translate("Ceres::Template.itemExclusive") }}
                        <a v-if="$ceres.config.global.shippingCostsCategoryId > 0" data-toggle="modal" href="#shippingscosts" class="text-appearance" :title="$translate('Ceres::Template.itemShippingCosts')">{{ $translate("Ceres::Template.itemShippingCosts") }}</a>
                        <a v-else :title="$translate('Ceres::Template.itemShippingCosts')">{{ $translate("Ceres::Template.itemShippingCosts") }}</a>
                    </div>
                </div>
            </slot>
            <!-- ./ITEM DETAILS  -->
        </div>
    </article>
</template>

<script>
import { mapState } from "vuex";
import CategoryImageCarousel from "./CategoryImageCarousel.vue";
import ItemStoreSpecial from "./ItemStoreSpecial.vue";
import {getSlotData} from "../../helper/getSlotData";

export default {
    components: {
        CategoryImageCarousel,
        ItemStoreSpecial
    },

    props: {
        decimalCount:
        {
            type: Number,
            default: 0
        },
        imageUrlAccessor:
        {
            type: String,
            default: "urlMiddle"
        },
        itemData:
        {
            type: Object
        },
        disableCarouselOnMobile:
        {
            type: Boolean
        },
        paddingClasses:
        {
            type: String,
            default: null
        },
        paddingInlineStyles:
        {
            type: String,
            default: null
        },
        forceUrlWithVariationId:
        {
            type: Boolean,
            default: false
        }
    },

    jsonDataFields: [
        "itemDataRef"
    ],

    computed:
    {
        item()
        {
            return this.itemData || this.itemSlotData || this.itemDataRef;
        },

        itemSlotData: getSlotData('item-data'),

        /**
         * returns itemData.item.storeSpecial
         */
        storeSpecial()
        {
            return this.item.item.storeSpecial;
        },

        /**
         * returns itemData.texts
         */
        texts()
        {
            return this.item.texts;
        },

        itemPrice()
        {
            return this.$options.filters.specialOffer(this.item.prices.default.unitPrice.formatted, this.item.prices, "unitPrice", "formatted" );
        },

        basePrice()
        {
            return this.item.prices.default.basePrice;
        },

        itemPriceGraduated()
        {
           let unitPrice;
           if (App.config.item.enableGraduatedPrices) {
             unitPrice = this.item.prices.graduatedPrices.length > 0
                 ? this.item.prices.graduatedPrices[0].unitPrice
                 : this.item.prices.default.unitPrice;
           } else {
             unitPrice = this.item.prices.default.unitPrice;
           }

            return this.$options.filters.specialOffer(unitPrice.formatted, this.item.prices, "unitPrice", "formatted" );
        },

        itemGraduatedPriceisCheapestSorting()
        {
            return !!this.item.item && this.item.item.salableVariationCount > 1 && !!this.$ceres.isCheapestSorting;
        },

        itemGraduatedPricesalableVariationCount()
        {
            return !!this.item.item && this.item.item.salableVariationCount == 1 && this.item.prices.graduatedPrices.length > 1 && App.config.item.enableGraduatedPrices;
        },

        itemSetPrice()
        {
            return this.$options.filters.currency(
                this.item.prices.default.price.value,
                this.item.prices.default.currency
            );
        },

        urlWithVariationId()
        {
            return !this.$ceres.config.item.showPleaseSelect || this.$ceres.initialPleaseSelect == 0 || this.forceUrlWithVariationId;
        },

        hasCrossPrice() {
            const hasRrpPrice = !!this.item.prices.rrp &&
                this.item.prices.rrp.unitPrice.value > this.item.prices.default.unitPrice.value;

            const hasBeforePrice = !!this.item.prices.specialOffer &&
                !!this.item.prices.default &&
                this.item.prices.default.unitPrice.value > this.item.prices.specialOffer.unitPrice.value;

            return hasRrpPrice || hasBeforePrice;
        },

        ...mapState({
            showNetPrices: state => state.basket.showNetPrices
        })
    }
}
</script>
