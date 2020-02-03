// =========================
// Polyfill's
// =========================

import "custom-event-polyfill";

// =========================
// Framework's
// =========================

import Vue from "vue";
import Vuex from "vuex";

const mount = Vue.prototype.$mount;

Vue.prototype.$mount =
    // eslint-disable-next-line complexity
    function(el, hydrating)
    {
        const templateOverride = this.$props.templateOverride || App.componentsOverride[this.$options._componentTag];

        if (templateOverride && typeof templateOverride === "string" && templateOverride.charAt(0) === "#" && document.querySelector(templateOverride))
        {
            const renderFunctions = Vue.compile(document.querySelector(templateOverride).innerHTML);

            Object.assign(this.$options, renderFunctions);
        }

        return mount.call(this, el, hydrating);
    };

window.Vue = Vue;
window.Vuex = Vuex;

Vue.use(require("vue-script2"));

import jQuery from "jquery";
window.jQuery = jQuery;
window.$ = jQuery;

import "bootstrap";

// =========================
// COMPONENTS
// =========================
Vue.component("add-item-to-basket-overlay", () => import("./app/components/basket/AddItemToBasketOverlay.vue"));

Vue.component("add-to-basket", () => import("./app/components/basket/AddToBasket.vue"));
Vue.component("basket-preview", () => import("./app/components/basket/BasketPreview.vue"));
Vue.component("basket-totals", () => import("./app/components/basket/BasketTotals.vue"));
Vue.component("coupon", () => import("./app/components/basket/Coupon.vue"));
Vue.component("basket-list", () => import("./app/components/basket/list/BasketList.vue"));

Vue.component("step-by-step-navigation", () => import("./app/components/category/StepByStepNavigation.vue"));

Vue.component("google-maps-widget", () => import("./app/components/common/GoogleMaps.vue"));

Vue.component("lazy-img", () => import("./app/components/common/LazyImg.vue"));

Vue.component("tab-list", () => import("./app/components/common/TabList.vue"));

Vue.component("last-seen-item-list", () => import("./app/components/containers/LastSeenItemList.vue"));

Vue.component("change-email-form", () => import("./app/components/customer/ChangeEmailForm.vue"));
Vue.component("recaptcha", () => import("./app/components/customer/ReCaptcha.vue"));
Vue.component("registration", () => import("./app/components/customer/Registration.vue"));
Vue.component("reset-password-form", () => import("./app/components/customer/ResetPasswordForm.vue"));
Vue.component("forgot-password-modal", () => import("./app/components/customer/login/ForgotPassword.vue"));
Vue.component("guest-login", () => import("./app/components/customer/login/GuestLogin.vue"));
Vue.component("login", () => import("./app/components/customer/login/Login.vue"));
// legacy non-shopbuilder component
Vue.component("login-view", () => import("./app/components/customer/login/LoginView.vue"));
Vue.component("user-login-handler", () => import("./app/components/customer/login/UserLoginHandler.vue"));

Vue.component("item-bundle", () => import("./app/components/item/ItemBundle.vue"));
Vue.component("order-property-value", () => import("./app/components/item/OrderPropertyValue.vue"));
Vue.component("quantity-input", () => import("./app/components/item/QuantityInput.vue"));

Vue.component("tag-list", () => import("./app/components/item/TagList.vue"));

Vue.component("category-item", () => import("./app/components/itemList/CategoryItem.vue"));

Vue.component("item-search", () => import("./app/components/itemList/ItemSearch.vue"));

Vue.component("item-filter-list", () => import("./app/components/itemList/filter/ItemFilterList.vue"));
Vue.component("item-filter-tag-list", () => import("./app/components/itemList/filter/ItemFilterTagList.vue"));

Vue.component("live-shopping-item", () => import("./app/components/liveShopping/LiveShoppingItem.vue"));

Vue.component("newsletter-input", () => import("./app/components/newsletter/NewsletterInput.vue"));
Vue.component("newsletter-unsubscribe-input", () => import("./app/components/newsletter/NewsletterUnsubscribeInput.vue"));

Vue.component("order-return", () => import("./app/components/orderReturn/OrderReturn.vue"));

Vue.component("cookie-bar", () => import("./app/components/pageDesign/CookieBar.vue"));
Vue.component("privacy-settings", () => import("./app/components/pageDesign/PrivacySettings.vue"));
Vue.component("carousel", () => import("./app/components/pageDesign/Carousel.vue"));
Vue.component("mobile-navigation", () => import("./app/components/pageDesign/MobileNavigation.vue"));
Vue.component("notifications", () => import("./app/components/pageDesign/Notifications.vue"));
Vue.component("popper", () => import("./app/components/pageDesign/Popper.vue"));
Vue.component("shipping-country-select", () => import("./app/components/pageDesign/ShippingCountrySelect.vue"));

Vue.component("wish-list", () => import("./app/components/wishList/WishList.vue"));
Vue.component("wish-list-count", () => import("./app/components/wishList/WishListCount.vue"));

// =========================
// DIRECTIVES
// =========================
import "./app/directives/basket/basketItemQuantity";
import "./app/directives/basket/basketItemSum";
import "./app/directives/basket/toggleBasketPreview";

import "./app/directives/common/truncateTooltip";

import "./app/directives/customer/logout";

import "./app/directives/helper/populateStore";
import "./app/directives/helper/validate";
import "./app/directives/helper/waitingAnimation";
import "./app/directives/helper/waitingAnimationInfinite";

import "./app/directives/navigation/navigationTouchHandler";
import "./app/directives/navigation/openMobileNavigation";

import "./app/directives/pageDesign/scrollToTop";
import "./app/directives/pageDesign/stickInParent";
import "./app/directives/navigation/sidenavigationChildrenLoader";
import "./app/directives/pageDesign/tooltip";


// =========================
// FILTERS
// =========================
import "./app/filters/ageRestriction.filter";
import "./app/filters/arrayFirst.filter";
import "./app/filters/attachText.filter";
import "./app/filters/currency.filter";
import "./app/filters/date.filter";
import "./app/filters/fileName.filter";
import "./app/filters/fileUploadPath.filter";
import "./app/filters/graduatedPrice.filter";
import "./app/filters/hasItemDefaultPrice.filter";
import "./app/filters/inputUnit.filter";
import "./app/filters/itemBundleName.filter";
import "./app/filters/itemCrossPrice.filter";
import "./app/filters/itemImage.filter";
import "./app/filters/itemImageAlternativeText.filter";
import "./app/filters/itemImages.filter";
import "./app/filters/itemName.filter";
import "./app/filters/itemPrice.filter";
import "./app/filters/itemUrl.filter";
import "./app/filters/numberFormat.filter";
import "./app/filters/propertySurcharge.filter";
import "./app/filters/propertySurchargeSum.filter";
import "./app/filters/propertyFileUrl.filter";
import "./app/filters/translate.filter";
import "./app/filters/truncate.filter";


// =========================
// MIXINS
// =========================
import "./app/mixins/getJsonData.mixin";
import "./app/mixins/template.mixin";

// =========================
// Bootstrap frameworks
// =========================
import "./app/main";

import TranslationService from "./app/services/TranslationService";
window.ceresTranslate = TranslationService.translate;

Vue.prototype.$translate = TranslationService.translate;
Vue.prototype.$ceres = App;