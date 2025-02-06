"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Services/[id]",{

/***/ "./src/pages/Services/[id].jsx":
/*!*************************************!*\
  !*** ./src/pages/Services/[id].jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: () => (/* binding */ __N_SSG),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Service Details Page Component\nconst ServiceDetails = (param)=>{\n    let { service, error } = param;\n    var _service_featuredImage;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error:\",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n        lineNumber: 26,\n        columnNumber: 21\n    }, undefined);\n    if (!service) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No service found.\"\n    }, void 0, false, {\n        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n        lineNumber: 27,\n        columnNumber: 24\n    }, undefined);\n    let acfData = {};\n    try {\n        acfData = JSON.parse(service.acf); // Parsing ACF JSON\n    } catch (parseError) {\n        console.error(\"Error parsing ACF data:\", parseError);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-[100px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-semibold text-5xl my-2\",\n                children: service.title\n            }, void 0, false, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Last updated on\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-blue-500\",\n                        children: [\n                            \" \",\n                            new Date(service.date).toLocaleDateString(),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            ((_service_featuredImage = service.featuredImage) === null || _service_featuredImage === void 0 ? void 0 : _service_featuredImage.node) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: service.featuredImage.node.sourceUrl,\n                alt: service.title,\n                width: 1800,\n                height: 0,\n                className: \"mx-auto my-6 h-[500px]\",\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  my-8 mx-auto bg-slate-200 w-52\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[25%] p-4 border-2 border-gray-300 rounded-lg shadow-md \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-bold mb-4\",\n                                children: acfData.first_plan_title\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-4\",\n                                children: acfData.first_plan_price\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-4\",\n                                dangerouslySetInnerHTML: {\n                                    __html: acfData.first_plan_description\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600\",\n                                children: \"Order now\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[25%] p-4 border-2 border-gray-300 rounded-lg shadow-md \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-bold mb-4\",\n                                children: acfData.second_plan_title\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-4\",\n                                children: acfData.second_plan_price\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-4\",\n                                dangerouslySetInnerHTML: {\n                                    __html: acfData.second_plan_description\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600\",\n                                children: \"Order now\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[25%] p-4 border-2 border-gray-300 rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-bold mb-4\",\n                                children: acfData.third_plan_title\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg mb-4\",\n                                children: acfData.third_plan_price\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-4 \",\n                                dangerouslySetInnerHTML: {\n                                    __html: acfData.third_plan_description\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600\",\n                                children: \"Order now\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"service-content\",\n                dangerouslySetInnerHTML: {\n                    __html: service.content\n                }\n            }, void 0, false, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ServiceDetails;\nvar __N_SSG = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceDetails);\nvar _c;\n$RefreshReg$(_c, \"ServiceDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvU2VydmljZXMvW2lkXS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQXNCL0IsaUNBQWlDO0FBQ2pDLE1BQU1DLGlCQUFpQjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1FBb0JuQ0Q7SUFuQkwsSUFBSUMsT0FBTyxxQkFBTyw4REFBQ0M7O1lBQUU7WUFBT0Q7Ozs7Ozs7SUFDNUIsSUFBSSxDQUFDRCxTQUFTLHFCQUFPLDhEQUFDRTtrQkFBRTs7Ozs7O0lBRXhCLElBQUlDLFVBQVUsQ0FBQztJQUNmLElBQUk7UUFDRkEsVUFBVUMsS0FBS0MsS0FBSyxDQUFDTCxRQUFRTSxHQUFHLEdBQUcsbUJBQW1CO0lBQ3hELEVBQUUsT0FBT0MsWUFBWTtRQUNuQkMsUUFBUVAsS0FBSyxDQUFDLDJCQUEyQk07SUFDM0M7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUErQlYsUUFBUVksS0FBSzs7Ozs7OzBCQUUxRCw4REFBQ0g7O29CQUFJO2tDQUVILDhEQUFDSTt3QkFBS0gsV0FBVTs7NEJBQWdCOzRCQUFFLElBQUlJLEtBQUtkLFFBQVFlLElBQUksRUFBRUMsa0JBQWtCOzRCQUFHOzs7Ozs7Ozs7Ozs7O1lBRy9FaEIsRUFBQUEseUJBQUFBLFFBQVFpQixhQUFhLGNBQXJCakIsNkNBQUFBLHVCQUF1QmtCLElBQUksbUJBQzFCLDhEQUFDcEIsbURBQUtBO2dCQUNKcUIsS0FBS25CLFFBQVFpQixhQUFhLENBQUNDLElBQUksQ0FBQ0UsU0FBUztnQkFDekNDLEtBQUtyQixRQUFRWSxLQUFLO2dCQUNsQlUsT0FBTztnQkFDUEMsUUFBUTtnQkFDUmIsV0FBVTtnQkFDVmMsU0FBUTs7Ozs7OzBCQUtaLDhEQUFDZjtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2U7Z0NBQUdmLFdBQVU7MENBQTJCUCxRQUFRdUIsZ0JBQWdCOzs7Ozs7MENBQ2pFLDhEQUFDeEI7Z0NBQUVRLFdBQVU7MENBQWdCUCxRQUFRd0IsZ0JBQWdCOzs7Ozs7MENBQ3JELDhEQUFDekI7Z0NBQ0NRLFdBQVU7Z0NBQ1ZrQix5QkFBeUI7b0NBQUVDLFFBQVExQixRQUFRMkIsc0JBQXNCO2dDQUFDOzs7Ozs7MENBRXBFLDhEQUFDQztnQ0FBT3JCLFdBQVU7MENBQXFFOzs7Ozs7Ozs7Ozs7a0NBTXpGLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNlO2dDQUFHZixXQUFVOzBDQUEyQlAsUUFBUTZCLGlCQUFpQjs7Ozs7OzBDQUNsRSw4REFBQzlCO2dDQUFFUSxXQUFVOzBDQUFnQlAsUUFBUThCLGlCQUFpQjs7Ozs7OzBDQUN0RCw4REFBQy9CO2dDQUNDUSxXQUFVO2dDQUNWa0IseUJBQXlCO29DQUFFQyxRQUFRMUIsUUFBUStCLHVCQUF1QjtnQ0FBQzs7Ozs7OzBDQUVyRSw4REFBQ0g7Z0NBQU9yQixXQUFVOzBDQUFxRTs7Ozs7Ozs7Ozs7O2tDQU16Riw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDZTtnQ0FBR2YsV0FBVTswQ0FBMkJQLFFBQVFnQyxnQkFBZ0I7Ozs7OzswQ0FDakUsOERBQUNqQztnQ0FBRVEsV0FBVTswQ0FBZ0JQLFFBQVFpQyxnQkFBZ0I7Ozs7OzswQ0FDckQsOERBQUNsQztnQ0FDQ1EsV0FBVTtnQ0FDVmtCLHlCQUF5QjtvQ0FBRUMsUUFBUTFCLFFBQVFrQyxzQkFBc0I7Z0NBQUM7Ozs7OzswQ0FFcEUsOERBQUNOO2dDQUFPckIsV0FBVTswQ0FBcUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPM0YsOERBQUNEO2dCQUNDQyxXQUFVO2dCQUNWa0IseUJBQXlCO29CQUFFQyxRQUFRN0IsUUFBUXNDLE9BQU87Z0JBQUM7Ozs7Ozs7Ozs7OztBQUkzRDtLQWhGTXZDOztBQTRJTixpRUFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsiRjpcXDEgdHViYVxcd3AgYXJlbmEgQVBQIE5FV1xcbXktYXBwXFxzcmNcXHBhZ2VzXFxTZXJ2aWNlc1xcW2lkXS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTENsaWVudCwgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbi8vIEdyYXBoUUwgUXVlcnlcclxuY29uc3QgR0VUX1NFUlZJQ0VfQllfSUQgPSBncWxgXHJcbiAgcXVlcnkgR2V0U2VydmljZUJ5SUQoJGlkOiBJRCEpIHtcclxuICAgIHNlcnZpY2UoaWQ6ICRpZCwgaWRUeXBlOiBEQVRBQkFTRV9JRCkge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBjb250ZW50XHJcbiAgICAgIGRhdGVcclxuICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYWNmXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZW5kcG9pbnQgPSBcImh0dHBzOi8vc3RnLXdwYXJlbmEtc3RhZ2luZy5raW5zdGEuY2xvdWQvZ3JhcGhxbFwiO1xyXG5cclxuLy8gU2VydmljZSBEZXRhaWxzIFBhZ2UgQ29tcG9uZW50XHJcbmNvbnN0IFNlcnZpY2VEZXRhaWxzID0gKHsgc2VydmljZSwgZXJyb3IgfSkgPT4ge1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOntlcnJvcn08L3A+O1xyXG4gIGlmICghc2VydmljZSkgcmV0dXJuIDxwPk5vIHNlcnZpY2UgZm91bmQuPC9wPjtcclxuXHJcbiAgbGV0IGFjZkRhdGEgPSB7fTtcclxuICB0cnkge1xyXG4gICAgYWNmRGF0YSA9IEpTT04ucGFyc2Uoc2VydmljZS5hY2YpOyAvLyBQYXJzaW5nIEFDRiBKU09OXHJcbiAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgQUNGIGRhdGE6XCIsIHBhcnNlRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtWzEwMHB4XVwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LTV4bCBteS0yXCI+e3NlcnZpY2UudGl0bGV9PC9oMT5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgTGFzdCB1cGRhdGVkIG9uXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPiB7bmV3IERhdGUoc2VydmljZS5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX0gPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzZXJ2aWNlLmZlYXR1cmVkSW1hZ2U/Lm5vZGUgJiYgKFxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtzZXJ2aWNlLmZlYXR1cmVkSW1hZ2Uubm9kZS5zb3VyY2VVcmx9XHJcbiAgICAgICAgICBhbHQ9e3NlcnZpY2UudGl0bGV9XHJcbiAgICAgICAgICB3aWR0aD17MTgwMH1cclxuICAgICAgICAgIGhlaWdodD17MH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktNiBoLVs1MDBweF1cIlxyXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogUGxhbnMgU2VjdGlvbiAoQmFzaWMsIFN0YW5kYXJkLCBQcmVtaXVtKSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBteS04IG14LWF1dG8gYmctc2xhdGUtMjAwIHctNTJcIj5cclxuICAgICAgICB7LyogQmFzaWMgUGxhbiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI1JV0gcC00IGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCBcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPnthY2ZEYXRhLmZpcnN0X3BsYW5fdGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPnthY2ZEYXRhLmZpcnN0X3BsYW5fcHJpY2V9PC9wPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWNmRGF0YS5maXJzdF9wbGFuX2Rlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgICA+PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC00IGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDBcIj5cclxuICAgICAgICAgICAgT3JkZXIgbm93XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFN0YW5kYXJkIFBsYW4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsyNSVdIHAtNCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbWQgXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57YWNmRGF0YS5zZWNvbmRfcGxhbl90aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi00XCI+e2FjZkRhdGEuc2Vjb25kX3BsYW5fcHJpY2V9PC9wPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYWNmRGF0YS5zZWNvbmRfcGxhbl9kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgPjwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwXCI+XHJcbiAgICAgICAgICAgIE9yZGVyIG5vd1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBQcmVtaXVtIFBsYW4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsyNSVdIHAtNCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPnthY2ZEYXRhLnRoaXJkX3BsYW5fdGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPnthY2ZEYXRhLnRoaXJkX3BsYW5fcHJpY2V9PC9wPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBcIlxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFjZkRhdGEudGhpcmRfcGxhbl9kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgPjwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwXCI+XHJcbiAgICAgICAgICAgIE9yZGVyIG5vd1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIENvbnRlbnQgd2l0aCBJbWFnZSBTdHlsaW5nICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2VydmljZS1jb250ZW50XCJcclxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlcnZpY2UuY29udGVudCB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGBnZXRTdGF0aWNQcm9wc2AgZm9yIGZldGNoaW5nIHNlcnZpY2UgZGF0YSBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoZW5kcG9pbnQpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuXHJcbiAgbGV0IGRlY29kZWRJZDtcclxuICB0cnkge1xyXG4gICAgZGVjb2RlZElkID0gYXRvYihpZCkuc3BsaXQoXCI6XCIpWzFdOyAvLyBEZWNvZGUgYW5kIGV4dHJhY3QgdGhlIHNlcnZpY2UgSURcclxuICAgIGNvbnNvbGUubG9nKFwiRGVjb2RlZCBJRDpcIiwgZGVjb2RlZElkKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LnJlcXVlc3QoR0VUX1NFUlZJQ0VfQllfSUQsIHsgaWQ6IGRlY29kZWRJZCB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBzZXJ2aWNlOiBkYXRhLnNlcnZpY2UgfHwgbnVsbCB9LFxyXG4gICAgICByZXZhbGlkYXRlOiA2MCwgLy8gUmV2YWxpZGF0ZSBhZnRlciA2MCBzZWNvbmRzXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2VydmljZTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgc2VydmljZTogbnVsbCwgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHNlcnZpY2UgZGF0YVwiIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDYwLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGBnZXRTdGF0aWNQYXRoc2AgdG8gZGVmaW5lIHdoaWNoIHBhdGhzIG5lZWQgdG8gYmUgcHJlLXJlbmRlcmVkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBjbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudChlbmRwb2ludCk7XHJcbiAgY29uc3QgR0VUX0FMTF9TRVJWSUNFUyA9IGdxbGBcclxuICAgIHF1ZXJ5IEdldEFsbFNlcnZpY2VzIHtcclxuICAgICAgc2VydmljZXMge1xyXG4gICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQucmVxdWVzdChHRVRfQUxMX1NFUlZJQ0VTKTtcclxuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5zZXJ2aWNlcy5ub2Rlcy5tYXAoKHNlcnZpY2UpID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBpZDogYnRvYShgc2VydmljZToke3NlcnZpY2UuaWR9YCkgfSwgLy8gQmFzZTY0IGVuY29kZSB0aGUgSURcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXRocyxcclxuICAgICAgZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYWxsIHNlcnZpY2VzOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXRoczogW10sXHJcbiAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTZXJ2aWNlRGV0YWlscyIsInNlcnZpY2UiLCJlcnJvciIsInAiLCJhY2ZEYXRhIiwiSlNPTiIsInBhcnNlIiwiYWNmIiwicGFyc2VFcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwic3BhbiIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzcmMiLCJzb3VyY2VVcmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciLCJoMyIsImZpcnN0X3BsYW5fdGl0bGUiLCJmaXJzdF9wbGFuX3ByaWNlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJmaXJzdF9wbGFuX2Rlc2NyaXB0aW9uIiwiYnV0dG9uIiwic2Vjb25kX3BsYW5fdGl0bGUiLCJzZWNvbmRfcGxhbl9wcmljZSIsInNlY29uZF9wbGFuX2Rlc2NyaXB0aW9uIiwidGhpcmRfcGxhbl90aXRsZSIsInRoaXJkX3BsYW5fcHJpY2UiLCJ0aGlyZF9wbGFuX2Rlc2NyaXB0aW9uIiwiY29udGVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Services/[id].jsx\n"));

/***/ })

});