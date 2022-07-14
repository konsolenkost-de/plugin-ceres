(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");
//
//
//
//
//
//
//
//
=======
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
/* harmony default export */ __webpack_exports__["default"] = ({
<<<<<<< HEAD
  name: "item-data-table",
=======
  name: "item-bundle",
>>>>>>> bugfix/IT-3062/guest-login
  props: {
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
      default: null
    }
  },
  computed: {
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
    bundleType: String,
    bundleComponents: Array
  },
  computed: {
    showItemBundleItems: function showItemBundleItems() {
      return App.bundleSetting !== 1 && this.bundleType === "bundle";
    }
  },
  methods: {
    getBundleInnerText: function getBundleInnerText(item) {
      item.variation.bundleType = null;
      return item;
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

module.exports = castPath;


/***/ }),

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
}

<<<<<<< HEAD
module.exports = memoizeCapped;
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
=======
/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemBundle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemBundle.vue */ "./resources/js/src/app/components/item/ItemBundle.vue");
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
<<<<<<< HEAD
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
>>>>>>> ed1465193 (chore: compile resources)
=======
>>>>>>> d5985bf94490045f12f75a485907f312a0e0743b


/***/ }),

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

<<<<<<< HEAD
module.exports = get;


/***/ }),
=======

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "single-item-bundle",
  components: {
    ItemBundle: _ItemBundle_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    isPreview: Boolean,
    paddingClasses: {
      type: String,
      default: null
    },
    paddingInlineStyles: {
      type: String,
      default: null
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    bundleType: function bundleType() {
      return this.isPreview ? 'bundle' : this.$store.getters["".concat(this.itemId, "/currentItemVariation")].variation.bundleType;
    },
    bundleComponents: function bundleComponents() {
      return this.$store.getters["".concat(this.itemId, "/currentItemVariation")].bundleComponents;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=4a0735cf&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=4a0735cf& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
>>>>>>> bugfix/IT-3062/guest-login

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
=======
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.showItemBundleItems
      ? _c(
          "div",
          { staticClass: "small font-weight-bold mb-3" },
          [
            _c("strong", [
              _vm._v(
                _vm._s(_vm.$translate("Ceres::Template.itemBundleContent"))
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.bundleComponents, function(item) {
              return _c(
                "div",
                { class: _vm.paddingClasses, style: _vm.paddingInlineStyles },
                [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(item.quantity) + " x")
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "text-appearance",
                      attrs: { href: _vm._f("itemURL")(item.data) }
                    },
                    [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("itemName")(
                              _vm.getBundleInnerText(item.data)
                            )
                          ) +
                          " "
                      )
                    ]
<<<<<<< HEAD
                  },
                  proxy: true
                }
              ],
              null,
              false,
              4103951690
            )
          })
        : _vm._e()
    ],
    1
  )
>>>>>>> ed1465193 (chore: compile resources)
=======
                  )
                ]
              )
            })
          ],
          2
        )
      : _c("div", [_vm._t("default")], 2)
  ])
>>>>>>> bugfix/IT-3062/guest-login
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2& ***!
  \*****************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7& ***!
  \********************************************************************************************************************************************************************************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  return _c("div", { staticClass: "basket-list-item py-3" }, [
    _c(
      "div",
      { staticClass: "basket-item component-loading with-icon d-flex" },
      [
        _c("div", { staticClass: "image-container" }, [
          _vm.image
            ? _c("img", {
                staticClass: "d-block mw-100 mh-100",
                attrs: {
                  src: _vm.image,
                  title: _vm._f("itemName")(_vm.wishListItem)
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "meta-container-wrapper" }, [
          _c("div", { staticClass: "meta-container-wrapper-inner mb-2" }, [
            _c("div", { staticClass: "meta-container" }, [
              _c("div", { staticClass: "position-relative w-100" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "item-name text-appearance font-weight-bold text-break",
                    staticStyle: { color: "#212529" },
                    attrs: { href: _vm._f("itemURL")(_vm.wishListItem) }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm._f("itemName")(_vm.wishListItem)) +
                        "\n                        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-base-price" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm._f("currency")(_vm.unitPrice)) +
                      "\n                        "
                  )
                ]),
                _vm._v(" "),
                !(
                  _vm.wishListItem.unit.unitOfMeasurement === "C62" &&
                  _vm.wishListItem.unit.content === 1
                ) && _vm.wishListItem.variation.mayShowUnitPrice
                  ? _c(
                      "div",
                      { staticClass: "item-small-prices text-muted small" },
>>>>>>> ed1465193 (chore: compile resources)
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.getTranslation(itemDataAccessor)) +
                            "\n            "
                        )
                      ]
<<<<<<< HEAD
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
=======
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "item-small-prices small" },
                  _vm._l(_vm.wishListItem.attributes, function(
                    attribute,
                    index
                  ) {
                    return _c("div", { key: index }, [
                      _c("strong", [
                        _vm._v(_vm._s(attribute.attribute.names.name) + ": ")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(attribute.value.names.name))])
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "item-small-prices text-muted small" },
                  [
                    _vm._l(_vm.wishListItem.variationProperties, function(
                      propertyGroup
                    ) {
                      return _vm._l(propertyGroup.properties, function(
                        property,
                        index
                      ) {
                        return _c("div", { key: index }, [
                          propertyGroup.name
                            ? _c("strong", [
                                _vm._v(_vm._s(propertyGroup.name) + ": ")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(property.names.name))]),
                          _vm._v(" "),
                          property.cast === "file"
                            ? _c("span", [
                                _c("a", {
                                  attrs: {
                                    href: _vm._f("propertyFileUrl")(
                                      property.values.value
                                    ),
                                    target: "_blank"
                                  },
                                  domProps: {
                                    innerHTML: _vm._s(property.values.value)
                                  }
                                })
                              ])
                            : _c("span", {
                                domProps: {
                                  innerHTML: _vm._s(property.values.value)
                                }
                              })
                        ])
                      })
                    })
                  ],
                  2
=======
  return _c(
    "item-bundle",
    {
      attrs: {
        "bundle-type": _vm.bundleType,
        "bundle-components": _vm.bundleComponents,
        "padding-classes": _vm.paddingClasses,
        "padding-inline-styles": _vm.paddingInlineStyles
      }
    },
    [
      _vm.isPreview
        ? _c("div", { staticClass: "widget-placeholder p-0" }, [
            _c("div", [
              _c("p", { staticClass: "title mb-0" }, [
                _vm._v(
                  _vm._s(
                    _vm.$translate("Ceres::Widget.itemBundlePlaceholderTitle")
                  )
>>>>>>> bugfix/IT-3062/guest-login
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "description mt-3" }, [
                _vm._v(
                  _vm._s(
                    _vm.$translate(
                      "Ceres::Widget.itemBundlePlaceholderDescription"
                    )
                  )
                )
              ])
            ])
          ])
<<<<<<< HEAD
        ])
      ]
    )
  ])
>>>>>>> ed1465193 (chore: compile resources)
=======
        : _vm._e()
    ]
  )
>>>>>>> bugfix/IT-3062/guest-login
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/app/components/item/ItemDataTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue ***!
  \****************************************************************/
=======
/***/ "./resources/js/src/app/components/item/ItemBundle.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemBundle.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemBundle_vue_vue_type_template_id_4a0735cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemBundle.vue?vue&type=template&id=4a0735cf& */ "./resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=4a0735cf&");
/* harmony import */ var _ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemBundle.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemBundle_vue_vue_type_template_id_4a0735cf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemBundle_vue_vue_type_template_id_4a0735cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/ItemBundle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemBundle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=4a0735cf&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=4a0735cf& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_template_id_4a0735cf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemBundle.vue?vue&type=template&id=4a0735cf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=template&id=4a0735cf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_template_id_4a0735cf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemBundle_vue_vue_type_template_id_4a0735cf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/app/components/item/SingleItemBundle.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/app/components/item/SingleItemBundle.vue ***!
  \*******************************************************************/
>>>>>>> bugfix/IT-3062/guest-login
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDataTable.vue?vue&type=template&id=7100e9f2& */ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2&");
/* harmony import */ var _ItemDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDataTable.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleItemBundle.vue?vue&type=template&id=605aaeb7& */ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&");
/* harmony import */ var _SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleItemBundle.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&");
>>>>>>> bugfix/IT-3062/guest-login
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _ItemDataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemDataTable_vue_vue_type_template_id_7100e9f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
component.options.__file = "resources/js/src/app/components/item/SingleItemBundle.vue"
>>>>>>> bugfix/IT-3062/guest-login
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
=======
/***/ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleItemBundle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7& ***!
  \**************************************************************************************************/
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
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleItemBundle.vue?vue&type=template&id=605aaeb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> bugfix/IT-3062/guest-login



/***/ })

}]);
//# sourceMappingURL=ceres-11.js.map