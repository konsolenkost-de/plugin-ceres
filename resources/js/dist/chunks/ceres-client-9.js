(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");
=======
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> bugfix/IT-3062/guest-login
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    liveShoppingData: {
      type: Object,
      required: true
    },
    displaySettings: {
      type: Object,
      default: function _default() {
        return {
          showCrossPrice: true,
          showStock: true,
          showStockProgress: true,
          showTimer: true,
          showTimerProgress: true
        };
      }
    },
    prices: {
      type: Object,
      required: true
    },
    isActiveByStock: {
      type: Boolean
    },
    showNetPrices: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      currentInterval: null,
      duration: null,
      hasClosed: null,
      hasStarted: null,
      itemPriceRebatePercentage: 0,
      itemQuantityRemaining: 0,
      momentBegin: null,
      momentEnd: null,
      quantitySoldPercentage: 0,
      timePercentage: 0
    };
  },
  computed: {
    oldPriceBefore: function oldPriceBefore() {
      return this.$translate('Ceres::Template.liveShoppingBefore', {
        'price': '<del>' + this.prices.rrp.unitPrice.formatted + '</del>'
      });
    },
    oldPriceRrp: function oldPriceRrp() {
      return this.$translate('Ceres::Template.liveShoppingRrp', {
        'price': '<del>' + this.prices.rrp.unitPrice.formatted + '</del>'
      });
    }
  },
  created: function created() {
    this.initializeDataAndTimer();
  },
  methods: {
    initializeDataAndTimer: function initializeDataAndTimer() {
      var _this = this;

      var momentNow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()();
      this.momentBegin = dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.unix(this.liveShoppingData.liveShopping.fromTime);
      this.momentEnd = dayjs__WEBPACK_IMPORTED_MODULE_3___default.a.unix(this.liveShoppingData.liveShopping.toTime);
      this.hasStarted = this.momentBegin.valueOf() < momentNow.valueOf();
      this.hasClosed = this.momentEnd.valueOf() < momentNow.valueOf();
      this.setQuantitySoldPercentage();

      if (this.hasStarted && !this.hasClosed) {
        this.setItemPriceRebatePercentage();
      }

      clearInterval(this.currentInterval);
      this.calculations();
      this.currentInterval = setInterval(function () {
        _this.calculations();
      }, 1000);
    },
    setQuantitySoldPercentage: function setQuantitySoldPercentage() {
      var data = this.liveShoppingData.liveShopping;
      var percentage = 100 - data.quantitySold / data.quantityMax * 100;
      this.itemQuantityRemaining = data.quantityMax - data.quantitySold;
      this.quantitySoldPercentage = percentage.toFixed(App.config.item.storeSpecial);
    },
    setItemPriceRebatePercentage: function setItemPriceRebatePercentage() {
      var specialOfferPrice = this.prices.price.price.value;
      var defaultPrice = this.prices.rrp && this.prices.rrp.price.value || 0;

      if (defaultPrice === 0) {
        this.itemPriceRebatePercentage = 0;
      } else {
        var percentage = 100 - specialOfferPrice / defaultPrice * 100;
        percentage = percentage.toFixed(App.config.item.storeSpecial);
        percentage = percentage.replace(".", App.decimalSeparator);
        this.itemPriceRebatePercentage = percentage;
      }
    },
    calculations: function calculations() {
      var momentNow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()();
      var fullSeconds = 0;
      var remainSeconds = 0;
      fullSeconds = this.momentEnd.diff(this.momentBegin, "second");

      if (this.hasStarted) {
        remainSeconds = this.momentEnd.diff(momentNow, "second");
      } else {
        remainSeconds = this.momentBegin.diff(momentNow, "second");
      }

      this.timePercentage = (remainSeconds / fullSeconds * 100).toFixed(App.config.item.storeSpecial);
      this.duration = this.getDuration(remainSeconds);
      var hasToStart = !this.hasStarted && this.momentBegin < momentNow;
      var hasToClose = !this.hasClosed && this.momentEnd < momentNow;

      if (hasToStart || hasToClose) {
        clearInterval(this.currentInterval);
        this.$emit("reload-offer");
      }
    },
    getDuration: function getDuration(seconds) {
      var days = Math.floor(seconds / (60 * 60 * 24));
      seconds = seconds - days * 60 * 60 * 24;
      var hours = Math.floor(seconds / (60 * 60));
      seconds = seconds - hours * 60 * 60;
      var minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  },
  watch: {
    liveShoppingData: function liveShoppingData() {
      this.initializeDataAndTimer();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");
/* harmony import */ var _LiveShoppingDetails_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LiveShoppingDetails.vue */ "./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue");
/* harmony import */ var _itemList_ItemStoreSpecial_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../itemList/ItemStoreSpecial.vue */ "./resources/js/src/app/components/itemList/ItemStoreSpecial.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> bugfix/IT-3062/guest-login
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




<<<<<<< HEAD

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "item-data-table",
  props: {
=======
var TimeEnum = Object.freeze({
  past: 1,
  now: 2,
  future: 3
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LiveShoppingDetails: _LiveShoppingDetails_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ItemStoreSpecial: _itemList_ItemStoreSpecial_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    liveShoppingId: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value % 1 === 0 && value >= 1 && value <= 10;
      }
    },
    displaySettings: {
      type: Object
    },
>>>>>>> bugfix/IT-3062/guest-login
    paddingClasses: {
      type: String,
      default: null
    },
    paddingInlineStyles: {
      type: String,
      default: null
    },
<<<<<<< HEAD
    itemInformation: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  inject: {
    itemId: {
=======
    sorting: {
      type: String,
>>>>>>> bugfix/IT-3062/guest-login
      default: null
    },
    showNetPrices: {
      type: Boolean
    }
  },
  computed: {
<<<<<<< HEAD
    currentVariation: function currentVariation() {
      return this.$store.getters["".concat(this.itemId, "/currentItemVariation")];
    }
  },
  data: function data() {
    return {
      translationMap: {
        "item.id": "singleItemId",
        "item.condition.names.name": "singleItemCondition",
        "item.ageRestriction": "singleItemAge",
        "variation.externalId": "singleItemExternalVariationId",
        "variation.model": "singleItemModel",
        "item.manufacturer.externalName": "singleItemManufacturer",
        "item.producingCountry.names.name": "singleItemManufacturingCountry",
        "unit.names.name": "singleItemContent",
        "variation.weightG": "singleItemWeight",
        "variation.weightNetG": "singleItemNetWeight",
        "item.variationDimensions": "singleItemDimensions",
        "variation.customsTariffNumber": "singleItemCustomsTariffNumber"
      },
      formatMap: {
        "item.ageRestriction": {
          type: "filter",
          value: "ageRestriction"
        },
        "variation.weightG": {
          type: "text",
          value: " g"
        },
        "variation.weightNetG": {
          type: "text",
          value: " g"
        }
      }
    };
  },
  methods: {
    isCheckedAndNotEmpty: function isCheckedAndNotEmpty(path) {
      var _this = this;

      if (path === "item.ageRestriction") {
        // remove check for the age restriction to be greater than zero (0 means 'No age restriction')
        return true;
      }

      if (path !== "item.variationDimensions") {
        var value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, path);
        return value !== "" && value !== 0;
      } else {
        return ["variation.lengthMM", "variation.widthMM", "variation.heightMM"].some(function (element) {
          var value = _this.getFieldValue(element);

          return !Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(value) && value !== 0;
        });
      }
    },
    getTranslation: function getTranslation(path) {
      return this.$translate("Ceres::Template." + this.translationMap[path]);
    },
    getFieldValue: function getFieldValue(path) {
      var value;

      if (path === "item.variationDimensions") {
        value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "variation.lengthMM") + "×" + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "variation.widthMM") + "×" + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "variation.heightMM") + "mm";
      } else if (path === "unit.names.name") {
        value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "unit.content") + " " + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "unit.names.name");
      } else {
        value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, path);
      }

      return this.formatFieldData(value, path);
    },
    formatFieldData: function formatFieldData(value, path) {
      var format = this.formatMap[path];

      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(format)) {
        switch (format.type) {
          case "text":
            return value + format.value;

          case "filter":
            var filterMethod = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.$options.filters, format.value);
            return Object(_helper_utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(filterMethod) ? filterMethod(value) : value;
        }
      }

      return value;
=======
    currentOffer: function currentOffer() {
      return this.$store.state.liveShopping.liveShoppingOffers[this._uid];
    },
    isActive: function isActive() {
      return this.isActiveByTime && this.isActiveByStock;
    },
    isActiveByTime: function isActiveByTime() {
      if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.currentOffer)) {
        var begin = parseInt(this.currentOffer.liveShopping.fromTime) * 1000;
        var end = parseInt(this.currentOffer.liveShopping.toTime) * 1000;
        var now = Date.now();
        return begin < now && now < end;
      }

      return false;
    },
    isActiveByStock: function isActiveByStock() {
      if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.currentOffer)) {
        var liveShopping = this.currentOffer.liveShopping;
        return liveShopping.quantitySold < liveShopping.quantityMax;
      }

      return false;
    },
    storeSpecial: function storeSpecial() {
      if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.currentOffer)) {
        if (this.isActive) {
          return {
            id: 1
          };
        }

        var offerTime = this.whenIsCurrentOffer();
        var name = "";

        if (offerTime === TimeEnum.past) {
          name = this.$translate("Ceres::Template.liveShoppingOfferClosed");
        } else if (offerTime === TimeEnum.future) {
          name = this.$translate("Ceres::Template.liveShoppingNextOffer");
        } else if (offerTime === TimeEnum.now) {
          name = this.$translate("Ceres::Template.liveShoppingOfferSoldOut");
        }

        return {
          id: -1,
          names: {
            name: name
          }
        };
      }

      return null;
    },
    prices: function prices() {
      var itemPrices = this.currentOffer.item.prices;
      var prices = {
        price: itemPrices.default,
        rrp: itemPrices.rrp,
        isRrpDefaultPrice: false
      };

      if (!Object(_helper_utils__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(itemPrices.specialOffer)) {
        prices.price = itemPrices.specialOffer;
        prices.rrp = itemPrices.default || itemPrices.rrp;
        prices.isRrpDefaultPrice = !!itemPrices.default;
      }

      return prices;
    }
  },
  mounted: function mounted() {
    this.reloadOffer();
  },
  methods: {
    whenIsCurrentOffer: function whenIsCurrentOffer() {
      var begin = parseInt(this.currentOffer.liveShopping.fromTime) * 1000;
      var end = parseInt(this.currentOffer.liveShopping.toTime) * 1000;
      var now = Date.now();

      if (begin < now && now > end) {
        return TimeEnum.past;
      }

      if (begin < now && now < end) {
        return TimeEnum.now;
      }

      return TimeEnum.future;
    },
    reloadOffer: function reloadOffer() {
      this.$store.dispatch("retrieveLiveShoppingOffer", {
        liveShoppingId: this.liveShoppingId,
        sorting: this.sorting,
        uid: this._uid
      });
>>>>>>> bugfix/IT-3062/guest-login
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
=======
/***/ "./node_modules/core-js/modules/es.object.freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.freeze.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var onFreeze = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=template&id=c760b5b6&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=template&id=c760b5b6& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "live-shopping-details" },
    [
      _c("div", { staticClass: "h3 live-shopping-item-name" }, [
        _c(
          "a",
          { attrs: { href: _vm._f("itemURL")(_vm.liveShoppingData.item) } },
          [
            _c("div", { staticClass: "two-lines-of-text" }, [
              _vm._v(
                "\n                " +
                  _vm._s(
                    (
                      _vm.liveShoppingData.item.texts.name1.match(
                        /[^\ - ]+ -/
                      ) || [""]
                    ).pop()
                  ) +
                  " \n                " +
                  _vm._s(_vm.liveShoppingData.item.texts.name2) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass:
                  "live-shopping-item-name-condition two-lines-of-text"
              },
              [_vm._v(_vm._s(_vm.liveShoppingData.item.texts.name3))]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.hasStarted
        ? _c("div", { staticClass: "live-shopping-prices" }, [
            _c("div", { staticClass: "live-shopping-prices-inner" }, [
              _c("div", { staticClass: "live-shopping-prices-container" }, [
                _vm.displaySettings.showCrossPrice &&
                _vm.prices.rrp &&
                _vm.prices.rrp.unitPrice.value > 0
                  ? _c("span", [
                      _vm.liveShoppingData.item.prices.default.unitPrice.value >
                      _vm.liveShoppingData.item.prices.rrp.unitPrice.value
                        ? _c("span", [
                            _vm._v("\n                        statt "),
                            _c("del", [
                              _vm._v(
                                _vm._s(
                                  _vm.liveShoppingData.item.prices.default
                                    .unitPrice.formatted
                                )
                              )
                            ])
                          ])
                        : _c("span", [
                            _vm._v("\n                        statt "),
                            _c("del", [
                              _vm._v(
                                _vm._s(
                                  _vm.liveShoppingData.item.prices.rrp.unitPrice
                                    .formatted
                                )
                              )
                            ])
                          ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.displaySettings.showCrossPrice &&
                _vm.prices.rrp &&
                _vm.prices.rrp.unitPrice.value === 0
                  ? _c("span", [_c("span", [_vm._v(" ")])])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "live-shopping-price" }, [
                  _c("strong", [
                    _c("span", { staticClass: "d-none d-lg-inline" }, [
                      _vm._v("heute ")
                    ]),
                    _vm._v(
                      "nur " + _vm._s(_vm.prices.price.unitPrice.formatted)
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "live-shopping-prices-additional-info" },
              [
                !(
                  _vm.liveShoppingData.item.unit.unitOfMeasurement === "C62" &&
                  _vm.liveShoppingData.item.unit.content === 1
                )
                  ? _c("div", [
                      _c("span", [
                        _vm._v(_vm._s(_vm.liveShoppingData.item.unit.content))
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm.liveShoppingData.item.unit.names.name)
                        )
                      ]),
                      _vm._v(" "),
                      _vm.liveShoppingData.item.variation.mayShowUnitPrice
                        ? _c("span", [
                            _vm._v("| " + _vm._s(_vm.prices.price.basePrice))
                          ])
                        : _vm._e()
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showNetPrices
                  ? [
                      _vm._v(
                        _vm._s(_vm.$translate("Ceres::Template.itemExclVAT"))
                      )
                    ]
                  : [
                      _vm._v(
                        _vm._s(_vm.$translate("Ceres::Template.itemInclVAT"))
                      )
                    ],
                _vm._v(
                  " " +
                    _vm._s(_vm.$translate("Ceres::Template.itemExclusive")) +
                    "\n            "
                ),
                _vm.$ceres.config.global.shippingCostsCategoryId > 0
                  ? _c(
                      "a",
                      {
                        attrs: {
                          href: "https://www.konsolenkost.de/versand",
                          title: _vm.$translate(
                            "Ceres::Template.itemShippingCosts"
                          )
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.$translate("Ceres::Template.itemShippingCosts")
                          )
                        )
                      ]
                    )
                  : _c(
                      "a",
                      {
                        attrs: {
                          title: _vm.$translate(
                            "Ceres::Template.itemShippingCosts"
                          )
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.$translate("Ceres::Template.itemShippingCosts")
                          )
                        )
                      ]
                    )
              ],
              2
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.hasClosed
        ? _c("div", [
            _c(
              "a",
              {
                staticClass:
                  "btn btn-primary d-block d-lg-inline-block my-lg-3",
                attrs: { href: _vm._f("itemURL")(_vm.liveShoppingData.item) }
              },
              [
                _vm._v("\n            Will ich haben "),
                _c("span", { staticClass: "d-none d-lg-inline" }, [_vm._v(">")])
              ]
            )
          ])
        : _c("div", [_vm._m(0)]),
      _vm._v(" "),
      _vm._t("after-item-name"),
      _vm._v(" "),
      _vm.displaySettings.showTimer || _vm.displaySettings.showStock
        ? _c(
            "div",
            { staticClass: "live-shopping-countdown" },
            [
              _vm.hasStarted && !_vm.hasClosed
                ? [
                    _vm.displaySettings.showStock
                      ? _c("div", { staticClass: "live-shopping-progress" }, [
                          _vm.displaySettings.showStockProgress
                            ? _c("div", { staticClass: "progress" }, [
                                _vm.liveShoppingData.liveShopping.quantitySold <
                                _vm.liveShoppingData.liveShopping.quantityMax
                                  ? _c("div", {
                                      staticClass: "progress-bar",
                                      class:
                                        "progress-" +
                                        Math.round(
                                          _vm.quantitySoldPercentage / 10
                                        ) *
                                          10,
                                      style:
                                        "width:" +
                                        _vm.quantitySoldPercentage +
                                        "%",
                                      attrs: {
                                        role: "progressbar",
                                        "aria-valuenow": "25",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      }
                                    })
                                  : _c("div", {
                                      staticClass: "progress-bar-done",
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        role: "progressbar",
                                        "aria-valuenow": "25",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      }
                                    })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "live-shopping-progress-heading" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$translate(
                                      "Ceres::Template.liveShoppingRemainingStock",
                                      {
                                        quantitySoldPercentage:
                                          _vm.quantitySoldPercentage
                                      }
                                    )
                                  )
                                )
                              ])
                            ]
                          )
                        ])
                      : _vm._e()
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.hasClosed
                ? [
                    _vm.displaySettings.showStock
                      ? _c("div", { staticClass: "live-shopping-progress" }, [
                          _vm.displaySettings.showStockProgress
                            ? _c("div", { staticClass: "progress" }, [
                                _vm.liveShoppingData.liveShopping.quantitySold <
                                _vm.liveShoppingData.liveShopping.quantityMax
                                  ? _c("div", {
                                      staticClass: "progress-10",
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        role: "progressbar",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      }
                                    })
                                  : _c("div", {
                                      staticClass: "progress-bar-done",
                                      staticStyle: { width: "100%" },
                                      attrs: {
                                        role: "progressbar",
                                        "aria-valuenow": "25",
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      }
                                    })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._m(1)
                        ])
                      : _vm._e()
                  ]
                : _vm._e()
            ],
            2
          )
        : _c("div", { staticClass: "thumb-content" }, [
            _c("div", [
              _c("div", { staticClass: "prices" }, [
                _c("div", { staticClass: "price-view-port" }, [
                  _vm.displaySettings.showCrossPrice &&
                  _vm.prices.rrp.price.value > 0
                    ? _c("del", { staticClass: "crossprice" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm._f("itemCrossPrice")(
                                _vm.prices.rrp.price.formatted
                              )
                            ) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "price" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.prices.price.price.formatted) +
                      " *\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              !(
                _vm.liveShoppingData.item.unit.unitOfMeasurement === "C62" &&
                _vm.liveShoppingData.item.unit.content === 1
              )
                ? _c("div", { staticClass: "category-unit-price small" }, [
                    _c("span", [
                      _vm._v(_vm._s(_vm.liveShoppingData.item.unit.content))
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(_vm._s(_vm.liveShoppingData.item.unit.names.name))
                    ]),
                    _vm._v(" "),
                    _vm.liveShoppingData.item.variation.mayShowUnitPrice
                      ? _c("span", [
                          _vm._v("| " + _vm._s(_vm.prices.price.basePrice))
                        ])
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "vat small text-muted" },
                [
                  _vm.showNetPrices
                    ? [
                        _vm._v(
                          _vm._s(_vm.$translate("Ceres::Template.itemExclVAT"))
                        )
                      ]
                    : [
                        _vm._v(
                          _vm._s(_vm.$translate("Ceres::Template.itemInclVAT"))
                        )
                      ],
                  _vm._v(
                    " " +
                      _vm._s(_vm.$translate("Ceres::Template.itemExclusive")) +
                      "\n                "
                  ),
                  _vm.$ceres.config.global.shippingCostsCategoryId > 0
                    ? _c(
                        "a",
                        {
                          attrs: {
                            href: "https://www.konsolenkost.de/versand",
                            title: _vm.$translate(
                              "Ceres::Template.itemShippingCosts"
                            )
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$translate(
                                "Ceres::Template.itemShippingCosts"
                              )
                            )
                          )
                        ]
                      )
                    : _c(
                        "a",
                        {
                          attrs: {
                            title: _vm.$translate(
                              "Ceres::Template.itemShippingCosts"
                            )
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$translate(
                                "Ceres::Template.itemShippingCosts"
                              )
                            )
                          )
                        ]
                      )
                ],
                2
              )
            ])
          ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "btn btn-primary btn-danger text-white d-block d-lg-inline-block my-lg-3"
      },
      [
        _vm._v("\n           AUSVERKAUFT* "),
        _c("span", { staticClass: "d-none d-lg-inline" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "live-shopping-progress-heading" }, [
      _c("span", [_vm._v("*Aktionsbestand ausverkauft")])
    ])
  }
]
render._withStripped = true
>>>>>>> bugfix/IT-3062/guest-login

module.exports = castPath;


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=template&id=3c96f6c0&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=template&id=3c96f6c0& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !!_vm.currentOffer
        ? _c("category-item", {
            attrs: {
              "item-data": _vm.currentOffer.item,
              "decimal-count": _vm.$ceres.config.item.storeSpecial,
              "image-url-accessor": "urlMiddle",
              "padding-classes": _vm.paddingClasses,
              "padding-inline-styles": _vm.paddingInlineStyles
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "store-special",
                  fn: function() {
                    return [
                      _c("item-store-special", {
                        attrs: {
                          "store-special": _vm.storeSpecial,
                          "recommended-retail-price": _vm.prices.rrp,
                          "variation-retail-price": _vm.prices.price,
                          "decimal-count": _vm.$ceres.config.item.storeSpecial
                        }
                      })
                    ]
                  },
                  proxy: true
                },
                {
                  key: "item-image",
                  fn: function() {
                    return [
                      !!_vm.displaySettings.customImagePath
                        ? _c(
                            "a",
                            {
                              attrs: {
                                href: _vm._f("itemURL")(_vm.currentOffer.item)
                              }
                            },
                            [
                              _c("lazy-img", {
                                attrs: {
                                  "image-url":
                                    _vm.displaySettings.customImagePath,
                                  alt: _vm._f("itemName")(
                                    _vm.currentOffer.item
                                  ),
                                  title: _vm._f("itemName")(
                                    _vm.currentOffer.item
                                  )
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  },
                  proxy: true
                },
                !!_vm.currentOffer
                  ? {
                      key: "item-details",
                      fn: function() {
                        return [
                          _c("live-shopping-details", {
                            attrs: {
                              "live-shopping-data": _vm.currentOffer,
                              "display-settings": _vm.displaySettings,
                              prices: _vm.prices,
                              "is-active-by-stock": _vm.isActiveByStock,
                              "show-net-prices": _vm.showNetPrices
                            },
                            on: {
                              "reload-offer": function($event) {
                                return _vm.reloadOffer()
                              }
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "after-item-name",
                                  fn: function() {
                                    return [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "live-shopping-add-to-basket"
                                        },
                                        [
                                          _c("add-to-basket", {
                                            attrs: {
                                              "variation-id":
                                                _vm.currentOffer.item.variation
                                                  .id,
                                              "is-salable":
                                                !!_vm.currentOffer.item
                                                  .filter &&
                                                _vm.currentOffer.item.filter
                                                  .isSalable,
                                              "has-children":
                                                !!_vm.currentOffer.item
                                                  .filter &&
                                                _vm.currentOffer.item.filter
                                                  .hasActiveChildren,
                                              "interval-quantity":
                                                _vm.currentOffer.item.variation
                                                  .intervalOrderQuantity || 1,
                                              "minimum-quantity":
                                                _vm.currentOffer.item.variation
                                                  .minimumOrderQuantity,
                                              "maximum-quantity":
                                                !!_vm.currentOffer.item
                                                  .variation
                                                  .maximumOrderQuantity &&
                                                _vm.currentOffer.item.variation
                                                  .maximumOrderQuantity > 0
                                                  ? _vm.currentOffer.item
                                                      .variation
                                                      .maximumOrderQuantity
                                                  : null,
                                              "order-properties": _vm.currentOffer.item.properties.filter(
                                                function(prop) {
                                                  return prop.property
                                                    .isOderProperty
                                                }
                                              ),
                                              "has-order-properties":
                                                _vm.currentOffer.item
                                                  .hasOrderProperties,
                                              "use-large-scale": false,
                                              "show-quantity": false,
                                              "item-url": _vm._f("itemURL")(
                                                _vm.currentOffer.item
                                              ),
                                              "item-type":
                                                _vm.currentOffer.item.item
                                                  .itemType
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              false,
                              741665433
                            )
                          })
                        ]
                      },
                      proxy: true
                    }
                  : null
              ],
              null,
              true
            )
          })
        : _c("div", [_vm._t("default")], 2)
    ],
    1
  )
>>>>>>> bugfix/IT-3062/guest-login
}

module.exports = memoizeCapped;


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;
=======
/***/ "./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiveShoppingDetails_vue_vue_type_template_id_c760b5b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveShoppingDetails.vue?vue&type=template&id=c760b5b6& */ "./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=template&id=c760b5b6&");
/* harmony import */ var _LiveShoppingDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveShoppingDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> bugfix/IT-3062/guest-login


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


<<<<<<< HEAD
/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2& ***!
  \*****************************************************************************************************************************************************************************************************************************/
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LiveShoppingDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiveShoppingDetails_vue_vue_type_template_id_c760b5b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LiveShoppingDetails_vue_vue_type_template_id_c760b5b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveShoppingDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=template&id=c760b5b6&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=template&id=c760b5b6& ***!
  \*************************************************************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "table table-striped table-hover table-sm" },
    [
      _c(
        "tbody",
        [
          _vm._l(_vm.itemInformation, function(itemDataAccessor) {
            return [
              _vm.isCheckedAndNotEmpty(itemDataAccessor)
                ? _c("tr", [
                    _c(
                      "td",
                      {
                        class: _vm.paddingClasses,
                        style: _vm.paddingInlineStyles
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.getTranslation(itemDataAccessor)) +
                            "\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        class: _vm.paddingClasses,
                        style: _vm.paddingInlineStyles
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.getFieldValue(itemDataAccessor)) +
                            "\n            "
                        )
                      ]
                    )
                  ])
                : _vm._e()
            ]
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingDetails_vue_vue_type_template_id_c760b5b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveShoppingDetails.vue?vue&type=template&id=c760b5b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingDetails.vue?vue&type=template&id=c760b5b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingDetails_vue_vue_type_template_id_c760b5b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingDetails_vue_vue_type_template_id_c760b5b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> bugfix/IT-3062/guest-login



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/app/components/item/ItemDataTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue ***!
  \****************************************************************/
=======
/***/ "./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue ***!
  \***************************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDataTable.vue?vue&type=template&id=7100e9f2& */ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2&");
/* harmony import */ var _ItemDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDataTable.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _LiveShoppingItem_vue_vue_type_template_id_3c96f6c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveShoppingItem.vue?vue&type=template&id=3c96f6c0& */ "./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=template&id=3c96f6c0&");
/* harmony import */ var _LiveShoppingItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveShoppingItem.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=script&lang=js&");
>>>>>>> bugfix/IT-3062/guest-login
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _ItemDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _LiveShoppingItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiveShoppingItem_vue_vue_type_template_id_3c96f6c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LiveShoppingItem_vue_vue_type_template_id_3c96f6c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> bugfix/IT-3062/guest-login
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/app/components/item/ItemDataTable.vue"
=======
component.options.__file = "resources/js/src/app/components/liveShopping/LiveShoppingItem.vue"
>>>>>>> bugfix/IT-3062/guest-login
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
=======
/***/ "./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2& ***!
  \***********************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveShoppingItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=template&id=3c96f6c0&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=template&id=3c96f6c0& ***!
  \**********************************************************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemDataTable.vue?vue&type=template&id=7100e9f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingItem_vue_vue_type_template_id_3c96f6c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LiveShoppingItem.vue?vue&type=template&id=3c96f6c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/liveShopping/LiveShoppingItem.vue?vue&type=template&id=3c96f6c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingItem_vue_vue_type_template_id_3c96f6c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveShoppingItem_vue_vue_type_template_id_3c96f6c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> bugfix/IT-3062/guest-login



/***/ })

}]);
//# sourceMappingURL=ceres-client-9.js.map