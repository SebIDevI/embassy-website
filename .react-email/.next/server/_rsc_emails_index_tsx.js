"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_emails_index_tsx";
exports.ids = ["_rsc_emails_index_tsx"];
exports.modules = {

/***/ "(rsc)/./emails/index.tsx":
/*!**************************!*\
  !*** ./emails/index.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emails_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../emails/index.tsx */ \"(rsc)/../emails/index.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_emails_index_tsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9lbWFpbHMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBQzFDLGlFQUFlQSx5REFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLWNsaWVudC8uL2VtYWlscy9pbmRleC50c3g/NTNhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbCBmcm9tICcuLi8uLi9lbWFpbHMvaW5kZXgudHN4JztcbmV4cG9ydCBkZWZhdWx0IE1haWw7XG4iXSwibmFtZXMiOlsiTWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./emails/index.tsx\n");

/***/ }),

/***/ "(rsc)/../emails/index.tsx":
/*!***************************!*\
  !*** ../emails/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Email: () => (/* binding */ Email),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/html/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/head/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/preview/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/body/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/container/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/section/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/img/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/row/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/column/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/text/dist/index.mjs\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react-email/components */ \"(rsc)/../node_modules/@react-email/link/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst Email = ({ username = \"zenorocha\", email = \"sebi.catrina05@gmail.com\", company = \"Embassy Network SRL\", country = \"Romania\", phone = \"0729088208\", website = \"https://www.embassy-agency.com\", message = \"Message test\", updatedDate = new Date(\"June 23, 2022 4:06:00 pm UTC\") })=>{\n    const formattedDate = new Intl.DateTimeFormat(\"en\", {\n        dateStyle: \"medium\",\n        timeStyle: \"medium\"\n    }).format(updatedDate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_3__.Head, {}, void 0, false, {\n                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_4__.Preview, {\n                children: \"Ai primit un nou mesaj șefule\"\n            }, void 0, false, {\n                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_5__.Body, {\n                style: main,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        style: container,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_7__.Section, {\n                                style: logo,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_8__.Img, {\n                                    width: 200,\n                                    src: `https://embassy-website.vercel.app/logoBlack.png`\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_7__.Section, {\n                                style: sectionsBorders,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_9__.Row, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_10__.Column, {\n                                            style: sectionBorder\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_10__.Column, {\n                                            style: sectionCenter\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_10__.Column, {\n                                            style: sectionBorder\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_7__.Section, {\n                                style: content,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                        style: paragraph,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: username\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            \" ți-a trimis următorul mesaj:\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                        style: paragraph,\n                                        children: message\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                        style: paragraph,\n                                        children: [\n                                            \"Alte informații despre \",\n                                            username,\n                                            \":\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                                        style: paragraph,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                                children: \"Email\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                                lineNumber: 74,\n                                                                columnNumber: 19\n                                                            }, undefined),\n                                                            \": \",\n                                                            email\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                                        style: paragraph,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                                children: \"Număr de telefon\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                                lineNumber: 77,\n                                                                columnNumber: 19\n                                                            }, undefined),\n                                                            \": \",\n                                                            phone\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                                        style: paragraph,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                                children: \"Companie\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                                lineNumber: 80,\n                                                                columnNumber: 19\n                                                            }, undefined),\n                                                            \": \",\n                                                            company\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                                        style: paragraph,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                                children: \"Website\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                                lineNumber: 83,\n                                                                columnNumber: 19\n                                                            }, undefined),\n                                                            \":\",\n                                                            \" \",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_12__.Link, {\n                                                                href: website,\n                                                                style: link,\n                                                                children: website\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                                lineNumber: 84,\n                                                                columnNumber: 19\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 17\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                                        style: paragraph,\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                                children: \"Țară\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                                lineNumber: 89,\n                                                                columnNumber: 19\n                                                            }, undefined),\n                                                            \": \",\n                                                            country\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 17\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_7__.Section, {\n                        style: footer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                            style: {\n                                textAlign: \"center\",\n                                color: \"#706a7b\"\n                            },\n                            children: [\n                                \"\\xa9 2024 Embassy Agency, All Rights Reserved \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 56\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\seb sites\\\\htdocs\\\\eul liric\\\\sebdev\\\\1 munca\\\\1embassy\\\\embassy-website\\\\emails\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);\nconst fontFamily = \"HelveticaNeue,Helvetica,Arial,sans-serif\";\nconst main = {\n    backgroundColor: \"#efeef1\",\n    fontFamily\n};\nconst paragraph = {\n    lineHeight: 1.5,\n    fontSize: 14\n};\nconst container = {\n    width: \"580px\",\n    margin: \"30px auto\",\n    backgroundColor: \"#ffffff\"\n};\nconst footer = {\n    width: \"580px\",\n    margin: \"0 auto\"\n};\nconst content = {\n    padding: \"5px 50px 10px 60px\"\n};\nconst logo = {\n    display: \"flex\",\n    justifyContent: \"center\",\n    alingItems: \"center\",\n    padding: 30\n};\nconst sectionsBorders = {\n    width: \"100%\",\n    display: \"flex\"\n};\nconst sectionBorder = {\n    borderBottom: \"1px solid rgb(238,238,238)\",\n    width: \"249px\"\n};\nconst sectionCenter = {\n    borderBottom: \"1px solid rgb(145,71,255)\",\n    width: \"102px\"\n};\nconst link = {\n    textDecoration: \"underline\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEMsS0FBS0EsRUFBQztBQUVyQixNQUFNbUMsYUFBYTtBQUVuQixNQUFNbEIsT0FBTztJQUNYbUIsaUJBQWlCO0lBQ2pCRDtBQUNGO0FBRUEsTUFBTVQsWUFBWTtJQUNoQlcsWUFBWTtJQUNaQyxVQUFVO0FBQ1o7QUFFQSxNQUFNcEIsWUFBWTtJQUNoQkUsT0FBTztJQUNQbUIsUUFBUTtJQUNSSCxpQkFBaUI7QUFDbkI7QUFFQSxNQUFNTCxTQUFTO0lBQ2JYLE9BQU87SUFDUG1CLFFBQVE7QUFDVjtBQUVBLE1BQU1kLFVBQVU7SUFDZGUsU0FBUztBQUNYO0FBRUEsTUFBTXJCLE9BQU87SUFDWHNCLFNBQVM7SUFDVEMsZ0JBQWdCO0lBQ2hCQyxZQUFZO0lBQ1pILFNBQVM7QUFDWDtBQUVBLE1BQU1sQixrQkFBa0I7SUFDdEJGLE9BQU87SUFDUHFCLFNBQVM7QUFDWDtBQUVBLE1BQU1sQixnQkFBZ0I7SUFDcEJxQixjQUFjO0lBQ2R4QixPQUFPO0FBQ1Q7QUFFQSxNQUFNSSxnQkFBZ0I7SUFDcEJvQixjQUFjO0lBQ2R4QixPQUFPO0FBQ1Q7QUFFQSxNQUFNVSxPQUFPO0lBQ1hlLGdCQUFnQjtBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLWNsaWVudC8uLi9lbWFpbHMvaW5kZXgudHN4P2IwYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb2R5LFxyXG4gIENvbnRhaW5lcixcclxuICBDb2x1bW4sXHJcbiAgSGVhZCxcclxuICBIdG1sLFxyXG4gIEltZyxcclxuICBMaW5rLFxyXG4gIFByZXZpZXcsXHJcbiAgUm93LFxyXG4gIFNlY3Rpb24sXHJcbiAgVGV4dCxcclxufSBmcm9tIFwiQHJlYWN0LWVtYWlsL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgVHdpdGNoUmVzZXRQYXNzd29yZEVtYWlsUHJvcHMge1xyXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIGNvbXBhbnk/OiBzdHJpbmc7XHJcbiAgY291bnRyeT86IHN0cmluZztcclxuICBwaG9uZT86IHN0cmluZztcclxuICB3ZWJzaXRlPzogc3RyaW5nO1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgdXBkYXRlZERhdGU/OiBEYXRlO1xyXG59XHJcblxyXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTFxyXG4gID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWBcclxuICA6IFwiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRW1haWwgPSAoe1xyXG4gIHVzZXJuYW1lID0gXCJ6ZW5vcm9jaGFcIixcclxuICBlbWFpbCA9IFwic2ViaS5jYXRyaW5hMDVAZ21haWwuY29tXCIsXHJcbiAgY29tcGFueSA9IFwiRW1iYXNzeSBOZXR3b3JrIFNSTFwiLFxyXG4gIGNvdW50cnkgPSBcIlJvbWFuaWFcIixcclxuICBwaG9uZSA9IFwiMDcyOTA4ODIwOFwiLFxyXG4gIHdlYnNpdGUgPSBcImh0dHBzOi8vd3d3LmVtYmFzc3ktYWdlbmN5LmNvbVwiLFxyXG4gIG1lc3NhZ2UgPSBcIk1lc3NhZ2UgdGVzdFwiLFxyXG4gIHVwZGF0ZWREYXRlID0gbmV3IERhdGUoXCJKdW5lIDIzLCAyMDIyIDQ6MDY6MDAgcG0gVVRDXCIpLFxyXG59OiBUd2l0Y2hSZXNldFBhc3N3b3JkRW1haWxQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHtcclxuICAgIGRhdGVTdHlsZTogXCJtZWRpdW1cIixcclxuICAgIHRpbWVTdHlsZTogXCJtZWRpdW1cIixcclxuICB9KS5mb3JtYXQodXBkYXRlZERhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEh0bWw+XHJcbiAgICAgIDxIZWFkIC8+XHJcbiAgICAgIDxQcmV2aWV3PkFpIHByaW1pdCB1biBub3UgbWVzYWogyJllZnVsZTwvUHJldmlldz5cclxuICAgICAgPEJvZHkgc3R5bGU9e21haW59PlxyXG4gICAgICAgIDxDb250YWluZXIgc3R5bGU9e2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8U2VjdGlvbiBzdHlsZT17bG9nb30+XHJcbiAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZW1iYXNzeS13ZWJzaXRlLnZlcmNlbC5hcHAvbG9nb0JsYWNrLnBuZ2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBzdHlsZT17c2VjdGlvbnNCb3JkZXJzfT5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sdW1uIHN0eWxlPXtzZWN0aW9uQm9yZGVyfSAvPlxyXG4gICAgICAgICAgICAgIDxDb2x1bW4gc3R5bGU9e3NlY3Rpb25DZW50ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPENvbHVtbiBzdHlsZT17c2VjdGlvbkJvcmRlcn0gLz5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBzdHlsZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxyXG4gICAgICAgICAgICAgIDxiPnt1c2VybmFtZX08L2I+IMibaS1hIHRyaW1pcyB1cm3Eg3RvcnVsIG1lc2FqOlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PnttZXNzYWdlfTwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XHJcbiAgICAgICAgICAgICAgQWx0ZSBpbmZvcm1hyJtpaSBkZXNwcmUge3VzZXJuYW1lfTpcclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cclxuICAgICAgICAgICAgICAgICAgPGI+RW1haWw8L2I+OiB7ZW1haWx9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cclxuICAgICAgICAgICAgICAgICAgPGI+TnVtxINyIGRlIHRlbGVmb248L2I+OiB7cGhvbmV9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cclxuICAgICAgICAgICAgICAgICAgPGI+Q29tcGFuaWU8L2I+OiB7Y29tcGFueX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxyXG4gICAgICAgICAgICAgICAgICA8Yj5XZWJzaXRlPC9iPjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3dlYnNpdGV9IHN0eWxlPXtsaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICB7d2Vic2l0ZX1cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxiPsiaYXLEgzwvYj46IHtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPFNlY3Rpb24gc3R5bGU9e2Zvb3Rlcn0+XHJcbiAgICAgICAgICB7LyogPFJvdz5cclxuICAgICAgICAgICAgPENvbHVtbiBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIHBhZGRpbmdSaWdodDogXCI4cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8SW1nIHNyYz17YCR7YmFzZVVybH0vc3RhdGljL3R3aXRjaC1pY29uLXR3aXR0ZXIucG5nYH0gLz5cclxuICAgICAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgICAgIDxDb2x1bW4gYWxpZ249XCJsZWZ0XCIgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIHBhZGRpbmdMZWZ0OiBcIjhweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxJbWcgc3JjPXtgJHtiYXNlVXJsfS9zdGF0aWMvdHdpdGNoLWljb24tZmFjZWJvb2sucG5nYH0gLz5cclxuICAgICAgICAgICAgPC9Db2x1bW4+XHJcbiAgICAgICAgICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICA8VGV4dCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcIiM3MDZhN2JcIiB9fT5cclxuICAgICAgICAgICAgwqkgMjAyNCBFbWJhc3N5IEFnZW5jeSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCA8YnIgLz5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvQm9keT5cclxuICAgIDwvSHRtbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWw7XHJcblxyXG5jb25zdCBmb250RmFtaWx5ID0gXCJIZWx2ZXRpY2FOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmXCI7XHJcblxyXG5jb25zdCBtYWluID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZWZlZWYxXCIsXHJcbiAgZm9udEZhbWlseSxcclxufTtcclxuXHJcbmNvbnN0IHBhcmFncmFwaCA9IHtcclxuICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgZm9udFNpemU6IDE0LFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyID0ge1xyXG4gIHdpZHRoOiBcIjU4MHB4XCIsXHJcbiAgbWFyZ2luOiBcIjMwcHggYXV0b1wiLFxyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbn07XHJcblxyXG5jb25zdCBmb290ZXIgPSB7XHJcbiAgd2lkdGg6IFwiNTgwcHhcIixcclxuICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250ZW50ID0ge1xyXG4gIHBhZGRpbmc6IFwiNXB4IDUwcHggMTBweCA2MHB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBsb2dvID0ge1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGFsaW5nSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgcGFkZGluZzogMzAsXHJcbn07XHJcblxyXG5jb25zdCBzZWN0aW9uc0JvcmRlcnMgPSB7XHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG59O1xyXG5cclxuY29uc3Qgc2VjdGlvbkJvcmRlciA9IHtcclxuICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYigyMzgsMjM4LDIzOClcIixcclxuICB3aWR0aDogXCIyNDlweFwiLFxyXG59O1xyXG5cclxuY29uc3Qgc2VjdGlvbkNlbnRlciA9IHtcclxuICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYigxNDUsNzEsMjU1KVwiLFxyXG4gIHdpZHRoOiBcIjEwMnB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBsaW5rID0ge1xyXG4gIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiQm9keSIsIkNvbnRhaW5lciIsIkNvbHVtbiIsIkhlYWQiLCJIdG1sIiwiSW1nIiwiTGluayIsIlByZXZpZXciLCJSb3ciLCJTZWN0aW9uIiwiVGV4dCIsIlJlYWN0IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiRW1haWwiLCJ1c2VybmFtZSIsImVtYWlsIiwiY29tcGFueSIsImNvdW50cnkiLCJwaG9uZSIsIndlYnNpdGUiLCJtZXNzYWdlIiwidXBkYXRlZERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImRhdGVTdHlsZSIsInRpbWVTdHlsZSIsImZvcm1hdCIsInN0eWxlIiwibWFpbiIsImNvbnRhaW5lciIsImxvZ28iLCJ3aWR0aCIsInNyYyIsInNlY3Rpb25zQm9yZGVycyIsInNlY3Rpb25Cb3JkZXIiLCJzZWN0aW9uQ2VudGVyIiwiY29udGVudCIsInBhcmFncmFwaCIsImIiLCJ1bCIsImhyZWYiLCJsaW5rIiwiZm9vdGVyIiwidGV4dEFsaWduIiwiY29sb3IiLCJiciIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpbmdJdGVtcyIsImJvcmRlckJvdHRvbSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../emails/index.tsx\n");

/***/ })

};
;