(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      vehicles: [],
      searchVehicleVar: '',
      form: new Form({
        search: ""
      })
    };
  },
  mounted: function mounted() {
    this.searcherVehicle();
  },
  methods: {
    changeTitleVehicle: function changeTitleVehicle(vehicle) {
      //console.log(vehicle);
      this.$emit('changeTitleVehicle', vehicle); // this.$emit('kuhaDriverID',driver.id);

      $('#searchVehicle').modal('hide');
    },
    searcherVehicle: function searcherVehicle() {
      var _this = this;

      //axios.get("api/vehicle").then(({ data }) => (this.vehicles = data));
      //console.log(this.vehicles);
      axios.get('api/getSearchPHBVehicle').then(function (response) {
        _this.vehicles = response.data;
        console.log(_this.vehicles);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    searchVehi: _.debounce(function () {
      Fire.$emit('searchVehicleStart');
    }, 500)
  },
  created: function created() {
    var _this2 = this;

    Fire.$on('searchVehicleStart', function () {
      var query = _this2.searchVehicleVar;
      axios.get('api/findVehicle?q=' + query).then(function (data) {
        _this2.vehicles = data.data;
      });
    });
  },
  computed: {
    filteredBlogs: function filteredBlogs() {
      var _this3 = this;

      //return this.drivers.filter(driver =>{
      //return driver.LastName.includes(this.form.search)
      //});
      return this.vehicles.filter(function (samsung) {
        return _this3.form.search.toLowerCase().split(' ').every(function (v) {
          return samsung.PlateNumber.toLowerCase().includes(v) || samsung.DriverName.toLowerCase().includes(v) || samsung.TruckerName.toLowerCase().includes(v) || samsung.EngineNumber.toLowerCase().includes(v);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=template&id=ccdd397a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=template&id=ccdd397a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "searchVehicle",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("form", [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-6" },
                      [
                        _c(
                          "b-input-group",
                          { staticClass: "mt-3", attrs: { size: "sm" } },
                          [
                            _c("b-form-input", {
                              ref: "autofocus",
                              attrs: { placeholder: "Search for..." },
                              model: {
                                value: _vm.form.search,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "search", $$v)
                                },
                                expression: "form.search"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "b-input-group-append",
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      variant: "outline-success",
                                      size: "sm"
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-search",
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "card-body table-responsive pre-scrollable"
                    },
                    [
                      _c("table", { staticClass: "table table-hover" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.filteredBlogs, function(vehicle) {
                            return _c(
                              "tr",
                              {
                                key: vehicle.id,
                                staticClass: "hover-green",
                                staticStyle: { cursor: "pointer" },
                                attrs: { id: "element" },
                                on: {
                                  click: function($event) {
                                    return _vm.changeTitleVehicle(vehicle)
                                  }
                                }
                              },
                              [
                                _c("td", [_vm._v(_vm._s(vehicle.PlateNumber))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(vehicle.DriverName))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(vehicle.TruckerName))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(vehicle.EngineNumber))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(vehicle.SerialNumber))])
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.vehicles
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-default",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n                        No Data\n                    "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _c("b", [_vm._v("Search PHB Plate Number")])
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Plate Number")]),
        _vm._v(" "),
        _c("th", [_vm._v("Driver Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Operator Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Engine")]),
        _vm._v(" "),
        _c("th", [_vm._v("Serial Number")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer " }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_c("i", { staticClass: "far fa-window-close" }), _vm._v(" Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPHBVehicle_vue_vue_type_template_id_ccdd397a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPHBVehicle.vue?vue&type=template&id=ccdd397a& */ "./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=template&id=ccdd397a&");
/* harmony import */ var _SearchPHBVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPHBVehicle.vue?vue&type=script&lang=js& */ "./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchPHBVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPHBVehicle_vue_vue_type_template_id_ccdd397a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchPHBVehicle_vue_vue_type_template_id_ccdd397a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/search/SearchPHB/SearchPHBVehicle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPHBVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPHBVehicle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPHBVehicle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=template&id=ccdd397a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=template&id=ccdd397a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPHBVehicle_vue_vue_type_template_id_ccdd397a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPHBVehicle.vue?vue&type=template&id=ccdd397a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/search/SearchPHB/SearchPHBVehicle.vue?vue&type=template&id=ccdd397a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPHBVehicle_vue_vue_type_template_id_ccdd397a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPHBVehicle_vue_vue_type_template_id_ccdd397a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);