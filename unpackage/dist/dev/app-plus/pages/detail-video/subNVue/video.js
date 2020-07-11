"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/main.js?{"page":"pages%2Fdetail-video%2FsubNVue%2Fvideo"} ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detail-video/subNVue/video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/detail-video/subNVue/video'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/main.js?{"type":"appStyle"} ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-smaller": {
    "fontSize": "15rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#f4f4f4"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-lg": {
    "borderRadius": "14rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-top-lg": {
    "borderTopLeftRadius": "14rpx",
    "borderTopRightRadius": "14rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-bottom-lg": {
    "borderBottomRightRadius": "14rpx",
    "borderBottomLeftRadius": "14rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "mask": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 100
  },
  "bg-main": {
    "backgroundColor": "#fb7299"
  },
  "bg-main-hover": {
    "backgroundColor": "#ff85ad"
  },
  "bg-main-disabled": {
    "backgroundColor": "#f89899"
  },
  "bg-input": {
    "backgroundColor": "#F2F2F2"
  },
  "text-placeholder": {
    "color": "#999999"
  },
  "text-main": {
    "color": "#fb7299"
  },
  "text-main-hover": {
    "color": "#ff85ad"
  },
  "border-main": {
    "borderColor": "#fb7299"
  },
  "line-h": {
    "lineHeight": 1.2
  },
  "f-divider": {
    "height": "20rpx",
    "backgroundColor": "#F5F5F4"
  },
  "f-list": {
    "flexWrap": "wrap",
    "paddingLeft": "15rpx",
    "paddingRight": "15rpx"
  },
  "f-list-item": {
    "marginLeft": "15rpx",
    "marginRight": "15rpx",
    "position": "relative"
  },
  "f-list-item-1": {
    "width": 100
  },
  "f-list-item-2": {
    "width": "330rpx"
  },
  "f-list-item-3": {
    "width": "210rpx"
  }
}

/***/ }),
/* 4 */
/*!***************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=8289d192&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 37).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 37).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6b6a226c\",\n  false,\n  _video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgyODlkMTkyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2YjZhMjI2Y1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy8yMjk3Ny9EZXNrdG9wL+WTlOWTqeWTlOWTqeWKqOeUuy9wYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue?vue&type=template&id=8289d192&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=8289d192&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_8289d192_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue?vue&type=template&id=8289d192&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "u-video",
        {
          attrs: {
            id: "video",
            src: _vm.videoSrc,
            poster: _vm.poster,
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
            enableProgressGesture: false,
            objectFit: _vm.objectFit,
            loop: _vm.loop
          },
          on: {
            fullscreenchange: _vm.fullscreenchange,
            timeupdate: _vm.timeupdate,
            play: function($event) {
              _vm.playStatus = true
            },
            pause: function($event) {
              _vm.playStatus = false
            }
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: [
                    "position-absolute",
                    "flex",
                    "align-center",
                    "justify-center"
                  ],
                  style: _vm.videoBoxStyle
                },
                [
                  _c("div", {
                    staticClass: ["position-absolute"],
                    style: _vm.videoBoxStyle,
                    on: {
                      touchend: _vm.videoTouchEnd,
                      touchmove: _vm.videoTouchMove,
                      touchstart: _vm.videoTouchStart
                    }
                  }),
                  _vm.fullScreen
                    ? _c(
                        "div",
                        {
                          staticClass: [
                            "position-absolute",
                            "right-0",
                            "top-0",
                            "bottom-0",
                            "flex-column",
                            "align-center",
                            "justify-center"
                          ],
                          staticStyle: { width: "100px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: ["p-3", "rounded"],
                              staticStyle: {
                                backgroundColor: "rgba(255,255,255,0.05)"
                              },
                              on: { click: _vm.lockScreen }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["iconfont"],
                                  class: _vm.lockScreenStatus
                                    ? "text-main"
                                    : "text-white",
                                  style: _vm.btnFontSize
                                },
                                [_vm._v("")]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.danmuStatus
                    ? _c("f-danmu", {
                        attrs: {
                          list: _vm.list,
                          fullScreen: _vm.fullScreen,
                          current: _vm.currentTime
                        },
                        on: { end: _vm.removeDanmu }
                      })
                    : _vm._e(),
                  _c(
                    "div",
                    {
                      ref: "videoTop",
                      staticClass: ["video-top"],
                      style: "height:" + _vm.videoTopHeight + "px"
                    },
                    [
                      !_vm.fullScreen
                        ? _c("div", {
                            style: "height:" + _vm.statusBarHeight + "px"
                          })
                        : _vm._e(),
                      _c(
                        "div",
                        {
                          staticClass: ["flex", "align-center"],
                          staticStyle: { height: "44px" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: ["btn"], on: { click: _vm.back } },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["text-white", "iconfont"],
                                  style: _vm.btnFontSize
                                },
                                [_vm._v("")]
                              )
                            ]
                          ),
                          _vm.fullScreen
                            ? [
                                _c("div", { staticClass: ["flex-1"] }, [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: {
                                        fontSize: "10px",
                                        lines: "1"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.currentVideo.title))]
                                  )
                                ]),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["btn"],
                                    staticStyle: { width: "55px" },
                                    on: {
                                      click: function($event) {
                                        _vm.doSupport("support")
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["text-white", "iconfont"],
                                        style: _vm.btnFontSize
                                      },
                                      [_vm._v("")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["btn"],
                                    staticStyle: { width: "55px" },
                                    on: {
                                      click: function($event) {
                                        _vm.doSupport("unsupport")
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["text-white", "iconfont"],
                                        style: _vm.btnFontSize
                                      },
                                      [_vm._v("")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["btn"],
                                    staticStyle: { width: "55px" }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["text-white", "iconfont"],
                                        style: _vm.btnFontSize
                                      },
                                      [_vm._v("")]
                                    )
                                  ]
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: ["btn"],
                                    staticStyle: { width: "55px" },
                                    on: { click: _vm.otherMenu }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["text-white", "iconfont"],
                                        style: _vm.btnFontSize
                                      },
                                      [_vm._v("")]
                                    )
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  ),
                  _vm.showToast
                    ? _c("div", { staticClass: ["toast"] }, [
                        _vm.showCurrentTime > 0
                          ? _c(
                              "u-text",
                              {
                                staticClass: ["text-white"],
                                style:
                                  "font-size:" +
                                  (_vm.fullScreen ? 10 : 14) +
                                  "px;"
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatTime")(_vm.showCurrentTime)
                                  ) +
                                    "/" +
                                    _vm._s(_vm._f("formatTime")(_vm.duration))
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm.touchType === "current"
                    ? _c("div", { staticClass: ["toast"] }, [
                        _c(
                          "u-text",
                          {
                            staticClass: ["text-white"],
                            style:
                              "font-size:" + (_vm.fullScreen ? 10 : 14) + "px;"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm._f("formatTime")(_vm.touchCurrent)) +
                                "/" +
                                _vm._s(_vm._f("formatTime")(_vm.duration))
                            )
                          ]
                        )
                      ])
                    : _vm._e(),
                  !_vm.fullScreen
                    ? _c(
                        "div",
                        { ref: "videoBottom", staticClass: ["video-bottom"] },
                        [
                          _c(
                            "div",
                            {
                              staticClass: ["btn"],
                              on: { click: _vm.playOrPause }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["text-white", "iconfont"],
                                  style: _vm.btnFontSize
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.playStatus ? "\ue605" : "\ue63a")
                                  )
                                ]
                              )
                            ]
                          ),
                          _c(
                            "div",
                            { staticClass: ["flex-1"] },
                            [
                              _c("f-slider", {
                                ref: "slider",
                                attrs: {
                                  d: _vm.duration,
                                  c: _vm.currentTime,
                                  fullScreen: false
                                },
                                on: {
                                  update: _vm.sliderUpdate,
                                  change: _vm.sliderChange
                                }
                              })
                            ],
                            1
                          ),
                          _c("div", [
                            _c(
                              "u-text",
                              {
                                staticClass: ["text-white"],
                                staticStyle: { fontSize: "12px" }
                              },
                              [
                                _vm._v(
                                  "  " +
                                    _vm._s(
                                      _vm._f("formatTime")(_vm.currentTime)
                                    ) +
                                    "/" +
                                    _vm._s(_vm._f("formatTime")(_vm.duration)) +
                                    "  "
                                )
                              ]
                            )
                          ]),
                          _c(
                            "div",
                            {
                              staticClass: ["btn"],
                              on: { click: _vm.clickFullScreen }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["text-white", "iconfont"],
                                  style: _vm.btnFontSize
                                },
                                [_vm._v("")]
                              )
                            ]
                          )
                        ]
                      )
                    : _c(
                        "div",
                        {
                          ref: "videoBottom",
                          staticClass: ["video-bottom-full"]
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: ["flex", "align-center"],
                              staticStyle: { height: "22px" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: ["flex-1"],
                                  staticStyle: {
                                    paddingLeft: "10px",
                                    paddingRight: "10px"
                                  }
                                },
                                [
                                  _c("f-slider", {
                                    ref: "slider",
                                    attrs: {
                                      d: _vm.duration,
                                      c: _vm.currentTime,
                                      fullScreen: true
                                    },
                                    on: {
                                      update: _vm.sliderUpdate,
                                      change: _vm.sliderChange
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _c(
                            "div",
                            { staticClass: ["flex-1", "flex", "align-center"] },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: ["btn"],
                                  on: { click: _vm.playOrPause }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white", "iconfont"],
                                      style: _vm.btnFontSize
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.playStatus ? "\ue605" : "\ue63a"
                                        )
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _c("div", [
                                _c(
                                  "u-text",
                                  {
                                    staticClass: ["text-white"],
                                    staticStyle: { fontSize: "10px" }
                                  },
                                  [
                                    _vm._v(
                                      "  " +
                                        _vm._s(
                                          _vm._f("formatTime")(_vm.currentTime)
                                        ) +
                                        "/" +
                                        _vm._s(
                                          _vm._f("formatTime")(_vm.duration)
                                        ) +
                                        "  "
                                    )
                                  ]
                                )
                              ]),
                              _c(
                                "div",
                                {
                                  staticClass: ["btn"],
                                  on: { click: _vm.openDanmu }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["iconfont"],
                                      class: _vm.danmuStatus
                                        ? "text-main"
                                        : "text-white",
                                      style: _vm.btnFontSize
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.danmuStatus ? "\ue697" : "\ue696"
                                        )
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _c("div", { staticClass: ["flex-1"] }),
                              _c(
                                "div",
                                {
                                  staticClass: ["px-3", "py-2"],
                                  on: {
                                    click: function($event) {
                                      _vm.doPopup("videoPopup")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: { fontSize: "10px" }
                                    },
                                    [_vm._v("选集")]
                                  )
                                ]
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: ["px-3", "py-2"],
                                  on: {
                                    click: function($event) {
                                      _vm.doPopup("ratePopup")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: { fontSize: "10px" }
                                    },
                                    [_vm._v("倍速")]
                                  )
                                ]
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: ["px-3", "py-2"],
                                  on: {
                                    click: function($event) {
                                      _vm.doPopup("definitionPopup")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: { fontSize: "10px" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.definitionList[
                                            _vm.definitionIndex
                                          ].name
                                        )
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                  _c(
                    "f-popup",
                    { ref: "ratePopup" },
                    _vm._l(_vm.rateList, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: [
                            "flex-1",
                            "flex",
                            "align-center",
                            "justify-center"
                          ],
                          on: {
                            click: function($event) {
                              _vm.changeRate(item)
                            }
                          }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              class:
                                item === _vm.rate ? "text-main" : "text-white",
                              staticStyle: { fontSize: "10px" }
                            },
                            [_vm._v(_vm._s(item))]
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _c(
                    "f-popup",
                    { ref: "definitionPopup" },
                    _vm._l(_vm.definitionList, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: [
                            "py-4",
                            "flex",
                            "align-center",
                            "justify-center"
                          ],
                          on: {
                            click: function($event) {
                              _vm.changeDefinition(item, index)
                            }
                          }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              class:
                                index === _vm.definitionIndex
                                  ? "text-main"
                                  : "text-white",
                              staticStyle: { fontSize: "10px" }
                            },
                            [_vm._v(_vm._s(item.name))]
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _c(
                    "f-popup",
                    { ref: "videoPopup", attrs: { width: 300 } },
                    [
                      _c(
                        "scroll-view",
                        {
                          staticClass: ["flex-1", "p-2"],
                          attrs: { scrollY: "true" }
                        },
                        _vm._l(_vm.videoList, function(item, index) {
                          return _c(
                            "div",
                            {
                              key: index,
                              staticClass: ["video-popup-item"],
                              class:
                                _vm.videoIndex === index ? "border-main" : "",
                              on: {
                                click: function($event) {
                                  _vm.changeVideo(item, index)
                                }
                              }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  class:
                                    _vm.videoIndex === index
                                      ? "text-main"
                                      : "text-white",
                                  staticStyle: { fontSize: "10px", lines: "1" }
                                },
                                [_vm._v(_vm._s(item.title))]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 10));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _fSlider = _interopRequireDefault(__webpack_require__(/*! @/platforms/app-plus/video/f-slider.nvue */ 12));\nvar _fPopup = _interopRequireDefault(__webpack_require__(/*! @/platforms/app-plus/video/f-popup.nvue */ 20));\nvar _fDanmu = _interopRequireDefault(__webpack_require__(/*! @/platforms/app-plus/video/f-danmu.nvue */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\nvar CTX = null;\nvar animation = weex.requireModule('animation');\nvar dom = weex.requireModule('dom');\n\nvar demoList = [{\n  index: 0,\n  title: \"优化空数据默认显示\",\n  list: [{\n    name: \"标清\",\n    value: \"SD\",\n    url: \"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\" },\n  {\n    name: \"高清\",\n    value: \"HD\",\n    url: \"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\" },\n  {\n    name: \"超清\",\n    value: \"FHD\",\n    url: \"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\" }] },\n\n{\n  index: 0,\n  title: \"2018年平昌冬\",\n  list: [{\n    name: \"标清\",\n    value: \"SD\",\n    url: \"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\" }] }];var _default =\n\n\n\n{\n  components: {\n    fSlider: _fSlider.default, fPopup: _fPopup.default, fDanmu: _fDanmu.default },\n\n  data: function data() {\n    return {\n      // 弹幕列表\n      list: [{\n        id: 1,\n        title: \"测试弹幕1\",\n        time: 10 },\n      {\n        id: 2,\n        title: \"测试弹幕2\",\n        time: 30 },\n      {\n        id: 3,\n        title: \"测试弹幕3\",\n        time: 40 },\n      {\n        id: 4,\n        title: \"测试弹幕4\",\n        time: 50 }],\n\n      // 锁屏\n      lockScreenStatus: false,\n      // 当前速度\n      rate: \"1.0\",\n      // 速度选择\n      rateList: ['2.0', '1.5', '1.25', '1.0', '0.8', '0.5'],\n      // 集数\n      videoIndex: 0,\n      videoList: demoList,\n\n      src: \"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\",\n      poster: \"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg\",\n      objectFit: \"contain\",\n      fullScreen: false, //全屏状态\n      loop: false, //循环\n      playStatus: false, //播放状态\n\n      oldTouces: {},\n      oldValue: {}, //触摸开始 进度，音量，亮度\n      touchType: null, //滑动类型\n      dblCount: 0, //双击计数\n\n      windowWidth: 0,\n      windowHeight: 0,\n      statusBarHeight: 0,\n      ratio: 1,\n\n      duration: 0, // 总时长\n      currentTime: 0, // 当前时间\n\n      showToast: false, // 消息提示框\n      showCurrentTime: 0, // 用于提示当前时间变化\n\n      controlsStatus: true, // 控制栏状态\n      controlsTimer: null, // 控制栏显示倒计时\n\n      danmuStatus: false, // 是否开启弹幕\n\n      touchCurrent: 0,\n      touchBright: 0,\n      touchVolume: 0,\n      platform: '' //系统\n    };\n  },\n  mounted: function mounted() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              // 获取视频播放器\n              CTX = uni.createVideoContext(\"video\", _this);\n              // 获取屏幕相关\n              res = uni.getSystemInfoSync();\n              __f__(\"log\", res, \" at pages/detail-video/subNVue/video.nvue:272\");\n              _this.windowWidth = res.screenWidth;\n              _this.windowHeight = res.screenHeight;\n              _this.ratio = _this.windowHeight / _this.windowWidth;\n              _this.statusBarHeight = res.statusBarHeight;\n\n              uni.getSystemInfo({\n                success: function success(e) {\n                  _this.platform = e.platform;\n                } });case 8:case \"end\":return _context.stop();}}}, _callee);}))();\n\n  },\n  computed: {\n    videoTopHeight: function videoTopHeight() {\n      return this.fullScreen ? 44 : 44 + this.statusBarHeight;\n    },\n    videoSrc: function videoSrc() {\n      return this.definitionList[this.definitionIndex].url;\n    },\n    currentVideo: function currentVideo() {\n      return this.videoList[this.videoIndex];\n    },\n    definitionList: function definitionList() {\n      return this.currentVideo.list;\n    },\n    definitionIndex: {\n      get: function get() {\n        return this.currentVideo.index;\n      },\n      set: function set(index) {\n        this.currentVideo.index = index;\n      } },\n\n    // 按钮大小\n    btnFontSize: function btnFontSize() {\n      var size = this.fullScreen ? 30 / this.ratio : 30;\n      return \"font-size:\".concat(size, \"px\");\n    },\n    // 视频容器宽高\n    videoBoxStyle: function videoBoxStyle() {\n      return !this.fullScreen ? \"width:750rpx;height:225px;\" : \"width:\".concat(this.windowHeight, \"px;height:\").concat(this.windowWidth, \"px;\");\n    } },\n\n  watch: {\n    playStatus: function playStatus(newValue, oldValue) {\n      this.showControls();\n    },\n    fullScreen: function fullScreen(newValue, oldValue) {\n      this.showControls();\n    } },\n\n  methods: {\n    // 顶/踩操作\n    doSupport: function doSupport(type) {\n      uni.showToast({\n        title: type === 'support' ? '顶一下' : '踩一下',\n        icon: 'none' });\n\n    },\n    otherMenu: function otherMenu() {\n      uni.showToast({\n        title: '其他菜单',\n        icon: 'none' });\n\n    },\n    // 锁屏\n    lockScreen: function lockScreen() {\n      this.lockScreenStatus = !this.lockScreenStatus;\n      if (this.lockScreenStatus) {\n        // 关闭控制条\n        this.hideControls();\n      }\n    },\n    // 切换集数\n    changeVideo: function changeVideo(item, index) {\n      // 停止播放\n      CTX.stop();\n      // 切换视频\n      this.videoIndex = index;\n      // 提示\n      uni.showToast({\n        title: '切换集数 ' + item.title,\n        icon: 'none' });\n\n      // 隐藏\n      this.doPopup('videoPopup', 'hide');\n      // 播放\n      setTimeout(function () {\n        CTX.seek(0);\n        CTX.play();\n      }, 300);\n    },\n    // 修改清晰度\n    changeDefinition: function changeDefinition(item, index) {\n      this.definitionIndex = index;\n      this.src = item.url;\n      CTX.seek(0);\n      CTX.play();\n      uni.showToast({\n        title: '当前清晰度 ' + item.name,\n        icon: 'none' });\n\n    },\n    // 修改播放速度\n    changeRate: function changeRate(e) {\n      this.rate = e;\n      // 修改视频播放速度\n      CTX.playbackRate(e);\n      // 提示\n      uni.showToast({\n        title: '当前播放速度 ' + e + 'X',\n        icon: 'none' });\n\n      // 隐藏\n      this.doPopup('ratePopup', 'hide');\n    },\n    // 打开弹出层\n    doPopup: function doPopup(type) {var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'show';\n      this.$refs[type][action]();\n    },\n    // 开启弹幕\n    openDanmu: function openDanmu() {\n      this.danmuStatus = !this.danmuStatus;\n      var msg = this.danmuStatus ? '开启弹幕' : '关闭弹幕';\n      uni.showToast({\n        title: msg,\n        icon: 'none' });\n\n    },\n    // 显示隐藏控件\n    showOrHideControls: function showOrHideControls() {\n      if (!this.playStatus && this.controlsStatus) return;\n      !this.controlsStatus ? this.showControls() : this.hideControls();\n    },\n    showControls: function showControls() {var _this2 = this;\n      this.controlsStatus = true;\n      this.animateControls(0, this.$refs.videoBottom);\n      this.animateControls(0, this.$refs.videoTop);\n      // 监听控件显示倒计时\n      if (!this.playStatus && this.controlsTimer) {\n        clearTimeout(this.controlsTimer);\n        this.controlsTimer = null;\n        return;\n      }\n      if (this.controlsStatus) {\n        this.controlsTimer = setTimeout(function () {\n          _this2.hideControls();\n        }, 6000);\n      }\n    },\n    hideControls: function hideControls() {\n      this.controlsStatus = false;\n      this.animateControls(44, this.$refs.videoBottom);\n      this.animateControls('-' + this.videoTopHeight, this.$refs.videoTop);\n    },\n    animateControls: function animateControls(distance, el) {\n      animation.transition(el, {\n        styles: {\n          transform: \"translate(0px, \".concat(distance, \"px)\") },\n\n        duration: 100, //ms\n        timingFunction: 'ease-in-out',\n        delay: 0 //ms\n      }, function () {});\n\n    },\n    // 返回按钮\n    back: function back() {\n      this.fullScreen ? this.clickFullScreen() : uni.navigateBack({ delta: 1 });\n    },\n    // 播放暂停\n    playOrPause: function playOrPause() {\n      this.playStatus ? CTX.pause() : CTX.play();\n    },\n    // 全屏/取消全屏\n    clickFullScreen: function clickFullScreen() {\n      this.fullScreen ? CTX.exitFullScreen() : CTX.requestFullScreen({ direction: -90 });\n    },\n    // 监听拖动进度条更新\n    sliderUpdate: function sliderUpdate(e) {\n      if (this.playStatus) {\n        CTX.pause();\n      }\n      this.showToast = true;\n      this.showCurrentTime = e;\n    },\n    sliderChange: function sliderChange(e) {\n      CTX.seek(e);\n      this.showToast = false;\n      this.showCurrentTime = 0;\n      if (!this.playStatus) {\n        CTX.play();\n      }\n    },\n    // 监听全屏\n    fullscreenchange: function fullscreenchange(e) {var _this3 = this;\n      this.fullScreen = e.detail.fullScreen;\n      // 取消全屏\n      if (!e.detail.fullScreen) {\n        var arr = ['videoPopup', 'ratePopup', 'definitionPopup'];\n        arr.forEach(function (item) {\n          // 取消锁屏\n          if (_this3.lockScreenStatus) {\n            _this3.lockScreen();\n          }\n          // 关闭所有弹出层\n          _this3.doPopup(item, 'hide');\n        });\n        return;\n      }\n    },\n    // 监听播放进度\n    timeupdate: function timeupdate(e) {\n      this.duration = parseInt(e.detail.duration);\n      this.currentTime = parseInt(e.detail.currentTime);\n    },\n    // 点击开始\n    videoTouchStart: function videoTouchStart(e) {\n      if (this.lockScreenStatus) return;\n      // 记录点击初始值\n      this.oldTouces = e.changedTouches[0];\n      // 记录旧的参数\n      this.oldValue = {\n        current: this.currentTime,\n        volume: plus.device.getVolume() };\n\n    },\n    // 手指滑动\n    videoTouchMove: function videoTouchMove(e) {\n      if (this.lockScreenStatus) return;var\n      oldTouces = this.oldTouces,oldValue = this.oldValue,touchType = this.touchType;\n      var newTouces = e.changedTouches[0];\n      if (!this.touchType) {\n        //进度控制\n        this.touchType = Math.abs(newTouces.pageX - oldTouces.pageX) > 20 ? 'current' : null;\n        if (this.fullScreen && this.platform == 'ios') {\n          this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > 20 ? 'current' : null;\n        }\n      } else if (this.touchType == 'current') {\n\n        this.touchCurrent = (newTouces.pageX - oldTouces.pageX) / 250 * this.duration * 2 + this.oldValue[touchType] * 1;\n        if (this.platform == 'ios' && this.fullScreen) {\n          this.touchCurrent = (newTouces.pageY - oldTouces.pageY) / 250 * this.duration * 2 + this.oldValue[touchType] * 1;\n        }\n\n        this.touchCurrent = this.touchCurrent > this.duration ? this.duration : this.touchCurrent;\n        this.touchCurrent = this.touchCurrent < 0 ? 0 : this.touchCurrent;\n      }\n    },\n    // 点击结束\n    videoTouchEnd: function videoTouchEnd(e) {var _this4 = this;\n      if (this.lockScreenStatus) return;\n      if (this.touchType == 'current') {\n        CTX.seek(this.touchCurrent);\n      } else if (!this.touchType) {\n        if (this.dblCount == 1 || this.dblCount == 0) this.dblCount++;\n\n        if (this.dblCount == 1) {\n          setTimeout(function () {\n            //单击\n            if (_this4.dblCount == 1) _this4.showOrHideControls();\n            //双击\n            if (_this4.dblCount == 2) _this4.playOrPause();\n            _this4.dblCount = 0;\n          }, 250);\n        }\n      }\n\n      this.touchType = null;\n    },\n    // 移除已出现弹幕\n    removeDanmu: function removeDanmu(e) {\n      this.list.splice(e.index, 1);\n    } },\n\n  filters: {\n    formatTime: function formatTime(result) {\n      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n      var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);\n      var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n      return result = result > 3600 ? h + \":\" + m + \":\" + s : m + \":\" + s;\n    } },\n\n  beforeCreate: function beforeCreate() {\n    var d = weex.requireModule('dom');\n    d.addRule('fontFace', {\n      'fontFamily': \"iconfont\",\n      'src': \"url('https://at.alicdn.com/t/font_1419176_mzo8rsjxi4c.ttf')\" });\n\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9LQTtBQUNBO0FBQ0EsNkc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFEQTtBQUVBLG9CQUZBO0FBR0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBLDRIQUhBO0FBSUE7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBLDRIQUhBLEVBSkE7QUFRQTtBQUNBLGNBREE7QUFFQSxnQkFGQTtBQUdBLDRIQUhBLEVBUkEsQ0FIQTs7QUFnQkE7QUFDQSxVQURBO0FBRUEsbUJBRkE7QUFHQTtBQUNBLGNBREE7QUFFQSxlQUZBO0FBR0EsNEhBSEEsR0FIQSxFQWhCQSxFOzs7O0FBMEJBO0FBQ0E7QUFDQSw2QkFEQSxFQUNBLHVCQURBLEVBQ0EsdUJBREEsRUFEQTs7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLHNCQUZBO0FBR0EsZ0JBSEE7QUFJQTtBQUNBLGFBREE7QUFFQSxzQkFGQTtBQUdBLGdCQUhBLEVBSkE7QUFRQTtBQUNBLGFBREE7QUFFQSxzQkFGQTtBQUdBLGdCQUhBLEVBUkE7QUFZQTtBQUNBLGFBREE7QUFFQSxzQkFGQTtBQUdBLGdCQUhBLEVBWkEsQ0FGQTs7QUFtQkE7QUFDQSw2QkFwQkE7QUFxQkE7QUFDQSxpQkF0QkE7QUF1QkE7QUFDQSwyREF4QkE7QUF5QkE7QUFDQSxtQkExQkE7QUEyQkEseUJBM0JBOztBQTZCQSw4SEE3QkE7QUE4QkEsNEZBOUJBO0FBK0JBLDBCQS9CQTtBQWdDQSx1QkFoQ0EsRUFnQ0E7QUFDQSxpQkFqQ0EsRUFpQ0E7QUFDQSx1QkFsQ0EsRUFrQ0E7O0FBRUEsbUJBcENBO0FBcUNBLGtCQXJDQSxFQXFDQTtBQUNBLHFCQXRDQSxFQXNDQTtBQUNBLGlCQXZDQSxFQXVDQTs7QUFFQSxvQkF6Q0E7QUEwQ0EscUJBMUNBO0FBMkNBLHdCQTNDQTtBQTRDQSxjQTVDQTs7QUE4Q0EsaUJBOUNBLEVBOENBO0FBQ0Esb0JBL0NBLEVBK0NBOztBQUVBLHNCQWpEQSxFQWlEQTtBQUNBLHdCQWxEQSxFQWtEQTs7QUFFQSwwQkFwREEsRUFvREE7QUFDQSx5QkFyREEsRUFxREE7O0FBRUEsd0JBdkRBLEVBdURBOztBQUVBLHFCQXpEQTtBQTBEQSxvQkExREE7QUEyREEsb0JBM0RBO0FBNERBLGtCQTVEQSxDQTREQTtBQTVEQTtBQThEQSxHQW5FQTtBQW9FQSxTQXBFQSxxQkFvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFKQSxHQUlBLHVCQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFIQSxJQVhBOztBQWdCQSxHQXBGQTtBQXFGQTtBQUNBLGtCQURBLDRCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsWUFKQSxzQkFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLGdCQVBBLDBCQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsa0JBVkEsNEJBVUE7QUFDQTtBQUNBLEtBWkE7QUFhQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxTQUpBLGVBSUEsS0FKQSxFQUlBO0FBQ0E7QUFDQSxPQU5BLEVBYkE7O0FBcUJBO0FBQ0EsZUF0QkEseUJBc0JBO0FBQ0E7QUFDQTtBQUNBLEtBekJBO0FBMEJBO0FBQ0EsaUJBM0JBLDJCQTJCQTtBQUNBO0FBQ0EsS0E3QkEsRUFyRkE7O0FBb0hBO0FBQ0EsY0FEQSxzQkFDQSxRQURBLEVBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsY0FKQSxzQkFJQSxRQUpBLEVBSUEsUUFKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BLEVBcEhBOztBQTRIQTtBQUNBO0FBQ0EsYUFGQSxxQkFFQSxJQUZBLEVBRUE7QUFDQTtBQUNBLGlEQURBO0FBRUEsb0JBRkE7O0FBSUEsS0FQQTtBQVFBLGFBUkEsdUJBUUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7O0FBSUEsS0FiQTtBQWNBO0FBQ0EsY0FmQSx3QkFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJCQTtBQXNCQTtBQUNBLGVBdkJBLHVCQXVCQSxJQXZCQSxFQXVCQSxLQXZCQSxFQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQURBO0FBRUEsb0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLEdBSEE7QUFJQSxLQXhDQTtBQXlDQTtBQUNBLG9CQTFDQSw0QkEwQ0EsSUExQ0EsRUEwQ0EsS0ExQ0EsRUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBREE7QUFFQSxvQkFGQTs7QUFJQSxLQW5EQTtBQW9EQTtBQUNBLGNBckRBLHNCQXFEQSxDQXJEQSxFQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0E7QUFDQSxLQWhFQTtBQWlFQTtBQUNBLFdBbEVBLG1CQWtFQSxJQWxFQSxFQWtFQTtBQUNBO0FBQ0EsS0FwRUE7QUFxRUE7QUFDQSxhQXRFQSx1QkFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG9CQUZBOztBQUlBLEtBN0VBO0FBOEVBO0FBQ0Esc0JBL0VBLGdDQStFQTtBQUNBO0FBQ0E7QUFDQSxLQWxGQTtBQW1GQSxnQkFuRkEsMEJBbUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQTtBQUNBLEtBbEdBO0FBbUdBLGdCQW5HQSwwQkFtR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZHQTtBQXdHQSxtQkF4R0EsMkJBd0dBLFFBeEdBLEVBd0dBLEVBeEdBLEVBd0dBO0FBQ0E7QUFDQTtBQUNBLDhEQURBLEVBREE7O0FBSUEscUJBSkEsRUFJQTtBQUNBLHFDQUxBO0FBTUEsZ0JBTkEsQ0FNQTtBQU5BLFNBT0EsY0FQQTs7QUFTQSxLQWxIQTtBQW1IQTtBQUNBLFFBcEhBLGtCQW9IQTtBQUNBO0FBQ0EsS0F0SEE7QUF1SEE7QUFDQSxlQXhIQSx5QkF3SEE7QUFDQTtBQUNBLEtBMUhBO0FBMkhBO0FBQ0EsbUJBNUhBLDZCQTRIQTtBQUNBO0FBQ0EsS0E5SEE7QUErSEE7QUFDQSxnQkFoSUEsd0JBZ0lBLENBaElBLEVBZ0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdElBO0FBdUlBLGdCQXZJQSx3QkF1SUEsQ0F2SUEsRUF1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlJQTtBQStJQTtBQUNBLG9CQWhKQSw0QkFnSkEsQ0FoSkEsRUFnSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FQQTtBQVFBO0FBQ0E7QUFDQSxLQS9KQTtBQWdLQTtBQUNBLGNBaktBLHNCQWlLQSxDQWpLQSxFQWlLQTtBQUNBO0FBQ0E7QUFDQSxLQXBLQTtBQXFLQTtBQUNBLG1CQXRLQSwyQkFzS0EsQ0F0S0EsRUFzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSx1Q0FGQTs7QUFJQSxLQS9LQTtBQWdMQTtBQUNBLGtCQWpMQSwwQkFpTEEsQ0FqTEEsRUFpTEE7QUFDQSx3Q0FEQTtBQUVBLGVBRkEsR0FFQSxJQUZBLENBRUEsU0FGQSxDQUVBLFFBRkEsR0FFQSxJQUZBLENBRUEsUUFGQSxDQUVBLFNBRkEsR0FFQSxJQUZBLENBRUEsU0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQSxNQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBck1BO0FBc01BO0FBQ0EsaUJBdk1BLHlCQXVNQSxDQXZNQSxFQXVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FOQSxFQU1BLEdBTkE7QUFPQTtBQUNBOztBQUVBO0FBQ0EsS0ExTkE7QUEyTkE7QUFDQSxlQTVOQSx1QkE0TkEsQ0E1TkEsRUE0TkE7QUFDQTtBQUNBLEtBOU5BLEVBNUhBOztBQTRWQTtBQUNBLGNBREEsc0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5BLEVBNVZBOztBQW9XQSxjQXBXQSwwQkFvV0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSwwRUFGQTs7QUFJQSxHQTFXQSxFIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHZpZGVvIGlkPVwidmlkZW9cIiA6c3JjPVwidmlkZW9TcmNcIiA6cG9zdGVyPVwicG9zdGVyXCJcclxuXHRcdDpjb250cm9scz1cImZhbHNlXCIgXHJcblx0XHQ6c2hvdy1jZW50ZXItcGxheS1idG49XCJmYWxzZVwiIFxyXG5cdFx0OnNob3ctZnVsbHNjcmVlbi1idG49XCJmYWxzZVwiIFxyXG5cdFx0OnNob3ctcHJvZ3Jlc3M9XCJmYWxzZVwiIFxyXG5cdFx0OmVuYWJsZS1wcm9ncmVzcy1nZXN0dXJlPVwiZmFsc2VcIiBcclxuXHRcdDpvYmplY3RGaXQ9XCJvYmplY3RGaXRcIiBcclxuXHRcdDpsb29wPVwibG9vcFwiIFxyXG5cdFx0QGZ1bGxzY3JlZW5jaGFuZ2U9XCJmdWxsc2NyZWVuY2hhbmdlXCJcclxuXHRcdEB0aW1ldXBkYXRlPVwidGltZXVwZGF0ZVwiXHJcblx0XHRAcGxheT1cInBsYXlTdGF0dXMgPSB0cnVlXCJcclxuXHRcdEBwYXVzZT1cInBsYXlTdGF0dXMgPSBmYWxzZVwiPlxyXG5cdFx0XHQ8IS0tIOmdnuWFqOWxjyAtLT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgOnN0eWxlPVwidmlkZW9Cb3hTdHlsZVwiPlxyXG5cdFx0XHRcdDwhLS0g5omL5Yq/5o6n5Yi2IC0tPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZVwiIDpzdHlsZT1cInZpZGVvQm94U3R5bGVcIiBAdG91Y2hlbmQ9XCJ2aWRlb1RvdWNoRW5kXCIgQHRvdWNobW92ZT1cInZpZGVvVG91Y2hNb3ZlXCIgQHRvdWNoc3RhcnQ9XCJ2aWRlb1RvdWNoU3RhcnRcIj48L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8IS0tIOS+p+i+ueaMiemSrnzplIHlsY8gLS0+XHJcblx0XHRcdFx0PGRpdiB2LWlmPVwiZnVsbFNjcmVlblwiIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBib3R0b20tMCBmbGV4LWNvbHVtbiBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwLTMgcm91bmRlZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA1KTtcIiBAY2xpY2s9XCJsb2NrU2NyZWVuXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiA6c3R5bGU9XCJidG5Gb250U2l6ZVwiIDpjbGFzcz1cImxvY2tTY3JlZW5TdGF0dXMgPyAndGV4dC1tYWluJzondGV4dC13aGl0ZSdcIj4mI3hlNjIwOzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwhLS0g5by55bmVIC0tPlxyXG5cdFx0XHRcdDxmLWRhbm11IHYtaWY9XCJkYW5tdVN0YXR1c1wiIDpsaXN0PVwibGlzdFwiIDpmdWxsU2NyZWVuPVwiZnVsbFNjcmVlblwiIDpjdXJyZW50PVwiY3VycmVudFRpbWVcIiBAZW5kPVwicmVtb3ZlRGFubXVcIj48L2YtZGFubXU+XHJcblx0XHRcdFx0PCEtLSDpobbpg6ggLS0+XHJcblx0XHRcdFx0PGRpdiByZWY9XCJ2aWRlb1RvcFwiIGNsYXNzPVwidmlkZW8tdG9wXCIgOnN0eWxlPVwiJ2hlaWdodDonK3ZpZGVvVG9wSGVpZ2h0KydweCdcIj5cclxuXHRcdFx0XHRcdDwhLS0g54q25oCB5qCPIC0tPlxyXG5cdFx0XHRcdFx0PGRpdiB2LWlmPVwiIWZ1bGxTY3JlZW5cIiA6c3R5bGU9XCInaGVpZ2h0Oicrc3RhdHVzQmFySGVpZ2h0KydweCdcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiYmFja1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBpY29uZm9udFwiIFxyXG5cdFx0XHRcdFx0XHRcdDpzdHlsZT1cImJ0bkZvbnRTaXplXCI+JiN4ZTYxMjs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1pZj1cImZ1bGxTY3JlZW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC0xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOinhumikeagh+mimCAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O2xpbmVzOiAxO1wiPnt7Y3VycmVudFZpZGVvLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0blwiIHN0eWxlPVwid2lkdGg6IDU1cHg7XCIgQGNsaWNrPVwiZG9TdXBwb3J0KCdzdXBwb3J0JylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBpY29uZm9udFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0OnN0eWxlPVwiYnRuRm9udFNpemVcIj4mI3hlNjNjOzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuXCIgc3R5bGU9XCJ3aWR0aDogNTVweDtcIiBAY2xpY2s9XCJkb1N1cHBvcnQoJ3Vuc3VwcG9ydCcpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGUgaWNvbmZvbnRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cImJ0bkZvbnRTaXplXCI+JiN4ZTZjNjs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0blwiIHN0eWxlPVwid2lkdGg6IDU1cHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGUgaWNvbmZvbnRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cImJ0bkZvbnRTaXplXCI+JiN4ZTZlZTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0blwiIHN0eWxlPVwid2lkdGg6IDU1cHg7XCIgQGNsaWNrPVwib3RoZXJNZW51XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGUgaWNvbmZvbnRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdDpzdHlsZT1cImJ0bkZvbnRTaXplXCI+JiN4ZTY0Yzs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8IS0tIOaPkOekuuahhiAtLT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9hc3RcIiB2LWlmPVwic2hvd1RvYXN0XCI+XHJcblx0XHRcdFx0XHQ8IS0tIOaPkOekuiAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIDpzdHlsZT1cIidmb250LXNpemU6JysoZnVsbFNjcmVlbiA/IDEwIDogMTQpKydweDsnXCIgdi1pZj1cInNob3dDdXJyZW50VGltZSA+IDBcIj57e3Nob3dDdXJyZW50VGltZXxmb3JtYXRUaW1lfX0ve3tkdXJhdGlvbnxmb3JtYXRUaW1lfX08L3RleHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInRvYXN0XCIgdi1pZj1cInRvdWNoVHlwZSA9PT0gJ2N1cnJlbnQnXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOi/m+W6puadoSAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIDpzdHlsZT1cIidmb250LXNpemU6JysoZnVsbFNjcmVlbiA/IDEwIDogMTQpKydweDsnXCI+e3t0b3VjaEN1cnJlbnR8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDwhLS0gY29udHJvbHPmjqfliLbmnaEgfCDpnZ7lhajlsY8tLT5cclxuXHRcdFx0XHQ8ZGl2IHYtaWY9XCIhZnVsbFNjcmVlblwiIGNsYXNzPVwidmlkZW8tYm90dG9tXCIgcmVmPVwidmlkZW9Cb3R0b21cIj5cclxuXHRcdFx0XHRcdDwhLS0g5pKt5pS+5pqC5YGcIC0tPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInBsYXlPclBhdXNlXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBpY29uZm9udFwiIDpzdHlsZT1cImJ0bkZvbnRTaXplXCI+e3twbGF5U3RhdHVzPydcXHVlNjA1JzonXFx1ZTYzYSd9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PCEtLSDov5vluqbmnaEgLS0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC0xXCI+XHJcblx0XHRcdFx0XHRcdDxmLXNsaWRlciByZWY9XCJzbGlkZXJcIiA6ZD1cImR1cmF0aW9uXCIgOmM9XCJjdXJyZW50VGltZVwiXHJcblx0XHRcdFx0XHRcdEB1cGRhdGU9XCJzbGlkZXJVcGRhdGVcIiBAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCJcclxuXHRcdFx0XHRcdFx0OmZ1bGxTY3JlZW49XCJmYWxzZVwiPjwvZi1zbGlkZXI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwhLS0g5pe26Ze0IC0tPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDEycHg7XCI+ICB7e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fSAgPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8IS0tIOWFqOWxjyAtLT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJjbGlja0Z1bGxTY3JlZW5cIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGljb25mb250XCIgOnN0eWxlPVwiYnRuRm9udFNpemVcIj4mI3hlODAwOzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDwhLS0gY29udHJvbHPmjqfliLbmnaEgfCDlhajlsY8gLS0+XHJcblx0XHRcdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJ2aWRlby1ib3R0b20tZnVsbFwiIHJlZj1cInZpZGVvQm90dG9tXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOi/m+W6puadoSAtLT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiAyMnB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC0xXCIgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDEwcHg7cGFkZGluZy1yaWdodDogMTBweDtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Zi1zbGlkZXIgcmVmPVwic2xpZGVyXCIgOmQ9XCJkdXJhdGlvblwiIDpjPVwiY3VycmVudFRpbWVcIlxyXG5cdFx0XHRcdFx0XHRcdEB1cGRhdGU9XCJzbGlkZXJVcGRhdGVcIiA6ZnVsbFNjcmVlbj1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHRcdEBjaGFuZ2U9XCJzbGlkZXJDaGFuZ2VcIj48L2Ytc2xpZGVyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOaSreaUvuaaguWBnCAtLT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInBsYXlPclBhdXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGljb25mb250XCIgOnN0eWxlPVwiYnRuRm9udFNpemVcIj57e3BsYXlTdGF0dXM/J1xcdWU2MDUnOidcXHVlNjNhJ319PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PCEtLSDml7bpl7QgLS0+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6MTBweDtcIj4gIHt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19ICA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOW8ueW5leW8gOWFsyAtLT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0blwiIEBjbGljaz1cIm9wZW5EYW5tdVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiA6c3R5bGU9XCJidG5Gb250U2l6ZVwiIDpjbGFzcz1cImRhbm11U3RhdHVzID8gJ3RleHQtbWFpbicgOiAndGV4dC13aGl0ZSdcIj57e2Rhbm11U3RhdHVzPyAnXFx1ZTY5Nyc6J1xcdWU2OTYnfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOWNoOS9jSAtLT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtMVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOmAiembhiAtLT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInB4LTMgcHktMlwiIEBjbGljaz1cImRvUG9wdXAoJ3ZpZGVvUG9wdXAnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O1wiPumAiembhjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwhLS0g5YCN5pWw5YiH5o2iIC0tPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHgtMyBweS0yXCIgQGNsaWNrPVwiZG9Qb3B1cCgncmF0ZVBvcHVwJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweDtcIj7lgI3pgJ88L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOa4heaZsOW6puWIh+aNoiAtLT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInB4LTMgcHktMlwiIEBjbGljaz1cImRvUG9wdXAoJ2RlZmluaXRpb25Qb3B1cCcpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDEwcHg7XCI+e3tkZWZpbml0aW9uTGlzdFtkZWZpbml0aW9uSW5kZXhdLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8IS0tIOmAn+W6pumAieaLqSAtLT5cclxuXHRcdFx0XHQ8Zi1wb3B1cCByZWY9XCJyYXRlUG9wdXBcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LTEgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0di1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcmF0ZUxpc3RcIiA6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwiY2hhbmdlUmF0ZShpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJpdGVtID09PSByYXRlID8gJ3RleHQtbWFpbicgOid0ZXh0LXdoaXRlJ1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O1wiPnt7aXRlbX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9mLXBvcHVwPlxyXG5cdFx0XHRcdDwhLS0g5pKt5pS+5riF5pmw5bqmIC0tPlxyXG5cdFx0XHRcdDxmLXBvcHVwIHJlZj1cImRlZmluaXRpb25Qb3B1cFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInB5LTQgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0di1mb3I9XCIoaXRlbSxpbmRleCkgaW4gZGVmaW5pdGlvbkxpc3RcIiA6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwiY2hhbmdlRGVmaW5pdGlvbihpdGVtLGluZGV4KVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJpbmRleCA9PT0gZGVmaW5pdGlvbkluZGV4ID8gJ3RleHQtbWFpbicgOid0ZXh0LXdoaXRlJ1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O1wiPnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2YtcG9wdXA+XHJcblx0XHRcdFx0PCEtLSDliIfmjaLpm4bmlbAgLS0+XHJcblx0XHRcdFx0PGYtcG9wdXAgcmVmPVwidmlkZW9Qb3B1cFwiIDp3aWR0aD1cIjMwMFwiPlxyXG5cdFx0XHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwiZmxleC0xIHAtMlwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidmlkZW8tcG9wdXAtaXRlbVwiIDpjbGFzcz1cInZpZGVvSW5kZXggPT09IGluZGV4ID8gJ2JvcmRlci1tYWluJzonJ1wiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHZpZGVvTGlzdFwiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cImNoYW5nZVZpZGVvKGl0ZW0saW5kZXgpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwidmlkZW9JbmRleCA9PT0gaW5kZXggPyAndGV4dC1tYWluJyA6ICd0ZXh0LXdoaXRlJ1wiIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4O2xpbmVzOiAxO1wiPnt7aXRlbS50aXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0PC9mLXBvcHVwPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvdmlkZW8+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZlNsaWRlciBmcm9tICdAL3BsYXRmb3Jtcy9hcHAtcGx1cy92aWRlby9mLXNsaWRlci5udnVlJztcclxuXHRpbXBvcnQgZlBvcHVwIGZyb20gJ0AvcGxhdGZvcm1zL2FwcC1wbHVzL3ZpZGVvL2YtcG9wdXAubnZ1ZSc7XHJcblx0aW1wb3J0IGZEYW5tdSBmcm9tICdAL3BsYXRmb3Jtcy9hcHAtcGx1cy92aWRlby9mLWRhbm11Lm52dWUnO1xyXG5cdFxyXG5cdHZhciBDVFggPSBudWxsO1xyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJyk7XHJcblx0Y29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRcclxuXHRjb25zdCBkZW1vTGlzdCA9IFt7XHJcblx0XHRpbmRleDowLFxyXG5cdFx0dGl0bGU6XCLkvJjljJbnqbrmlbDmja7pu5jorqTmmL7npLpcIixcclxuXHRcdGxpc3Q6W3tcclxuXHRcdFx0bmFtZTpcIuagh+a4hVwiLFxyXG5cdFx0XHR2YWx1ZTpcIlNEXCIsXHJcblx0XHRcdHVybDpcImh0dHBzOi8vZG91eWluemNtY3NzLm9zcy1jbi1zaGVuemhlbi5hbGl5dW5jcy5jb20vJUU4JUFGJUJFJUU2JTk3JUI2MS4lMjAlRTklQTElQjklRTclOUIlQUUlRTQlQkIlOEIlRTclQkIlOEQubXA0XCJcclxuXHRcdH0se1xyXG5cdFx0XHRuYW1lOlwi6auY5riFXCIsXHJcblx0XHRcdHZhbHVlOlwiSERcIixcclxuXHRcdFx0dXJsOlwiaHR0cHM6Ly9kb3V5aW56Y21jc3Mub3NzLWNuLXNoZW56aGVuLmFsaXl1bmNzLmNvbS8lRTglQUYlQkUlRTYlOTclQjYxLiUyMCVFOSVBMSVCOSVFNyU5QiVBRSVFNCVCQiU4QiVFNyVCQiU4RC5tcDRcIlxyXG5cdFx0fSx7XHJcblx0XHRcdG5hbWU6XCLotoXmuIVcIixcclxuXHRcdFx0dmFsdWU6XCJGSERcIixcclxuXHRcdFx0dXJsOlwiaHR0cHM6Ly9kb3V5aW56Y21jc3Mub3NzLWNuLXNoZW56aGVuLmFsaXl1bmNzLmNvbS8lRTglQUYlQkUlRTYlOTclQjYxLiUyMCVFOSVBMSVCOSVFNyU5QiVBRSVFNCVCQiU4QiVFNyVCQiU4RC5tcDRcIlxyXG5cdFx0fV0sXHJcblx0fSx7XHJcblx0XHRpbmRleDowLFxyXG5cdFx0dGl0bGU6XCIyMDE45bm05bmz5piM5YasXCIsXHJcblx0XHRsaXN0Olt7XHJcblx0XHRcdG5hbWU6XCLmoIfmuIVcIixcclxuXHRcdFx0dmFsdWU6XCJTRFwiLFxyXG5cdFx0XHR1cmw6XCJodHRwczovL2RvdXlpbnpjbWNzcy5vc3MtY24tc2hlbnpoZW4uYWxpeXVuY3MuY29tLyVFOCVBRiVCRSVFNiU5NyVCNjEuJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU0JUJCJThCJUU3JUJCJThELm1wNFwiXHJcblx0XHR9XSxcclxuXHR9XVxyXG5cdFxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGZTbGlkZXIsZlBvcHVwLGZEYW5tdVxyXG5cdFx0fSxcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIOW8ueW5leWIl+ihqFxyXG5cdFx0XHRcdGxpc3Q6W3tcclxuXHRcdFx0XHRcdGlkOjEsXHJcblx0XHRcdFx0XHR0aXRsZTpcIua1i+ivleW8ueW5lTFcIixcclxuXHRcdFx0XHRcdHRpbWU6MTBcclxuXHRcdFx0XHR9LHtcclxuXHRcdFx0XHRcdGlkOjIsXHJcblx0XHRcdFx0XHR0aXRsZTpcIua1i+ivleW8ueW5lTJcIixcclxuXHRcdFx0XHRcdHRpbWU6MzBcclxuXHRcdFx0XHR9LHtcclxuXHRcdFx0XHRcdGlkOjMsXHJcblx0XHRcdFx0XHR0aXRsZTpcIua1i+ivleW8ueW5lTNcIixcclxuXHRcdFx0XHRcdHRpbWU6NDBcclxuXHRcdFx0XHR9LHtcclxuXHRcdFx0XHRcdGlkOjQsXHJcblx0XHRcdFx0XHR0aXRsZTpcIua1i+ivleW8ueW5lTRcIixcclxuXHRcdFx0XHRcdHRpbWU6NTBcclxuXHRcdFx0XHR9XSxcclxuXHRcdFx0XHQvLyDplIHlsY9cclxuXHRcdFx0XHRsb2NrU2NyZWVuU3RhdHVzOmZhbHNlLFxyXG5cdFx0XHRcdC8vIOW9k+WJjemAn+W6plxyXG5cdFx0XHRcdHJhdGU6XCIxLjBcIixcclxuXHRcdFx0XHQvLyDpgJ/luqbpgInmi6lcclxuXHRcdFx0XHRyYXRlTGlzdDpbJzIuMCcsJzEuNScsJzEuMjUnLCcxLjAnLCcwLjgnLCcwLjUnXSxcclxuXHRcdFx0XHQvLyDpm4bmlbBcclxuXHRcdFx0XHR2aWRlb0luZGV4OjAsXHJcblx0XHRcdFx0dmlkZW9MaXN0OmRlbW9MaXN0LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNyYzogXCJodHRwczovL2RvdXlpbnpjbWNzcy5vc3MtY24tc2hlbnpoZW4uYWxpeXVuY3MuY29tLyVFOCVBRiVCRSVFNiU5NyVCNjEuJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU0JUJCJThCJUU3JUJCJThELm1wNFwiLFxyXG5cdFx0XHRcdHBvc3RlcjpcImh0dHBzOi8vZG91eWluemNtY3NzLm9zcy1jbi1zaGVuemhlbi5hbGl5dW5jcy5jb20vc2hlbmdjaGVuZ3FpL2RhdGFwaWMvMS5qcGdcIixcclxuXHRcdFx0XHRvYmplY3RGaXQ6XCJjb250YWluXCIsXHJcblx0XHRcdFx0ZnVsbFNjcmVlbjogZmFsc2UsLy/lhajlsY/nirbmgIFcclxuXHRcdFx0XHRsb29wOiBmYWxzZSwvL+W+queOr1xyXG5cdFx0XHRcdHBsYXlTdGF0dXM6IGZhbHNlLC8v5pKt5pS+54q25oCBXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0b2xkVG91Y2VzOnt9LFxyXG5cdFx0XHRcdG9sZFZhbHVlOnt9LC8v6Kem5pG45byA5aeLIOi/m+W6pu+8jOmfs+mHj++8jOS6ruW6plxyXG5cdFx0XHRcdHRvdWNoVHlwZTogbnVsbCwvL+a7keWKqOexu+Wei1xyXG5cdFx0XHRcdGRibENvdW50OjAsLy/lj4zlh7vorqHmlbBcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDowLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDowLFxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDowLFxyXG5cdFx0XHRcdHJhdGlvOjEsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZHVyYXRpb246MCwvLyDmgLvml7bplb9cclxuXHRcdFx0XHRjdXJyZW50VGltZTowLC8vIOW9k+WJjeaXtumXtFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNob3dUb2FzdDpmYWxzZSwgLy8g5raI5oGv5o+Q56S65qGGXHJcblx0XHRcdFx0c2hvd0N1cnJlbnRUaW1lOjAsLy8g55So5LqO5o+Q56S65b2T5YmN5pe26Ze05Y+Y5YyWXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29udHJvbHNTdGF0dXM6dHJ1ZSwgLy8g5o6n5Yi25qCP54q25oCBXHJcblx0XHRcdFx0Y29udHJvbHNUaW1lcjpudWxsLCAvLyDmjqfliLbmoI/mmL7npLrlgJLorqHml7ZcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkYW5tdVN0YXR1czpmYWxzZSwgLy8g5piv5ZCm5byA5ZCv5by55bmVXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dG91Y2hDdXJyZW50OjAsXHJcblx0XHRcdFx0dG91Y2hCcmlnaHQ6MCxcclxuXHRcdFx0XHR0b3VjaFZvbHVtZTowLFxyXG5cdFx0XHRcdHBsYXRmb3JtOicnLC8v57O757ufXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRhc3luYyBtb3VudGVkKCkge1xyXG5cdFx0XHQvLyDojrflj5bop4bpopHmkq3mlL7lmahcclxuXHRcdFx0Q1RYID0gdW5pLmNyZWF0ZVZpZGVvQ29udGV4dChgdmlkZW9gLHRoaXMpXHJcblx0XHRcdC8vIOiOt+WPluWxj+W5leebuOWFs1xyXG5cdFx0XHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHJlcy5zY3JlZW5XaWR0aFxyXG5cdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHJlcy5zY3JlZW5IZWlnaHRcclxuXHRcdFx0dGhpcy5yYXRpbyA9IHRoaXMud2luZG93SGVpZ2h0IC8gdGhpcy53aW5kb3dXaWR0aFxyXG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHJlcy5zdGF0dXNCYXJIZWlnaHRcclxuXHRcdFx0XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF0Zm9ybSA9IGUucGxhdGZvcm1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0dmlkZW9Ub3BIZWlnaHQoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsU2NyZWVuID8gNDQgOiAoNDQgKyB0aGlzLnN0YXR1c0JhckhlaWdodClcclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW9TcmMoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5kZWZpbml0aW9uTGlzdFt0aGlzLmRlZmluaXRpb25JbmRleF0udXJsXHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnRWaWRlbygpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdXHJcblx0XHRcdH0sXHJcblx0XHRcdGRlZmluaXRpb25MaXN0KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudFZpZGVvLmxpc3RcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVmaW5pdGlvbkluZGV4OntcclxuXHRcdFx0XHRnZXQoKXtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmN1cnJlbnRWaWRlby5pbmRleFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0KGluZGV4KXtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFZpZGVvLmluZGV4ID0gaW5kZXhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaMiemSruWkp+Wwj1xyXG5cdFx0XHRidG5Gb250U2l6ZSgpe1xyXG5cdFx0XHRcdGxldCBzaXplID0gdGhpcy5mdWxsU2NyZWVuID8gKDMwL3RoaXMucmF0aW8pIDogMzBcclxuXHRcdFx0XHRyZXR1cm4gYGZvbnQtc2l6ZToke3NpemV9cHhgXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOinhumikeWuueWZqOWuvemrmFxyXG5cdFx0XHR2aWRlb0JveFN0eWxlKCkge1xyXG5cdFx0XHRcdHJldHVybiAhdGhpcy5mdWxsU2NyZWVuID8gYHdpZHRoOjc1MHJweDtoZWlnaHQ6MjI1cHg7YCA6IGB3aWR0aDoke3RoaXMud2luZG93SGVpZ2h0fXB4O2hlaWdodDoke3RoaXMud2luZG93V2lkdGh9cHg7YFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0cGxheVN0YXR1cyhuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dDb250cm9scygpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bGxTY3JlZW4obmV3VmFsdWUsb2xkVmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMuc2hvd0NvbnRyb2xzKClcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g6aG2L+i4qeaTjeS9nFxyXG5cdFx0XHRkb1N1cHBvcnQodHlwZSl7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogdHlwZSA9PT0gJ3N1cHBvcnQnID8gJ+mhtuS4gOS4iyc6J+i4qeS4gOS4iycsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b3RoZXJNZW51KCl7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTon5YW25LuW6I+c5Y2VJyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDplIHlsY9cclxuXHRcdFx0bG9ja1NjcmVlbigpe1xyXG5cdFx0XHRcdHRoaXMubG9ja1NjcmVlblN0YXR1cyA9ICF0aGlzLmxvY2tTY3JlZW5TdGF0dXNcclxuXHRcdFx0XHRpZiAodGhpcy5sb2NrU2NyZWVuU3RhdHVzKSB7XHJcblx0XHRcdFx0XHQvLyDlhbPpl63mjqfliLbmnaFcclxuXHRcdFx0XHRcdHRoaXMuaGlkZUNvbnRyb2xzKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWIh+aNoumbhuaVsFxyXG5cdFx0XHRjaGFuZ2VWaWRlbyhpdGVtLGluZGV4KXtcclxuXHRcdFx0XHQvLyDlgZzmraLmkq3mlL5cclxuXHRcdFx0XHRDVFguc3RvcCgpXHJcblx0XHRcdFx0Ly8g5YiH5o2i6KeG6aKRXHJcblx0XHRcdFx0dGhpcy52aWRlb0luZGV4ID0gaW5kZXhcclxuXHRcdFx0XHQvLyDmj5DnpLpcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5YiH5o2i6ZuG5pWwICcraXRlbS50aXRsZSxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIOmakOiXj1xyXG5cdFx0XHRcdHRoaXMuZG9Qb3B1cCgndmlkZW9Qb3B1cCcsJ2hpZGUnKVxyXG5cdFx0XHRcdC8vIOaSreaUvlxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdENUWC5zZWVrKDApXHJcblx0XHRcdFx0XHRDVFgucGxheSgpXHJcblx0XHRcdFx0fSwzMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOS/ruaUuea4heaZsOW6plxyXG5cdFx0XHRjaGFuZ2VEZWZpbml0aW9uKGl0ZW0saW5kZXgpe1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5pdGlvbkluZGV4ID0gaW5kZXhcclxuXHRcdFx0XHR0aGlzLnNyYyA9IGl0ZW0udXJsXHJcblx0XHRcdFx0Q1RYLnNlZWsoMClcclxuXHRcdFx0XHRDVFgucGxheSgpXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+W9k+WJjea4heaZsOW6piAnK2l0ZW0ubmFtZSxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkv67mlLnmkq3mlL7pgJ/luqZcclxuXHRcdFx0Y2hhbmdlUmF0ZShlKXtcclxuXHRcdFx0XHR0aGlzLnJhdGUgPSBlXHJcblx0XHRcdFx0Ly8g5L+u5pS56KeG6aKR5pKt5pS+6YCf5bqmXHJcblx0XHRcdFx0Q1RYLnBsYXliYWNrUmF0ZShlKVxyXG5cdFx0XHRcdC8vIOaPkOekulxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICflvZPliY3mkq3mlL7pgJ/luqYgJytlKydYJyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIOmakOiXj1xyXG5cdFx0XHRcdHRoaXMuZG9Qb3B1cCgncmF0ZVBvcHVwJywnaGlkZScpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaJk+W8gOW8ueWHuuWxglxyXG5cdFx0XHRkb1BvcHVwKHR5cGUsYWN0aW9uID0gJ3Nob3cnKXtcclxuXHRcdFx0XHR0aGlzLiRyZWZzW3R5cGVdW2FjdGlvbl0oKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvIDlkK/lvLnluZVcclxuXHRcdFx0b3BlbkRhbm11KCl7XHJcblx0XHRcdFx0dGhpcy5kYW5tdVN0YXR1cyA9ICF0aGlzLmRhbm11U3RhdHVzXHJcblx0XHRcdFx0bGV0IG1zZyA9IHRoaXMuZGFubXVTdGF0dXMgPyAn5byA5ZCv5by55bmVJyA6ICflhbPpl63lvLnluZUnXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogbXNnLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuumakOiXj+aOp+S7tlxyXG5cdFx0XHRzaG93T3JIaWRlQ29udHJvbHMoKXtcclxuXHRcdFx0XHRpZiAoIXRoaXMucGxheVN0YXR1cyAmJiB0aGlzLmNvbnRyb2xzU3RhdHVzKSByZXR1cm47XHJcblx0XHRcdFx0IXRoaXMuY29udHJvbHNTdGF0dXMgPyB0aGlzLnNob3dDb250cm9scygpIDogdGhpcy5oaWRlQ29udHJvbHMoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93Q29udHJvbHMoKXtcclxuXHRcdFx0XHR0aGlzLmNvbnRyb2xzU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuYW5pbWF0ZUNvbnRyb2xzKDAsdGhpcy4kcmVmcy52aWRlb0JvdHRvbSlcclxuXHRcdFx0XHR0aGlzLmFuaW1hdGVDb250cm9scygwLHRoaXMuJHJlZnMudmlkZW9Ub3ApXHJcblx0XHRcdFx0Ly8g55uR5ZCs5o6n5Lu25pi+56S65YCS6K6h5pe2XHJcblx0XHRcdFx0aWYoIXRoaXMucGxheVN0YXR1cyAmJiB0aGlzLmNvbnRyb2xzVGltZXIpe1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY29udHJvbHNUaW1lcilcclxuXHRcdFx0XHRcdHRoaXMuY29udHJvbHNUaW1lciA9IG51bGxcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuY29udHJvbHNTdGF0dXMpIHtcclxuXHRcdFx0XHRcdHRoaXMuY29udHJvbHNUaW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0dGhpcy5oaWRlQ29udHJvbHMoKVxyXG5cdFx0XHRcdFx0fSw2MDAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0aGlkZUNvbnRyb2xzKCl7XHJcblx0XHRcdFx0dGhpcy5jb250cm9sc1N0YXR1cyA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy5hbmltYXRlQ29udHJvbHMoNDQsdGhpcy4kcmVmcy52aWRlb0JvdHRvbSlcclxuXHRcdFx0XHR0aGlzLmFuaW1hdGVDb250cm9scygnLScrdGhpcy52aWRlb1RvcEhlaWdodCx0aGlzLiRyZWZzLnZpZGVvVG9wKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbmltYXRlQ29udHJvbHMoZGlzdGFuY2UsZWwpe1xyXG5cdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLCB7XHJcblx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlKDBweCwgJHtkaXN0YW5jZX1weClgLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAsIC8vbXNcclxuXHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZS1pbi1vdXQnLFxyXG5cdFx0XHRcdFx0ZGVsYXk6IDAgLy9tc1xyXG5cdFx0XHRcdFx0fSwgKCkgPT4ge31cclxuXHRcdFx0XHQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/lOWbnuaMiemSrlxyXG5cdFx0XHRiYWNrKCl7XHJcblx0XHRcdFx0dGhpcy5mdWxsU2NyZWVuID8gdGhpcy5jbGlja0Z1bGxTY3JlZW4oKSA6IHVuaS5uYXZpZ2F0ZUJhY2soeyBkZWx0YTogMSB9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmkq3mlL7mmoLlgZxcclxuXHRcdFx0cGxheU9yUGF1c2UoKXtcclxuXHRcdFx0XHR0aGlzLnBsYXlTdGF0dXMgPyBDVFgucGF1c2UoKSA6IENUWC5wbGF5KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YWo5bGPL+WPlua2iOWFqOWxj1xyXG5cdFx0XHRjbGlja0Z1bGxTY3JlZW4oKXtcclxuXHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW4gPyBDVFguZXhpdEZ1bGxTY3JlZW4oKSA6IENUWC5yZXF1ZXN0RnVsbFNjcmVlbih7ZGlyZWN0aW9uOiAtOTB9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnm5HlkKzmi5bliqjov5vluqbmnaHmm7TmlrBcclxuXHRcdFx0c2xpZGVyVXBkYXRlKGUpe1xyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXlTdGF0dXMpIHtcclxuXHRcdFx0XHRcdENUWC5wYXVzZSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0ID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuc2hvd0N1cnJlbnRUaW1lID0gZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbGlkZXJDaGFuZ2UoZSl7XHJcblx0XHRcdFx0Q1RYLnNlZWsoZSlcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdCA9IGZhbHNlXHJcblx0XHRcdFx0dGhpcy5zaG93Q3VycmVudFRpbWUgPSAwXHJcblx0XHRcdFx0aWYgKCF0aGlzLnBsYXlTdGF0dXMpIHtcclxuXHRcdFx0XHRcdENUWC5wbGF5KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOebkeWQrOWFqOWxj1xyXG5cdFx0XHRmdWxsc2NyZWVuY2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW4gPSBlLmRldGFpbC5mdWxsU2NyZWVuXHJcblx0XHRcdFx0Ly8g5Y+W5raI5YWo5bGPXHJcblx0XHRcdFx0aWYgKCFlLmRldGFpbC5mdWxsU2NyZWVuKSB7XHJcblx0XHRcdFx0XHRjb25zdCBhcnIgPSBbJ3ZpZGVvUG9wdXAnLCdyYXRlUG9wdXAnLCdkZWZpbml0aW9uUG9wdXAnXVxyXG5cdFx0XHRcdFx0YXJyLmZvckVhY2goaXRlbT0+e1xyXG5cdFx0XHRcdFx0XHQvLyDlj5bmtojplIHlsY9cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMubG9ja1NjcmVlblN0YXR1cykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubG9ja1NjcmVlbigpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g5YWz6Zet5omA5pyJ5by55Ye65bGCXHJcblx0XHRcdFx0XHRcdHRoaXMuZG9Qb3B1cChpdGVtLCdoaWRlJylcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnm5HlkKzmkq3mlL7ov5vluqZcclxuXHRcdFx0dGltZXVwZGF0ZShlKXtcclxuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gcGFyc2VJbnQoZS5kZXRhaWwuZHVyYXRpb24pXHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHBhcnNlSW50KGUuZGV0YWlsLmN1cnJlbnRUaW1lKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vlvIDlp4tcclxuXHRcdFx0dmlkZW9Ub3VjaFN0YXJ0KGUpe1xyXG5cdFx0XHRcdGlmICh0aGlzLmxvY2tTY3JlZW5TdGF0dXMpIHJldHVyblxyXG5cdFx0XHRcdC8vIOiusOW9leeCueWHu+WIneWni+WAvFxyXG5cdFx0XHRcdHRoaXMub2xkVG91Y2VzID0gZS5jaGFuZ2VkVG91Y2hlc1swXVxyXG5cdFx0XHRcdC8vIOiusOW9leaXp+eahOWPguaVsFxyXG5cdFx0XHRcdHRoaXMub2xkVmFsdWUgPSB7XHJcblx0XHRcdFx0XHRjdXJyZW50OnRoaXMuY3VycmVudFRpbWUsXHJcblx0XHRcdFx0XHR2b2x1bWU6cGx1cy5kZXZpY2UuZ2V0Vm9sdW1lKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaJi+aMh+a7keWKqFxyXG5cdFx0XHR2aWRlb1RvdWNoTW92ZShlKXtcclxuXHRcdFx0XHRpZiAodGhpcy5sb2NrU2NyZWVuU3RhdHVzKSByZXR1cm5cclxuXHRcdFx0XHRsZXQgeyBvbGRUb3VjZXMsb2xkVmFsdWUsdG91Y2hUeXBlIH0gPSB0aGlzXHJcblx0XHRcdFx0bGV0IG5ld1RvdWNlcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHRpZighdGhpcy50b3VjaFR5cGUpe1xyXG5cdFx0XHRcdFx0Ly/ov5vluqbmjqfliLZcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMoIG5ld1RvdWNlcy5wYWdlWCAtIG9sZFRvdWNlcy5wYWdlWCApID4gMjAgPyAnY3VycmVudCcgOiBudWxsXHJcblx0XHRcdFx0XHRpZih0aGlzLmZ1bGxTY3JlZW4gJiYgdGhpcy5wbGF0Zm9ybT09J2lvcycpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IE1hdGguYWJzKCBuZXdUb3VjZXMucGFnZVkgLSBvbGRUb3VjZXMucGFnZVkgKSA+IDIwID8gJ2N1cnJlbnQnIDogbnVsbFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZih0aGlzLnRvdWNoVHlwZT09J2N1cnJlbnQnKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaEN1cnJlbnQgPSAobmV3VG91Y2VzLnBhZ2VYIC0gb2xkVG91Y2VzLnBhZ2VYKS8yNTAqdGhpcy5kdXJhdGlvbioyICsgdGhpcy5vbGRWYWx1ZVt0b3VjaFR5cGVdKjFcclxuXHRcdFx0XHRcdGlmKHRoaXMucGxhdGZvcm09PSdpb3MnJiZ0aGlzLmZ1bGxTY3JlZW4pe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvdWNoQ3VycmVudCA9IChuZXdUb3VjZXMucGFnZVkgLSBvbGRUb3VjZXMucGFnZVkpLzI1MCp0aGlzLmR1cmF0aW9uKjIgKyB0aGlzLm9sZFZhbHVlW3RvdWNoVHlwZV0qMVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoQ3VycmVudCA9IHRoaXMudG91Y2hDdXJyZW50ID4gdGhpcy5kdXJhdGlvbj8gdGhpcy5kdXJhdGlvbiA6IHRoaXMudG91Y2hDdXJyZW50XHJcblx0XHRcdFx0XHR0aGlzLnRvdWNoQ3VycmVudCA9IHRoaXMudG91Y2hDdXJyZW50IDwgMD8gMCA6IHRoaXMudG91Y2hDdXJyZW50XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vnu5PmnZ9cclxuXHRcdFx0dmlkZW9Ub3VjaEVuZChlKXtcclxuXHRcdFx0XHRpZiAodGhpcy5sb2NrU2NyZWVuU3RhdHVzKSByZXR1cm5cclxuXHRcdFx0XHRpZiAodGhpcy50b3VjaFR5cGU9PSdjdXJyZW50Jykge1xyXG5cdFx0XHRcdFx0Q1RYLnNlZWsodGhpcy50b3VjaEN1cnJlbnQpXHJcblx0XHRcdFx0fWVsc2UgaWYoIXRoaXMudG91Y2hUeXBlKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuZGJsQ291bnQgPT0gMSB8fCB0aGlzLmRibENvdW50ID09IDApIHRoaXMuZGJsQ291bnQrK1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZih0aGlzLmRibENvdW50ID09IDEpe1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvL+WNleWHu1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuZGJsQ291bnQgPT0gMSkgdGhpcy5zaG93T3JIaWRlQ29udHJvbHMoKTtcclxuXHRcdFx0XHRcdFx0XHQvL+WPjOWHu1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuZGJsQ291bnQgPT0gMikgdGhpcy5wbGF5T3JQYXVzZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGJsQ291bnQgPSAwXHJcblx0XHRcdFx0XHRcdH0sIDI1MCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gbnVsbFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDnp7vpmaTlt7Llh7rnjrDlvLnluZVcclxuXHRcdFx0cmVtb3ZlRGFubXUoZSl7XHJcblx0XHRcdFx0dGhpcy5saXN0LnNwbGljZShlLmluZGV4LDEpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRmaWx0ZXJzOiB7XHJcblx0XHRcdGZvcm1hdFRpbWUocmVzdWx0KSB7XHJcblx0XHRcdCAgIHZhciBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnK01hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgOiBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApO1xyXG5cdFx0XHQgICB2YXIgbSA9IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpIDogTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpO1xyXG5cdFx0XHQgICB2YXIgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdFx0XHQgICByZXR1cm4gcmVzdWx0ID0gcmVzdWx0ID4gMzYwMCA/IChoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzKSA6IG0gKyBcIjpcIiArIHM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRiZWZvcmVDcmVhdGUoKSB7XHJcblx0XHRcdHZhciBkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRcdFx0ZC5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdFx0XHQnZm9udEZhbWlseSc6IFwiaWNvbmZvbnRcIixcclxuXHRcdFx0XHQnc3JjJzogXCJ1cmwoJ2h0dHBzOi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQxOTE3Nl9tem84cnNqeGk0Yy50dGYnKVwiXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cclxuLmJ0bntcclxuXHR3aWR0aDogNDRweDtoZWlnaHQ6IDQ0cHg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxuLnZpZGVvLXRvcHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGhlaWdodDogNDRweDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCAsIHJnYmEoMCwwLDAsMCkgLCByZ2JhKDAsMCwwLDAuOCkpO1xyXG59XHJcbi52aWRlby1ib3R0b217XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcblx0aGVpZ2h0OiA0NHB4O1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wICwgcmdiYSgwLDAsMCwwLjgpICwgcmdiYSgwLDAsMCwwKSk7XHJcbn1cclxuLnZpZGVvLWJvdHRvbS1mdWxse1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcblx0aGVpZ2h0OiA2NnB4O1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gdG9wICwgcmdiYSgwLDAsMCwwLjgpICwgcmdiYSgwLDAsMCwwKSk7XHJcbn1cclxuLnRvYXN0e1xyXG5cdHBhZGRpbmctbGVmdDogMzBycHg7XHJcblx0cGFkZGluZy1yaWdodDogMzBycHg7XHJcblx0cGFkZGluZy10b3A6IDIwcnB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiAyMHJweDtcclxuXHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG4udmlkZW8tcG9wdXAtaXRlbXtcclxuXHRwYWRkaW5nLXRvcDogMzBycHg7XHJcblx0cGFkZGluZy1ib3R0b206IDMwcnB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXItd2lkdGg6IDFycHg7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuXHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 11);

/***/ }),
/* 11 */
/*!****************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 12 */
/*!****************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-slider.nvue?vue&type=template&id=0ed40c70& */ 13);\n/* harmony import */ var _f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-slider.nvue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./f-slider.nvue?vue&type=style&index=0&lang=css& */ 17).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./f-slider.nvue?vue&type=style&index=0&lang=css& */ 17).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3b40b07d\",\n  false,\n  _f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBEQUFrRDtBQUN0RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMERBQWtEO0FBQzNHOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZi1zbGlkZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWQ0MGM3MCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Ytc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Ytc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9mLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2Ytc2xpZGVyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzYjQwYjA3ZFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy8yMjk3Ny9EZXNrdG9wL+WTlOWTqeWTlOWTqeWKqOeUuy9wbGF0Zm9ybXMvYXBwLXBsdXMvdmlkZW8vZi1zbGlkZXIubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue?vue&type=template&id=0ed40c70& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.nvue?vue&type=template&id=0ed40c70& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_template_id_0ed40c70___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue?vue&type=template&id=0ed40c70& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "slider",
      staticClass: [
        "flex",
        "align-center",
        "justify-center",
        "position-relative"
      ],
      staticStyle: { height: "44px" },
      on: {
        touchmove: _vm.touchMove,
        touchend: _vm.touchEnd,
        touchstart: _vm.touchStart
      }
    },
    [
      _c(
        "div",
        {
          staticClass: ["flex-1", "bg-noactive", "rounded"],
          staticStyle: { height: "3px" }
        },
        [
          _c("div", {
            staticClass: ["bg-main"],
            staticStyle: { height: "3px" },
            style: _vm.activeStyle
          })
        ]
      ),
      _c("div", {
        staticClass: ["rounded-circle", "bg-main-hover", "f-dot"],
        style: _vm.activeDotStyle
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!*****************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.nvue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Ytc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar dom = weex.requireModule('dom');var _default =\n{\n  props: {\n    c: {\n      type: Number,\n      default: 0 },\n\n    d: {\n      type: Number,\n      default: 0 },\n\n    fullScreen: {\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {\n      w: 0, // 总宽度\n      l: 0,\n      activeWidth: 0, // 进度条宽度\n      moveStatus: false,\n\n      ratio: 1 };\n\n  },\n  mounted: function mounted() {var _this = this;\n    var res = uni.getSystemInfoSync();\n    this.ratio = res.screenHeight / res.screenWidth;\n    setTimeout(function () {\n      _this.getSize();\n    }, 100);\n  },\n  computed: {\n    // 进度条宽度变化\n    activeStyle: function activeStyle() {\n      return \"width:\".concat(this.activeWidth, \"px\");\n    },\n    // 当前进度\n    current: function current() {\n      return parseInt(this.activeWidth / this.w * this.d);\n    },\n    activeDotStyle: function activeDotStyle() {\n      return \"left:\".concat(this.activeWidth, \"px\");\n    },\n    r: function r() {\n      return this.fullScreen ? this.ratio : 1;\n    } },\n\n  watch: {\n    c: function c(newValue, oldValue) {\n      if (!this.moveStatus) {\n        this.activeWidth = this.d === 0 ? 0 : this.c / this.d * this.w;\n      }\n    },\n    fullScreen: function fullScreen(newValue, oldValue) {var _this2 = this;\n      setTimeout(function () {\n        _this2.getSize();\n      }, 100);\n    } },\n\n  methods: {\n    // 获取进度条宽高\n    getSize: function getSize() {var _this3 = this;\n      dom.getComponentRect(this.$refs.slider, function (option) {\n        _this3.w = option.size.width * _this3.r;\n        _this3.l = option.size.left;\n        __f__(\"log\", option, \" at platforms/app-plus/video/f-slider.nvue:80\");\n      });\n    },\n    touchStart: function touchStart(e) {\n      if (this.d == 0) return;\n      this.moveStatus = true;\n      var left = e.changedTouches[0].screenX * this.r;\n      this.activeWidth = left - this.l;\n    },\n    touchMove: function touchMove(e) {\n      if (this.d == 0) return;\n      var left = e.changedTouches[0].screenX * this.r;\n      this.activeWidth = left - this.l;\n      this.$emit('update', this.current);\n    },\n    touchEnd: function touchEnd(e) {\n      if (this.d == 0) return;\n      this.moveStatus = false;\n      this.$emit('change', this.current);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGxhdGZvcm1zL2FwcC1wbHVzL3ZpZGVvL2Ytc2xpZGVyLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBWUEsb0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBTEE7O0FBU0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBVEEsRUFEQTs7O0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0EsVUFEQSxFQUNBO0FBQ0EsVUFGQTtBQUdBLG9CQUhBLEVBR0E7QUFDQSx1QkFKQTs7QUFNQSxjQU5BOztBQVFBLEdBeEJBO0FBeUJBLFNBekJBLHFCQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQSxFQUVBLEdBRkE7QUFHQSxHQS9CQTtBQWdDQTtBQUNBO0FBQ0EsZUFGQSx5QkFFQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0EsV0FOQSxxQkFNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLGtCQVRBLDRCQVNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsS0FaQSxlQVlBO0FBQ0E7QUFDQSxLQWRBLEVBaENBOztBQWdEQTtBQUNBLEtBREEsYUFDQSxRQURBLEVBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLGNBTkEsc0JBTUEsUUFOQSxFQU1BLFFBTkEsRUFNQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBVkEsRUFoREE7O0FBNERBO0FBQ0E7QUFDQSxXQUZBLHFCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0FSQTtBQVNBLGNBVEEsc0JBU0EsQ0FUQSxFQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZUEsYUFmQSxxQkFlQSxDQWZBLEVBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEJBO0FBcUJBLFlBckJBLG9CQXFCQSxDQXJCQSxFQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBekJBLEVBNURBLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgcmVmPVwic2xpZGVyXCIgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwidG91Y2hNb3ZlXCIgQHRvdWNoZW5kPVwidG91Y2hFbmRcIiBAdG91Y2hzdGFydD1cInRvdWNoU3RhcnRcIj5cclxuXHRcdDwhLS0g6L+b5bqm5p2hIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4LTEgYmctbm9hY3RpdmUgcm91bmRlZFwiIHN0eWxlPVwiaGVpZ2h0OiAzcHg7XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJiZy1tYWluXCIgc3R5bGU9XCJoZWlnaHQ6IDNweDtcIiA6c3R5bGU9XCJhY3RpdmVTdHlsZVwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8IS0tIOaMh+ekuueCuSAtLT5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBiZy1tYWluLWhvdmVyIGYtZG90XCI6c3R5bGU9XCJhY3RpdmVEb3RTdHlsZVwiPjwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0Y29uc3QgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKVxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRjOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZDp7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVsbFNjcmVlbjp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dzogMCwgLy8g5oC75a695bqmXHJcblx0XHRcdFx0bDowLFxyXG5cdFx0XHRcdGFjdGl2ZVdpZHRoOjAsIC8vIOi/m+W6puadoeWuveW6plxyXG5cdFx0XHRcdG1vdmVTdGF0dXM6ZmFsc2UsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cmF0aW86MSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHRcdFx0dGhpcy5yYXRpbyA9IHJlcy5zY3JlZW5IZWlnaHQgLyByZXMuc2NyZWVuV2lkdGhcclxuXHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdHRoaXMuZ2V0U2l6ZSgpXHJcblx0XHRcdH0sMTAwKVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC8vIOi/m+W6puadoeWuveW6puWPmOWMllxyXG5cdFx0XHRhY3RpdmVTdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYHdpZHRoOiR7dGhpcy5hY3RpdmVXaWR0aH1weGAgXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW9k+WJjei/m+W6plxyXG5cdFx0XHRjdXJyZW50KCl7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCh0aGlzLmFjdGl2ZVdpZHRoL3RoaXMudykgKiB0aGlzLmQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGFjdGl2ZURvdFN0eWxlKCl7XHJcblx0XHRcdFx0cmV0dXJuIGBsZWZ0OiR7dGhpcy5hY3RpdmVXaWR0aH1weGBcclxuXHRcdFx0fSxcclxuXHRcdFx0cigpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmZ1bGxTY3JlZW4gPyB0aGlzLnJhdGlvIDogMVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0YyhuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubW92ZVN0YXR1cykge1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXaWR0aCA9IHRoaXMuZCA9PT0gMCA/IDAgOiAodGhpcy5jL3RoaXMuZCkgKiB0aGlzLndcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bGxTY3JlZW4obmV3VmFsdWUsIG9sZFZhbHVlKXtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHR0aGlzLmdldFNpemUoKVxyXG5cdFx0XHRcdH0sMTAwKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDojrflj5bov5vluqbmnaHlrr3pq5hcclxuXHRcdFx0Z2V0U2l6ZSgpIHtcclxuXHRcdFx0XHRkb20uZ2V0Q29tcG9uZW50UmVjdCh0aGlzLiRyZWZzLnNsaWRlciwgb3B0aW9uID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudyA9IG9wdGlvbi5zaXplLndpZHRoKnRoaXMuclxyXG5cdFx0XHRcdFx0dGhpcy5sID0gb3B0aW9uLnNpemUubGVmdFxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cob3B0aW9uKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaFN0YXJ0KGUpe1xyXG5cdFx0XHRcdGlmICh0aGlzLmQgPT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5tb3ZlU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdGxldCBsZWZ0ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YKnRoaXMuclxyXG5cdFx0XHRcdHRoaXMuYWN0aXZlV2lkdGggPSBsZWZ0IC0gdGhpcy5sXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoTW92ZShlKXtcclxuXHRcdFx0XHRpZiAodGhpcy5kID09IDApIHJldHVyblxyXG5cdFx0XHRcdGxldCBsZWZ0ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YKnRoaXMuclxyXG5cdFx0XHRcdHRoaXMuYWN0aXZlV2lkdGggPSBsZWZ0IC0gdGhpcy5sXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndXBkYXRlJyx0aGlzLmN1cnJlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoRW5kKGUpe1xyXG5cdFx0XHRcdGlmICh0aGlzLmQgPT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5tb3ZlU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLHRoaXMuY3VycmVudClcclxuXHRcdFx0fVxyXG5cdFx0fSxcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5mLWRvdHtcclxuXHR3aWR0aDogMzBycHg7XHJcblx0aGVpZ2h0OiAzMHJweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJnLW5vYWN0aXZle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*************************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slider.nvue?vue&type=style&index=0&lang=css& */ 18);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slider_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-slider.nvue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "f-dot": {
    "width": "30rpx",
    "height": "30rpx",
    "position": "absolute"
  },
  "bg-noactive": {
    "backgroundColor": "rgba(255,255,255,0.5)"
  }
}

/***/ }),
/* 19 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 20 */
/*!***************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-popup.nvue?vue&type=template&id=734c2fcf& */ 21);\n/* harmony import */ var _f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-popup.nvue?vue&type=script&lang=js& */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./f-popup.nvue?vue&type=style&index=0&lang=css& */ 25).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./f-popup.nvue?vue&type=style&index=0&lang=css& */ 25).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"19e45622\",\n  false,\n  _f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlEQUFpRDtBQUNyRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseURBQWlEO0FBQzFHOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZi1wb3B1cC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTczNGMyZmNmJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZi1wb3B1cC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mLXBvcHVwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9mLXBvcHVwLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vZi1wb3B1cC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTllNDU2MjJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzovVXNlcnMvMjI5NzcvRGVza3RvcC/lk5Tlk6nlk5Tlk6nliqjnlLsvcGxhdGZvcm1zL2FwcC1wbHVzL3ZpZGVvL2YtcG9wdXAubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue?vue&type=template&id=734c2fcf& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-popup.nvue?vue&type=template&id=734c2fcf& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_template_id_734c2fcf___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue?vue&type=template&id=734c2fcf& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.status
    ? _c("div", { staticClass: ["f-popup-full"] }, [
        _c("div", {
          ref: "mask",
          staticClass: ["f-popup-full", "f-mask"],
          on: { click: _vm.hide }
        }),
        _c(
          "div",
          { ref: "popup", staticClass: ["f-popup"], style: _vm.style },
          [_vm._t("default")],
          2
        )
      ])
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!****************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-popup.nvue?vue&type=script&lang=js& */ 24);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNhLENBQWdCLGtkQUFHLEVBQUMiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1wb3B1cC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1wb3B1cC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');var _default =\n{\n  props: {\n    width: {\n      type: Number,\n      default: 100 } },\n\n\n  data: function data() {\n    return {\n      status: false };\n\n  },\n  computed: {\n    style: function style() {\n      return \"width: \".concat(this.width, \"px;transform: translateX(\").concat(this.width, \"px);\");\n    } },\n\n  methods: {\n    show: function show() {\n      this.status = true;\n      this.animate({\n        opacity: 1 },\n      this.$refs.mask);\n      this.animate({\n        transform: \"translateX(0px, 0px)\",\n        opacity: 1 },\n      this.$refs.popup);\n    },\n    hide: function hide() {var _this = this;\n      if (this.status) {\n        this.animate({\n          transform: \"translateX(0px, \".concat(this.width, \"px)\"),\n          opacity: 0 },\n        this.$refs.popup);\n        this.animate({\n          opacity: 0 },\n        this.$refs.mask, function () {\n          _this.status = false;\n        });\n      }\n    },\n    animate: function animate(options, el) {var fun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      animation.transition(el, {\n        styles: options,\n        duration: 100, //ms\n        timingFunction: 'ease-in-out',\n        delay: 0 //ms\n      }, function () {\n        if (typeof fun === 'function') {\n          fun();\n        }\n      });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGxhdGZvcm1zL2FwcC1wbHVzL3ZpZGVvL2YtcG9wdXAubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVUEsZ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBREEsRUFEQTs7O0FBT0EsTUFQQSxrQkFPQTtBQUNBO0FBQ0EsbUJBREE7O0FBR0EsR0FYQTtBQVlBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsS0FIQSxFQVpBOztBQWlCQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxxQkFGQTtBQUdBO0FBQ0EseUNBREE7QUFFQSxrQkFGQTtBQUdBLHNCQUhBO0FBSUEsS0FWQTtBQVdBLFFBWEEsa0JBV0E7QUFDQTtBQUNBO0FBQ0EsaUVBREE7QUFFQSxvQkFGQTtBQUdBLHdCQUhBO0FBSUE7QUFDQSxvQkFEQTtBQUVBLHVCQUZBLEVBRUE7QUFDQTtBQUNBLFNBSkE7QUFLQTtBQUNBLEtBdkJBO0FBd0JBLFdBeEJBLG1CQXdCQSxPQXhCQSxFQXdCQSxFQXhCQSxFQXdCQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSxxQkFGQSxFQUVBO0FBQ0EscUNBSEE7QUFJQSxnQkFKQSxDQUlBO0FBSkEsU0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVEE7O0FBV0EsS0FwQ0EsRUFqQkEsRSIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiZi1wb3B1cC1mdWxsXCIgdi1pZj1cInN0YXR1c1wiPlxyXG5cdFx0PGRpdiByZWY9XCJtYXNrXCIgY2xhc3M9XCJmLXBvcHVwLWZ1bGwgZi1tYXNrXCIgQGNsaWNrPVwiaGlkZVwiPjwvZGl2PlxyXG5cdFx0PGRpdiByZWY9XCJwb3B1cFwiIGNsYXNzPVwiZi1wb3B1cFwiIDpzdHlsZT1cInN0eWxlXCI+XHJcblx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRjb25zdCBhbmltYXRpb24gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpO1xuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR3aWR0aDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAxMDBcclxuXHRcdFx0fSxcclxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6ZmFsc2UsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRzdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYHdpZHRoOiAke3RoaXMud2lkdGh9cHg7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7dGhpcy53aWR0aH1weCk7YCBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRzaG93KCl7XHJcblx0XHRcdFx0dGhpcy5zdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy5hbmltYXRlKHtcclxuXHRcdFx0XHRcdG9wYWNpdHk6MVxyXG5cdFx0XHRcdH0sdGhpcy4kcmVmcy5tYXNrKVxyXG5cdFx0XHRcdHRoaXMuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDBweCwgMHB4KWAsXHJcblx0XHRcdFx0XHRvcGFjaXR5OjFcclxuXHRcdFx0XHR9LHRoaXMuJHJlZnMucG9wdXApXHJcblx0XHRcdH0sXHJcblx0XHRcdGhpZGUoKXtcclxuXHRcdFx0XHRpZiAodGhpcy5zdGF0dXMpIHtcclxuXHRcdFx0XHRcdHRoaXMuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMHB4LCAke3RoaXMud2lkdGh9cHgpYCxcclxuXHRcdFx0XHRcdFx0b3BhY2l0eTowXHJcblx0XHRcdFx0XHR9LHRoaXMuJHJlZnMucG9wdXApXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGUoe1xyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OjBcclxuXHRcdFx0XHRcdH0sdGhpcy4kcmVmcy5tYXNrLCgpPT57XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbmltYXRlKG9wdGlvbnMsZWwsZnVuID0gZmFsc2Upe1xyXG5cdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLCB7XHJcblx0XHRcdFx0XHRzdHlsZXM6IG9wdGlvbnMsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMTAwLCAvL21zXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4tb3V0JyxcclxuXHRcdFx0XHRcdGRlbGF5OiAwIC8vbXNcclxuXHRcdFx0XHRcdH0sICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBmdW4gPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdFx0XHRmdW4oKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9LFxyXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxyXG4uZi1wb3B1cC1mdWxse1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuLmYtbWFza3tcclxuXHRvcGFjaXR5OiAwO1xyXG59XG4uZi1wb3B1cHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuXHRvcGFjaXR5OiAwO1xyXG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!************************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-popup.nvue?vue&type=style&index=0&lang=css& */ 26);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_popup_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-popup.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "f-popup-full": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "f-mask": {
    "opacity": 0
  },
  "f-popup": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "flexDirection": "column",
    "justifyContent": "center",
    "backgroundColor": "rgba(0,0,0,0.8)",
    "opacity": 0
  }
}

/***/ }),
/* 27 */
/*!***************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu.nvue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-danmu.nvue?vue&type=template&id=75b0d7a2& */ 28);\n/* harmony import */ var _f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-danmu.nvue?vue&type=script&lang=js& */ 30);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1c48fdf5\",\n  false,\n  _f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLWRhbm11Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzViMGQ3YTImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2YtZGFubXUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxYzQ4ZmRmNVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy8yMjk3Ny9EZXNrdG9wL+WTlOWTqeWTlOWTqeWKqOeUuy9wbGF0Zm9ybXMvYXBwLXBsdXMvdmlkZW8vZi1kYW5tdS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu.nvue?vue&type=template&id=75b0d7a2& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-danmu.nvue?vue&type=template&id=75b0d7a2& */ 29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_template_id_75b0d7a2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 29 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu.nvue?vue&type=template&id=75b0d7a2& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: ["position-absolute", "left-0", "right-0"],
      style: _vm.divStyle
    },
    _vm._l(_vm.list, function(item, index) {
      return _vm.current >= item.time && Math.abs(_vm.current - item.time) <= 40
        ? _c("f-danmu-item", {
            key: index,
            attrs: {
              width: _vm.width,
              item: item,
              index: index,
              fontSize: _vm.fullScreen ? 10 : 15
            },
            on: {
              end: function($event) {
                _vm.$emit("end", $event)
              }
            }
          })
        : _vm._e()
    }),
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 30 */
/*!****************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-danmu.nvue?vue&type=script&lang=js& */ 31);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNhLENBQWdCLGtkQUFHLEVBQUMiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\nvar _fDanmuItem = _interopRequireDefault(__webpack_require__(/*! ./f-danmu-item.nvue */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\nvar _default2 = { components: { fDanmuItem: _fDanmuItem.default }, props: { list: { type: Array,\n      default: function _default() {return [];} },\n\n    fullScreen: {\n      type: Boolean,\n      default: false },\n\n    top: {\n      type: [Number, String],\n      default: \"44\" },\n\n    bottom: {\n      type: [Number, String],\n      default: \"66\" },\n\n    current: {\n      type: [Number, String],\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      // 屏幕宽高\n      windowWidth: 0,\n      windowHeight: 0 };\n\n  },\n  mounted: function mounted() {\n    var res = uni.getSystemInfoSync();\n    this.windowWidth = res.screenWidth;\n    this.windowHeight = res.screenHeight;\n  },\n  computed: {\n    width: function width() {\n      return this.fullScreen ? this.windowHeight : this.windowWidth;\n    },\n    divStyle: function divStyle() {\n      return \"top: \".concat(this.top, \"px;bottom: \").concat(this.bottom, \"px;\");\n    } },\n\n  methods: {} };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGxhdGZvcm1zL2FwcC1wbHVzL3ZpZGVvL2YtZGFubXUubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVFBLDZGOzs7Ozs7O2dCQUNBLEVBQ0EsY0FDQSwrQkFEQSxFQURBLEVBSUEsU0FDQSxRQUNBLFdBREE7QUFFQSwrQ0FGQSxFQURBOztBQUtBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQUxBOztBQVNBO0FBQ0EsNEJBREE7QUFFQSxtQkFGQSxFQVRBOztBQWFBO0FBQ0EsNEJBREE7QUFFQSxtQkFGQSxFQWJBOztBQWlCQTtBQUNBLDRCQURBO0FBRUEsZ0JBRkEsRUFqQkEsRUFKQTs7O0FBMEJBLE1BMUJBLGtCQTBCQTtBQUNBO0FBQ0E7QUFDQSxvQkFGQTtBQUdBLHFCQUhBOztBQUtBLEdBaENBO0FBaUNBLFNBakNBLHFCQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBckNBO0FBc0NBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFlBSkEsc0JBSUE7QUFDQTtBQUNBLEtBTkEsRUF0Q0E7O0FBOENBLGFBOUNBLEUiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMFwiIDpzdHlsZT1cImRpdlN0eWxlXCI+XHJcblx0XHQ8Zi1kYW5tdS1pdGVtIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGxpc3RcIiA6a2V5PVwiaW5kZXhcIiA6d2lkdGg9XCJ3aWR0aFwiXHJcblx0XHQ6aXRlbT1cIml0ZW1cIiA6aW5kZXg9XCJpbmRleFwiIHYtaWY9XCJjdXJyZW50ID49IGl0ZW0udGltZSAmJiBNYXRoLmFicyhjdXJyZW50IC0gaXRlbS50aW1lKSA8PSA0MFwiIDpmb250U2l6ZT1cImZ1bGxTY3JlZW4gPyAxMCA6IDE1XCIgQGVuZD1cIiRlbWl0KCdlbmQnLCRldmVudClcIj48L2YtZGFubXUtaXRlbT5cblx0PC9kaXY+XG48L3RlbXBsYXRlPiBcblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZkRhbm11SXRlbSBmcm9tICcuL2YtZGFubXUtaXRlbS5udnVlJztcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRmRGFubXVJdGVtXHJcblx0XHR9LFxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGxpc3Q6e1xyXG5cdFx0XHRcdHR5cGU6QXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdDooKT0+W11cclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVsbFNjcmVlbjp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9wOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlcixTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiNDRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRib3R0b206IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogXCI2NlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnQ6e1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC8vIOWxj+W5leWuvemrmFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDowLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSByZXMuc2NyZWVuV2lkdGhcclxuXHRcdFx0dGhpcy53aW5kb3dIZWlnaHQgPSByZXMuc2NyZWVuSGVpZ2h0XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0d2lkdGgoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsU2NyZWVuID8gdGhpcy53aW5kb3dIZWlnaHQgOiB0aGlzLndpbmRvd1dpZHRoXHJcblx0XHRcdH0sXHJcblx0XHRcdGRpdlN0eWxlKCkge1xyXG5cdFx0XHRcdHJldHVybiBgdG9wOiAke3RoaXMudG9wfXB4O2JvdHRvbTogJHt0aGlzLmJvdHRvbX1weDtgIFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdFxyXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!********************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu-item.nvue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-danmu-item.nvue?vue&type=template&id=b16887ac& */ 33);\n/* harmony import */ var _f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-danmu-item.nvue?vue&type=script&lang=js& */ 35);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"7504dc92\",\n  false,\n  _f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu-item.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxpR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLWRhbm11LWl0ZW0ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTY4ODdhYyZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2YtZGFubXUtaXRlbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mLWRhbm11LWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI3NTA0ZGM5MlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOi9Vc2Vycy8yMjk3Ny9EZXNrdG9wL+WTlOWTqeWTlOWTqeWKqOeUuy9wbGF0Zm9ybXMvYXBwLXBsdXMvdmlkZW8vZi1kYW5tdS1pdGVtLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu-item.nvue?vue&type=template&id=b16887ac& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-danmu-item.nvue?vue&type=template&id=b16887ac& */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_template_id_b16887ac___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu-item.nvue?vue&type=template&id=b16887ac& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "move",
      staticClass: ["position-absolute", "rounded", "p-1"],
      staticStyle: { backgroundColor: "rgba(0,0,0,0.15)" },
      style:
        "left: " +
        _vm.width +
        "px;top: " +
        Math.random() * _vm.maxheight +
        "px;"
    },
    [
      _c(
        "u-text",
        {
          staticClass: ["text-white"],
          style: "font-size: " + _vm.fontSize + "px;"
        },
        [_vm._v(_vm._s(_vm.item.title))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 35 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu-item.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-danmu-item.nvue?vue&type=script&lang=js& */ 36);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_danmu_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJhLENBQWdCLHVkQUFHLEVBQUMiLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1kYW5tdS1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLWRhbm11LWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/platforms/app-plus/video/f-danmu-item.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');\nvar timer = null;var _default =\n{\n  props: {\n    fontSize: {\n      type: [Number, String],\n      default: 15 },\n\n    maxheight: {\n      type: [Number, String],\n      default: 100 },\n\n    width: {\n      type: [Number, String],\n      default: 0 },\n\n    item: Object,\n    index: Number },\n\n  mounted: function mounted() {var _this = this;\n    timer = setTimeout(function () {\n      _this.animate(_this.$refs.move, function () {\n        _this.$emit('end', {\n          item: _this.item,\n          index: _this.index });\n\n      });\n    }, 300);\n  },\n  beforeDestroy: function beforeDestroy() {\n    if (timer) {\n      clearTimeout(timer);\n    }\n    this.$emit('end', {\n      item: this.item,\n      index: this.index });\n\n  },\n  methods: {\n    animate: function animate(el) {var _arguments = arguments,_this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var fn;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:fn = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : false;\n                animation.transition(el, {\n                  styles: {\n                    transform: \"translate( -\".concat(_this2.width * 2, \"px, 0px)\") },\n\n                  duration: 20000, //ms\n                  timingFunction: 'ease',\n                  delay: 0 //ms\n                }, function () {\n                  if (typeof fn === 'function') {\n                    fn();\n                  }\n                });case 2:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGxhdGZvcm1zL2FwcC1wbHVzL3ZpZGVvL2YtZGFubXUtaXRlbS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBLGlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQSxFQUxBOztBQVNBO0FBQ0EsNEJBREE7QUFFQSxnQkFGQSxFQVRBOztBQWFBLGdCQWJBO0FBY0EsaUJBZEEsRUFEQTs7QUFpQkEsU0FqQkEscUJBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSw0QkFGQTs7QUFJQSxPQUxBO0FBTUEsS0FQQSxFQU9BLEdBUEE7QUFRQSxHQTFCQTtBQTJCQSxlQTNCQSwyQkEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsdUJBRkE7O0FBSUEsR0FuQ0E7QUFvQ0E7QUFDQSxXQURBLG1CQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFEQSxFQURBOztBQUlBLGlDQUpBLEVBSUE7QUFDQSx3Q0FMQTtBQU1BLDBCQU5BLENBTUE7QUFOQSxtQkFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQVhBLEVBREE7O0FBY0EsS0FmQSxFQXBDQSxFIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZCBwLTFcIiByZWY9XCJtb3ZlXCIgOnN0eWxlPVwiJ2xlZnQ6ICcrd2lkdGgrJ3B4O3RvcDogJytNYXRoLnJhbmRvbSgpKm1heGhlaWdodCsncHg7J1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjE1KTtcIj5cclxuXHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIDpzdHlsZT1cIidmb250LXNpemU6ICcrZm9udFNpemUrJ3B4OydcIj57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0Y29uc3QgYW5pbWF0aW9uID0gd2VleC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKTtcclxuXHRsZXQgdGltZXIgPSBudWxsXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xyXG5cdFx0XHRmb250U2l6ZTp7XHJcblx0XHRcdFx0dHlwZTogW051bWJlcixTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDE1XHJcblx0XHRcdH0sXHJcblx0XHRcdG1heGhlaWdodDp7XHJcblx0XHRcdFx0dHlwZTogW051bWJlcixTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDEwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3aWR0aDoge1xyXG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGl0ZW06T2JqZWN0LFxyXG5cdFx0XHRpbmRleDpOdW1iZXJcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHR0aGlzLmFuaW1hdGUodGhpcy4kcmVmcy5tb3ZlLCgpPT57XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdlbmQnLHtcclxuXHRcdFx0XHRcdFx0aXRlbTp0aGlzLml0ZW0sXHJcblx0XHRcdFx0XHRcdGluZGV4OnRoaXMuaW5kZXhcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSwzMDApXHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdFx0aWYgKHRpbWVyKSB7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuJGVtaXQoJ2VuZCcse1xyXG5cdFx0XHRcdGl0ZW06dGhpcy5pdGVtLFxyXG5cdFx0XHRcdGluZGV4OnRoaXMuaW5kZXhcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFzeW5jIGFuaW1hdGUoZWwsZm4gPSBmYWxzZSl7XHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24oZWwsIHtcclxuXHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGUoIC0ke3RoaXMud2lkdGgqMn1weCwgMHB4KWAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAwLCAvL21zXHJcblx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHRcdFx0ZGVsYXk6IDAgLy9tc1xyXG5cdFx0XHRcdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm4oKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 38);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/22977/Desktop/哔哩哔哩动画/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "width": "44",
    "height": "44",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "video-top": {
    "position": "absolute",
    "top": 0,
    "height": "44",
    "left": 0,
    "right": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0) , rgba(0,0,0,0.8))"
  },
  "video-bottom": {
    "flexDirection": "row",
    "alignItems": "center",
    "position": "absolute",
    "bottom": 0,
    "height": "44",
    "left": 0,
    "right": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0.8) , rgba(0,0,0,0))"
  },
  "video-bottom-full": {
    "position": "absolute",
    "bottom": 0,
    "height": "66",
    "left": 0,
    "right": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0.8) , rgba(0,0,0,0))"
  },
  "toast": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx",
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx",
    "borderRadius": "8rpx",
    "backgroundColor": "rgba(0,0,0,0.5)"
  },
  "video-popup-item": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "rgba(255,255,255,0.6)",
    "borderRadius": "8rpx",
    "marginBottom": "20rpx"
  }
}

/***/ })
/******/ ]);