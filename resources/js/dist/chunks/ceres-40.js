(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_UrlService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/UrlService */ "./resources/js/src/app/services/UrlService.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");
/* harmony import */ var _helper_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helper/url */ "./resources/js/src/app/helper/url.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/src/app/services/ApiService.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helper_debounce__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../helper/debounce */ "./resources/js/src/app/helper/debounce.js");












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "item-search",
  props: {
    showItemImages: {
      type: Boolean
    },
    forwardToSingleItem: {
      type: Boolean,
      default: App.config.search.forwardToSingleItem
    },
    timeout: {
      type: Number,
      default: 200
    }
  },
  data: function data() {
    return {
      isSearchFocused: App.isShopBuilder,
      onValueChanged: null,
      searchString: ""
    };
  },
  created: function created() {
    var _this = this;

    this.onValueChanged = Object(_helper_debounce__WEBPACK_IMPORTED_MODULE_16__["debounce"])(function (searchString) {
      _this.autocomplete(searchString);
    }, Object(_helper_utils__WEBPACK_IMPORTED_MODULE_12__["defaultValue"])(this.timeout, 200));
  },
  computed: _objectSpread({
    hasAutocompleteResults: function hasAutocompleteResults() {
      var item = this.autocompleteResult.item;
      var category = this.autocompleteResult.category;
      var suggestion = this.autocompleteResult.suggestion;
      return App.isShopBuilder || item && item.length || category && category.length || suggestion && suggestion.length;
    },
    isShopBuilder: function isShopBuilder() {
      return App.isShopBuilder;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_15__["mapState"])({
    autocompleteResult: function autocompleteResult(state) {
      return state.itemSearch.autocompleteResult;
    },
    moduleSearchString: function moduleSearchString(state) {
      return state.itemList.searchString;
    }
  })),
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      var urlParams = _services_UrlService__WEBPACK_IMPORTED_MODULE_11__["default"].getUrlParams(document.location.search);

      _this2.$store.commit("setItemListSearchString", urlParams.query);

      _this2.$refs.searchInput.value = !Object(_helper_utils__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(urlParams.query) ? urlParams.query : "";
    });
  },
  methods: {
    search: function search() {
      if (this.$refs.searchInput.value.length) {
        if (Object(_helper_url__WEBPACK_IMPORTED_MODULE_13__["pathnameEquals"])(App.urls.search)) {
          this.$store.dispatch("searchItems", this.$refs.searchInput.value);
        } else {
          window.open("".concat(App.urls.search, "?query=").concat(this.searchString), "_self", false);
        }
      }
    },
    autocomplete: function autocomplete(searchString) {
      if (searchString.length >= 2) {
        this.$store.dispatch("loadItemSearchAutocomplete", searchString);
      } else {
        this.$store.commit("setAutocompleteResult", {
          item: [],
          category: [],
          suggestion: []
        });
      }
    },
    // hide search, if targetElement of the blur event is not a child of components' root element
    onBlurSearchField: function onBlurSearchField(event) {
      var target = event.relatedTarget;

      if (Object(_helper_utils__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(target) || !Object(_helper_utils__WEBPACK_IMPORTED_MODULE_12__["isNullOrUndefined"])(target) && !this.$el.contains(target)) {
        this.isSearchFocused = false;
      }
    }
  },
  watch: {
    // set the current search string, after clicking on a suggestion
    moduleSearchString: function moduleSearchString(newVal) {
      if (newVal && newVal.length) {
        this.searchString = newVal;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=template&id=010b1df7&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=template&id=010b1df7& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "container-max",
      class: { "p-0": _vm.$ceres.isShopBuilder }
    },
    [
      _c(
        "div",
        { staticClass: "position-relative" },
        [
          _c(
            "div",
            { staticClass: "d-flex flex-grow-1 position-relative my-2" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchString,
                    expression: "searchString"
                  }
                ],
                ref: "searchInput",
                staticClass: "search-input flex-grow-1 px-3 py-2",
                attrs: { type: "search", autofocus: _vm.isShopBuilder },
                domProps: { value: _vm.searchString },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchString = $event.target.value
                    },
                    function($event) {
                      return _vm.onValueChanged($event.target.value)
                    }
                  ],
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.search()
                  },
                  focus: function($event) {
                    _vm.isSearchFocused = true
                  },
                  blur: function($event) {
                    return _vm.onBlurSearchField($event)
                  }
                }
              }),
              _vm._v(" "),
              _vm._t("search-button", [
                _c(
                  "button",
                  {
                    staticClass: "search-submit px-3",
                    attrs: { type: "submit" },
                    on: {
                      click: function($event) {
                        return _vm.search()
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-search" })]
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _vm.isSearchFocused
            ? [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.hasAutocompleteResults,
                        expression: "hasAutocompleteResults"
                      }
                    ]
                  },
                  [
                    _vm._t("autocomplete-suggestions", [
                      _c(
                        "div",
                        {
                          staticClass:
                            "autocomplete-suggestions shadow bg-white w-100 "
                        },
                        [
                          _c("search-suggestion-item", {
                            attrs: {
                              "show-images": _vm.showItemImages,
                              "suggestion-type": "item"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ],
                  2
                )
              ]
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/app/components/itemList/ItemSearch.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/ItemSearch.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemSearch_vue_vue_type_template_id_010b1df7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemSearch.vue?vue&type=template&id=010b1df7& */ "./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=template&id=010b1df7&");
/* harmony import */ var _ItemSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemSearch.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemSearch_vue_vue_type_template_id_010b1df7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemSearch_vue_vue_type_template_id_010b1df7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/itemList/ItemSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=template&id=010b1df7&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=template&id=010b1df7& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemSearch_vue_vue_type_template_id_010b1df7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemSearch.vue?vue&type=template&id=010b1df7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/itemList/ItemSearch.vue?vue&type=template&id=010b1df7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemSearch_vue_vue_type_template_id_010b1df7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemSearch_vue_vue_type_template_id_010b1df7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-40.js.map