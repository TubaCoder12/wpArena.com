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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: () => (/* binding */ __N_SSG),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ServiceDetails = (param)=>{\n    let { service, error } = param;\n    var _service_featuredImage;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n        lineNumber: 25,\n        columnNumber: 21\n    }, undefined);\n    if (!service) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No service found.\"\n    }, void 0, false, {\n        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n        lineNumber: 26,\n        columnNumber: 24\n    }, undefined);\n    let acfData = {};\n    try {\n        acfData = JSON.parse(service.acf);\n    } catch (parseError) {\n        console.error(\"Error parsing ACF data:\", parseError);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto px-8 max-w-7xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold text-center my-8\",\n                children: service.title\n            }, void 0, false, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-gray-600 mb-6\",\n                children: [\n                    \"Last updated on \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-blue-500\",\n                        children: new Date(service.date).toLocaleDateString()\n                    }, void 0, false, {\n                        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            ((_service_featuredImage = service.featuredImage) === null || _service_featuredImage === void 0 ? void 0 : _service_featuredImage.node) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: service.featuredImage.node.sourceUrl,\n                alt: service.title,\n                width: 1800,\n                height: 600,\n                className: \"mx-auto my-6 rounded-lg\",\n                loading: \"lazy\"\n            }, void 0, false, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-6 my-12 bg-red-400\",\n                children: [\n                    {\n                        title: acfData.first_plan_title,\n                        price: acfData.first_plan_price,\n                        desc: acfData.first_plan_description\n                    },\n                    {\n                        title: acfData.second_plan_title,\n                        price: acfData.second_plan_price,\n                        desc: acfData.second_plan_description\n                    },\n                    {\n                        title: acfData.third_plan_title,\n                        price: acfData.third_plan_price,\n                        desc: acfData.third_plan_description\n                    }\n                ].map((plan, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-100 w-[350px] rounded-lg shadow-lg p-6 text-center my-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-bold bg-blue-900 text-white py-4 rounded-t-lg\",\n                                children: plan.title\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 61,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl font-semibold text-pink-500 my-4\",\n                                children: plan.price\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 62,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-left text-gray-700 mb-6 price\",\n                                dangerouslySetInnerHTML: {\n                                    __html: plan.desc\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 63,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                className: \"my-4 border-gray-300\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 65,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"border border-black text-black py-2 px-8 rounded-lg hover:bg-pink-400 hover:border-none hover:text-white\",\n                                children: \"Order Now\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"service-content text-gray-700\",\n                dangerouslySetInnerHTML: {\n                    __html: service.content\n                }\n            }, void 0, false, {\n                fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\1 tuba\\\\wp arena APP NEW\\\\my-app\\\\src\\\\pages\\\\Services\\\\[id].jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ServiceDetails;\nvar __N_SSG = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceDetails);\nvar _c;\n$RefreshReg$(_c, \"ServiceDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvU2VydmljZXMvW2lkXS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQXNCL0IsTUFBTUMsaUJBQWlCO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUU7UUFrQm5DRDtJQWpCTCxJQUFJQyxPQUFPLHFCQUFPLDhEQUFDQzs7WUFBRTtZQUFRRDs7Ozs7OztJQUM3QixJQUFJLENBQUNELFNBQVMscUJBQU8sOERBQUNFO2tCQUFFOzs7Ozs7SUFFeEIsSUFBSUMsVUFBVSxDQUFDO0lBQ2YsSUFBSTtRQUNGQSxVQUFVQyxLQUFLQyxLQUFLLENBQUNMLFFBQVFNLEdBQUc7SUFDbEMsRUFBRSxPQUFPQyxZQUFZO1FBQ25CQyxRQUFRUCxLQUFLLENBQUMsMkJBQTJCTTtJQUMzQztJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXVDVixRQUFRWSxLQUFLOzs7Ozs7MEJBQ2xFLDhEQUFDVjtnQkFBRVEsV0FBVTs7b0JBQWlDO2tDQUM1Qiw4REFBQ0c7d0JBQUtILFdBQVU7a0NBQWlCLElBQUlJLEtBQUtkLFFBQVFlLElBQUksRUFBRUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7WUFHM0ZoQixFQUFBQSx5QkFBQUEsUUFBUWlCLGFBQWEsY0FBckJqQiw2Q0FBQUEsdUJBQXVCa0IsSUFBSSxtQkFDMUIsOERBQUNwQixtREFBS0E7Z0JBQ0pxQixLQUFLbkIsUUFBUWlCLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDRSxTQUFTO2dCQUN6Q0MsS0FBS3JCLFFBQVFZLEtBQUs7Z0JBQ2xCVSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSYixXQUFVO2dCQUNWYyxTQUFROzs7Ozs7MEJBS1osOERBQUNmO2dCQUFJQyxXQUFVOzBCQUNsQjtvQkFDQzt3QkFBRUUsT0FBT1QsUUFBUXNCLGdCQUFnQjt3QkFBRUMsT0FBT3ZCLFFBQVF3QixnQkFBZ0I7d0JBQUVDLE1BQU16QixRQUFRMEIsc0JBQXNCO29CQUFDO29CQUN6Rzt3QkFBRWpCLE9BQU9ULFFBQVEyQixpQkFBaUI7d0JBQUVKLE9BQU92QixRQUFRNEIsaUJBQWlCO3dCQUFFSCxNQUFNekIsUUFBUTZCLHVCQUF1QjtvQkFBQztvQkFDNUc7d0JBQUVwQixPQUFPVCxRQUFROEIsZ0JBQWdCO3dCQUFFUCxPQUFPdkIsUUFBUStCLGdCQUFnQjt3QkFBRU4sTUFBTXpCLFFBQVFnQyxzQkFBc0I7b0JBQUM7aUJBQzFHLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDWCw4REFBQzdCO3dCQUFnQkMsV0FBVTs7MENBQ3pCLDhEQUFDNkI7Z0NBQUc3QixXQUFVOzBDQUE4RDJCLEtBQUt6QixLQUFLOzs7Ozs7MENBQ3RGLDhEQUFDVjtnQ0FBRVEsV0FBVTswQ0FBNkMyQixLQUFLWCxLQUFLOzs7Ozs7MENBQ3BFLDhEQUFDakI7Z0NBQUlDLFdBQVU7Z0NBQXFDOEIseUJBQXlCO29DQUFFQyxRQUFRSixLQUFLVCxJQUFJO2dDQUFDOzs7Ozs7MENBRWpHLDhEQUFDYztnQ0FBR2hDLFdBQVU7Ozs7OzswQ0FDZCw4REFBQ2lDO2dDQUFPakMsV0FBVTswQ0FBMkc7Ozs7Ozs7dUJBTnJINEI7Ozs7Ozs7Ozs7MEJBYVIsOERBQUM3QjtnQkFBSUMsV0FBVTtnQkFBZ0M4Qix5QkFBeUI7b0JBQUVDLFFBQVF6QyxRQUFRNEMsT0FBTztnQkFBQzs7Ozs7Ozs7Ozs7O0FBR3hHO0tBcERNN0M7O0FBNkZOLGlFQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJGOlxcMSB0dWJhXFx3cCBhcmVuYSBBUFAgTkVXXFxteS1hcHBcXHNyY1xccGFnZXNcXFNlcnZpY2VzXFxbaWRdLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50LCBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuLy8gR3JhcGhRTCBRdWVyeVxyXG5jb25zdCBHRVRfU0VSVklDRV9CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBHZXRTZXJ2aWNlQnlJRCgkaWQ6IElEISkge1xyXG4gICAgc2VydmljZShpZDogJGlkLCBpZFR5cGU6IERBVEFCQVNFX0lEKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGNvbnRlbnRcclxuICAgICAgZGF0ZVxyXG4gICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhY2ZcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9zdGctd3BhcmVuYS1zdGFnaW5nLmtpbnN0YS5jbG91ZC9ncmFwaHFsXCI7XHJcblxyXG5jb25zdCBTZXJ2aWNlRGV0YWlscyA9ICh7IHNlcnZpY2UsIGVycm9yIH0pID0+IHtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yfTwvcD47XHJcbiAgaWYgKCFzZXJ2aWNlKSByZXR1cm4gPHA+Tm8gc2VydmljZSBmb3VuZC48L3A+O1xyXG5cclxuICBsZXQgYWNmRGF0YSA9IHt9O1xyXG4gIHRyeSB7XHJcbiAgICBhY2ZEYXRhID0gSlNPTi5wYXJzZShzZXJ2aWNlLmFjZik7XHJcbiAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgQUNGIGRhdGE6XCIsIHBhcnNlRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBweC04IG1heC13LTd4bFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG15LThcIj57c2VydmljZS50aXRsZX08L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwIG1iLTZcIj5cclxuICAgICAgICBMYXN0IHVwZGF0ZWQgb24gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPntuZXcgRGF0ZShzZXJ2aWNlLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG5cclxuICAgICAge3NlcnZpY2UuZmVhdHVyZWRJbWFnZT8ubm9kZSAmJiAoXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3NlcnZpY2UuZmVhdHVyZWRJbWFnZS5ub2RlLnNvdXJjZVVybH1cclxuICAgICAgICAgIGFsdD17c2VydmljZS50aXRsZX1cclxuICAgICAgICAgIHdpZHRoPXsxODAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXs2MDB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG15LTYgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBQcmljaW5nIFBsYW5zIFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTYgbXktMTIgYmctcmVkLTQwMFwiPlxyXG4gIHtbXHJcbiAgICB7IHRpdGxlOiBhY2ZEYXRhLmZpcnN0X3BsYW5fdGl0bGUsIHByaWNlOiBhY2ZEYXRhLmZpcnN0X3BsYW5fcHJpY2UsIGRlc2M6IGFjZkRhdGEuZmlyc3RfcGxhbl9kZXNjcmlwdGlvbiB9LFxyXG4gICAgeyB0aXRsZTogYWNmRGF0YS5zZWNvbmRfcGxhbl90aXRsZSwgcHJpY2U6IGFjZkRhdGEuc2Vjb25kX3BsYW5fcHJpY2UsIGRlc2M6IGFjZkRhdGEuc2Vjb25kX3BsYW5fZGVzY3JpcHRpb24gfSxcclxuICAgIHsgdGl0bGU6IGFjZkRhdGEudGhpcmRfcGxhbl90aXRsZSwgcHJpY2U6IGFjZkRhdGEudGhpcmRfcGxhbl9wcmljZSwgZGVzYzogYWNmRGF0YS50aGlyZF9wbGFuX2Rlc2NyaXB0aW9uIH0sXHJcbiAgXS5tYXAoKHBsYW4sIGluZGV4KSA9PiAoXHJcbiAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHctWzM1MHB4XSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLTYgdGV4dC1jZW50ZXIgbXktOFwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYmctYmx1ZS05MDAgdGV4dC13aGl0ZSBweS00IHJvdW5kZWQtdC1sZ1wiPntwbGFuLnRpdGxlfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1waW5rLTUwMCBteS00XCI+e3BsYW4ucHJpY2V9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LWdyYXktNzAwIG1iLTYgcHJpY2VcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBsYW4uZGVzYyB9fT48L2Rpdj5cclxuICAgICAgey8qIEhvcml6b250YWwgbGluZSBhZGRlZCBiZWxvdyB0aGUgZGVzY3JpcHRpb24gKi99XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJteS00IGJvcmRlci1ncmF5LTMwMFwiIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFjayB0ZXh0LWJsYWNrIHB5LTIgcHgtOCByb3VuZGVkLWxnIGhvdmVyOmJnLXBpbmstNDAwIGhvdmVyOmJvcmRlci1ub25lIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICBPcmRlciBOb3dcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApKX1cclxuPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY29udGVudCB0ZXh0LWdyYXktNzAwXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZXJ2aWNlLmNvbnRlbnQgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KGVuZHBvaW50KTtcclxuICBjb25zdCB7IGlkIH0gPSBwYXJhbXM7XHJcbiAgbGV0IGRlY29kZWRJZDtcclxuICB0cnkge1xyXG4gICAgZGVjb2RlZElkID0gYXRvYihpZCkuc3BsaXQoXCI6XCIgKVsxXTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGVjb2RlZCBJRDpcIiwgZGVjb2RlZElkKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQucmVxdWVzdChHRVRfU0VSVklDRV9CWV9JRCwgeyBpZDogZGVjb2RlZElkIH0pO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VydmljZTogZGF0YS5zZXJ2aWNlIHx8IG51bGwgfSwgcmV2YWxpZGF0ZTogNjAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNlcnZpY2U6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHByb3BzOiB7IHNlcnZpY2U6IG51bGwsIGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBzZXJ2aWNlIGRhdGFcIiB9LCByZXZhbGlkYXRlOiA2MCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KGVuZHBvaW50KTtcclxuICBjb25zdCBHRVRfQUxMX1NFUlZJQ0VTID0gZ3FsYFxyXG4gICAgcXVlcnkgR2V0QWxsU2VydmljZXMge1xyXG4gICAgICBzZXJ2aWNlcyB7XHJcbiAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LnJlcXVlc3QoR0VUX0FMTF9TRVJWSUNFUyk7XHJcbiAgICBjb25zdCBwYXRocyA9IGRhdGEuc2VydmljZXMubm9kZXMubWFwKHNlcnZpY2UgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7IGlkOiBidG9hKGBzZXJ2aWNlOiR7c2VydmljZS5pZH1gKSB9LFxyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiAnYmxvY2tpbmcnIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhbGwgc2VydmljZXM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHBhdGhzOiBbXSwgZmFsbGJhY2s6ICdibG9ja2luZycgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTZXJ2aWNlRGV0YWlscyIsInNlcnZpY2UiLCJlcnJvciIsInAiLCJhY2ZEYXRhIiwiSlNPTiIsInBhcnNlIiwiYWNmIiwicGFyc2VFcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwic3BhbiIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzcmMiLCJzb3VyY2VVcmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciLCJmaXJzdF9wbGFuX3RpdGxlIiwicHJpY2UiLCJmaXJzdF9wbGFuX3ByaWNlIiwiZGVzYyIsImZpcnN0X3BsYW5fZGVzY3JpcHRpb24iLCJzZWNvbmRfcGxhbl90aXRsZSIsInNlY29uZF9wbGFuX3ByaWNlIiwic2Vjb25kX3BsYW5fZGVzY3JpcHRpb24iLCJ0aGlyZF9wbGFuX3RpdGxlIiwidGhpcmRfcGxhbl9wcmljZSIsInRoaXJkX3BsYW5fZGVzY3JpcHRpb24iLCJtYXAiLCJwbGFuIiwiaW5kZXgiLCJoMyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaHIiLCJidXR0b24iLCJjb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Services/[id].jsx\n"));

/***/ })

});