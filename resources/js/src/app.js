import Vue from "vue";

// =========================
// COMPONENTS
// =========================

// BASE
// import AddItemToBasketOverlay from "./app/components/basket/AddItemToBasketOverlay.vue";
// import AddToBasket from "./app/components/basket/AddToBasket.vue";
// import BasketPreview from "./app/components/basket/BasketPreview.vue";
// import BasketTotals from "./app/components/basket/BasketTotals.vue";
// import Coupon from "./app/components/basket/Coupon.vue";
// import BasketList from "./app/components/basket/list/BasketList.vue";

// import StepByStepNavigation from "./app/components/category/StepByStepNavigation.vue";
// import GoogleMaps from "./app/components/common/GoogleMaps.vue";
import LazyImg from "./app/components/common/LazyImg.vue";
import Intersect from "./app/components/common/Intersect.vue";
import TabList from "./app/components/common/TabList.vue";
import TabItem from "./app/components/common/TabItem.vue";
// import LastSeenItemList from "./app/components/containers/LastSeenItemList.vue";

// import ChangeEmailForm from "./app/components/customer/ChangeEmailForm.vue";
import ReCaptcha from "./app/components/customer/ReCaptcha.vue";
// import Registration from "./app/components/customer/Registration.vue";
// import ResetPasswordForm from "./app/components/customer/ResetPasswordForm.vue";
// import ForgotPassword from "./app/components/customer/login/ForgotPassword.vue";
// import GuestLogin from "./app/components/customer/login/GuestLogin.vue";
// import Login from "./app/components/customer/login/Login.vue";
// legacy non-shopbuilder component
// import LoginView from "./app/components/customer/login/LoginView.vue";
import UserLoginHandler from "./app/components/customer/login/UserLoginHandler.vue";

// import ItemBundle from "./app/components/item/ItemBundle.vue";
// import OrderPropertyValue from "./app/components/item/OrderPropertyValue.vue";
// import QuantityInput from "./app/components/item/QuantityInput.vue";

// import TagList from "./app/components/item/TagList.vue";

import CategoryItem from "./app/components/itemList/CategoryItem.vue";
import ItemSearch from "./app/components/itemList/ItemSearch.vue";
// import SearchSuggestionItem from "./app/components/itemList/SearchSuggestionItem.vue";
// import ItemFilterList from "./app/components/itemList/filter/ItemFilterList.vue";
// import ItemFilterTagList from "./app/components/itemList/filter/ItemFilterTagList.vue";

// import LiveShoppingItem from "./app/components/liveShopping/LiveShoppingItem.vue";

// import NewsletterInput from "./app/components/newsletter/NewsletterInput.vue";
// import NewsletterUnsubscribeInput from "./app/components/newsletter/NewsletterUnsubscribeInput.vue";

// import OrderReturn from "./app/components/orderReturn/OrderReturn.vue";

import CookieBar from "./app/components/pageDesign/CookieBar.vue";
// import PrivacySettings from "./app/components/pageDesign/PrivacySettings.vue";
import Carousel from "./app/components/pageDesign/Carousel.vue";
import Icon from "./app/components/pageDesign/Icon.vue";
import MobileNavigation from "./app/components/pageDesign/MobileNavigation.vue";
import Notifications from "./app/components/pageDesign/Notifications.vue";
import Popper from "./app/components/pageDesign/Popper.vue";
// import ShippingCountrySelect from "./app/components/pageDesign/ShippingCountrySelect.vue";
import LoadingAnimation from "./app/components/pageDesign/LoadingAnimation.vue";

// import WishList from "./app/components/wishList/WishList.vue";
import WishListCount from "./app/components/wishList/WishListCount.vue";

import LazyLoad from "./app/components/common/LazyLoad.vue";

// import AddToWishList from "./app/components/item/AddToWishList.vue";
// import GraduatedPrices from "./app/components/item/GraduatedPrices.vue";
// import ItemDataTable from "./app/components/item/ItemDataTable.vue";
// import ItemImageCarousel from "./app/components/item/ItemImageCarousel.vue";
// import ItemPrice from "./app/components/item/ItemPrice.vue";
// import SetPrice from "./app/components/item/SetPrice.vue";
// import OrderPropertyList from "./app/components/item/OrderPropertyList.vue";
// import VariationSelect from "./app/components/item/VariationSelect.vue";
// import ItemAvailability from "./app/components/item/ItemAvailability.vue";
// import SingleItemBundle from "./app/components/item/SingleItemBundle.vue";
// import SingleAddToBasket from "./app/components/item/SingleAddToBasket.vue";
// import SetQuantityInput from "./app/components/item/SetQuantityInput.vue";
import SingleItem from "./app/components/item/SingleItem.vue";
import SingleItemSetComponent from "./app/components/item/SingleItemSetComponent.vue";
// import FormAttachment from "./app/components/form/FormAttachment.vue";


// EXTERNAL
import LazyHydrate from "vue-lazy-hydration";

// CHECKOUT
// import "./app/components/checkout/AcceptGtcCheck";
// import "./app/components/checkout/Checkout";
// import "./app/components/checkout/ContactWishInput";
// import "./app/components/checkout/CustomerSignInput";
// import "./app/components/checkout/PaymentProviderSelect";
// import "./app/components/checkout/PlaceOrder";
// import "./app/components/checkout/ShippingPrivacyHintCheck";
// import "./app/components/checkout/ShippingProfileSelect";
// import "./app/components/checkout/SubscribeNewsletterCheck";

// import "./app/components/customer/AddressSelect/AddressHeader";
// import "./app/components/customer/AddressSelect/InvoiceAddressSelect";
// import "./app/components/customer/AddressSelect/ShippingAddressSelect";

// import "./app/components/myAccount/AccountSettings";
// import "./app/components/myAccount/BankDataSelect";
// import "./app/components/myAccount/ChangePaymentMethod";
// import "./app/components/myAccount/MyAccount";
// import "./app/components/myAccount/OrderDocuments";

// // legacy non-shopbuilder components
// import "./app/components/myAccount/History";

// // new shopbuilder-only component
// import EditCouponOverlay from "./app/components/myAccount/EditCouponOverlay.vue";
// import "./app/components/myAccount/OrderHistoryList";
// import "./app/components/myAccount/OrderReturnHistoryList";

// =========================
// SERVICES
// =========================
import TranslationService from "./app/services/TranslationService";

// =========================
// DIRECTIVES
// =========================
import "./app/directives/basket/basketItemQuantity";
import "./app/directives/basket/basketItemSum";
import "./app/directives/basket/toggleBasketPreview";
import "./app/directives/category/openFilterToolbar";
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
import "./app/filters/propertyFileUrl.filter";
import "./app/filters/translate.filter";
import "./app/filters/truncate.filter";

import { createStore } from "./app/store/index";

export function createApp(options)
{
    // =========================
    // COMPONENTS
    // =========================

    // BASE
    Vue.component("add-item-to-basket-overlay", () => import("./app/components/basket/AddItemToBasketOverlay.vue"));
    Vue.component("add-to-basket", () => import("./app/components/basket/AddToBasket.vue"));
    Vue.component("basket-preview", () => import("./app/components/basket/BasketPreview.vue"));
    Vue.component("basket-totals", () => import("./app/components/basket/BasketTotals.vue"));
    Vue.component("coupon", () => import("./app/components/basket/Coupon.vue"));
    Vue.component("basket-list", () => import("./app/components/basket/list/BasketList.vue"));
    Vue.component("step-by-step-navigation", () => import("./app/components/category/StepByStepNavigation.vue"));
    Vue.component("google-maps-widget", () => import("./app/components/common/GoogleMaps.vue"));
    Vue.component("lazy-img", LazyImg);
    Vue.component("intersect", Intersect);
    Vue.component("tab-list", TabList);
    Vue.component("tab-item", TabItem);
    Vue.component("last-seen-item-list", () => import("./app/components/containers/LastSeenItemList.vue"));
    Vue.component("change-email-form", () => import("./app/components/customer/ChangeEmailForm.vue"));
    Vue.component("recaptcha", ReCaptcha);
    Vue.component("registration", () => import("./app/components/customer/Registration.vue"));
    Vue.component("reset-password-form", () => import("./app/components/customer/ResetPasswordForm.vue"));
    Vue.component("forgot-password-modal", () => import("./app/components/customer/login/ForgotPassword.vue"));
    Vue.component("guest-login", () => import("./app/components/customer/login/GuestLogin.vue"));
    Vue.component("login", () => import("./app/components/customer/login/Login.vue"));
    Vue.component("login-view", () => import("./app/components/customer/login/LoginView.vue"));
    Vue.component("user-login-handler", UserLoginHandler);
    Vue.component("item-bundle", () => import("./app/components/item/ItemBundle.vue"));
    Vue.component("order-property-value", () => import("./app/components/item/OrderPropertyValue.vue"));
    Vue.component("quantity-input", () => import("./app/components/item/QuantityInput.vue"));
    Vue.component("tag-list", () => import("./app/components/item/TagList.vue"));
    Vue.component("category-item", CategoryItem);
    Vue.component("item-search", ItemSearch);
    Vue.component("search-suggestion-item", () => import("./app/components/itemList/SearchSuggestionItem.vue"));
    Vue.component("item-filter-list", () => import("./app/components/itemList/filter/ItemFilterList.vue"));
    Vue.component("item-filter-tag-list", () => import("./app/components/itemList/filter/ItemFilterTagList.vue"));
    Vue.component("live-shopping-item", () => import("./app/components/liveShopping/LiveShoppingItem.vue"));
    Vue.component("newsletter-input", () => import("./app/components/newsletter/NewsletterInput.vue"));
    Vue.component("newsletter-unsubscribe-input", () => import("./app/components/newsletter/NewsletterUnsubscribeInput.vue"));
    Vue.component("order-return", () => import("./app/components/orderReturn/OrderReturn.vue"));
    Vue.component("cookie-bar", CookieBar);
    Vue.component("privacy-settings", () => import("./app/components/pageDesign/PrivacySettings.vue"));
    Vue.component("carousel", Carousel);
    Vue.component("icon", Icon);
    Vue.component("mobile-navigation", MobileNavigation);
    Vue.component("notifications", Notifications);
    Vue.component("popper", Popper);
    Vue.component("shipping-country-select", () => import("./app/components/pageDesign/ShippingCountrySelect.vue"));
    Vue.component("loading-animation", LoadingAnimation);
    Vue.component("wish-list", () => import("./app/components/wishList/WishList.vue"));
    Vue.component("wish-list-count", WishListCount);
    Vue.component("lazy-load", LazyLoad);
    Vue.component("add-to-wish-list", () => import("./app/components/item/AddToWishList.vue"));
    Vue.component("graduated-prices", () => import("./app/components/item/GraduatedPrices.vue"));
    Vue.component("item-data-table", () => import("./app/components/item/ItemDataTable.vue"));
    Vue.component("item-image-carousel", () => import("./app/components/item/ItemImageCarousel.vue"));
    Vue.component("item-price", () => import("./app/components/item/ItemPrice.vue"));
    Vue.component("set-price", () => import("./app/components/item/SetPrice.vue"));
    Vue.component("order-property-list", () => import("./app/components/item/OrderPropertyList.vue"));
    Vue.component("variation-select", () => import("./app/components/item//VariationSelect.vue"));
    Vue.component("item-availability", () => import("./app/components/item//ItemAvailability.vue"));
    Vue.component("single-item-bundle", () => import("./app/components/item/SingleItemBundle.vue"));
    Vue.component("single-add-to-basket", () => import("./app/components/item/SingleAddToBasket.vue"));
    Vue.component("set-quantity-input", () => import("./app/components/item/SetQuantityInput.vue"));
    Vue.component("single-item", SingleItem);
    Vue.component("single-item-set-component", SingleItemSetComponent);
    Vue.component("form-attachment", () => import("./app/components/form/FormAttachment.vue"));

    // EXTERNAL
    Vue.component("lazy-hydrate", LazyHydrate);
    // CHECKOUT
    // Vue.component("edit-coupon-overlay", EditCouponOverlay);

    // window.ceresTranslate = TranslationService.translate;

    Vue.prototype.$translate = TranslationService.translate;
    Vue.prototype.$ceres = App;

    const store = createStore();

    const defaultOptions = {
        store,
        ...options
    };

    const app = new Vue(defaultOptions);

    return { app, store };
}
