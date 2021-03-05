exports.ids = [8];
exports.modules = {

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemBundle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "item-bundle",
  props: {
    paddingClasses: {
      type: String,
      default: null
    },
    paddingInlineStyles: {
      type: String,
      default: null
    },
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemBundle_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemBundle.vue */ "./resources/js/src/app/components/item/ItemBundle.vue");
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
      ? _vm._ssrNode(
          '<div class="small font-weight-bold mb-3">',
          "</div>",
          [
            _vm._ssrNode(
              "<strong>" +
                _vm._ssrEscape(
                  _vm._s(_vm.$translate("Ceres::Template.itemBundleContent"))
                ) +
                "</strong> " +
                _vm._ssrList(_vm.bundleComponents, function(item) {
                  return (
                    "<div" +
                    _vm._ssrClass(null, _vm.paddingClasses) +
                    _vm._ssrStyle(null, _vm.paddingInlineStyles, null) +
                    '><span class="text-muted">' +
                    _vm._ssrEscape(_vm._s(item.quantity) + " x") +
                    "</span> <a" +
                    _vm._ssrAttr("href", _vm._f("itemURL")(item.data)) +
                    ' class="text-appearance">' +
                    _vm._ssrEscape(
                      " " +
                        _vm._s(
                          _vm._f("itemName")(_vm.getBundleInnerText(item.data))
                        ) +
                        " "
                    ) +
                    "</a></div>"
                  )
                })
            )
          ],
          2
        )
      : _vm._ssrNode("<div>", "</div>", [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

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
  "213f1534"
  
)

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleItemBundle.vue?vue&type=template&id=605aaeb7& */ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&");
/* harmony import */ var _SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleItemBundle.vue?vue&type=script&lang=js& */ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "8954bde4"
  
)

component.options.__file = "resources/js/src/app/components/item/SingleItemBundle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleItemBundle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleItemBundle.vue?vue&type=template&id=605aaeb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/SingleItemBundle.vue?vue&type=template&id=605aaeb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleItemBundle_vue_vue_type_template_id_605aaeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;
//# sourceMappingURL=ceres-server-8.js.map