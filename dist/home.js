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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/Header.js */ \"./src/templates/Header.js\");\n/* harmony import */ var _templates_Footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/Footer.js */ \"./src/templates/Footer.js\");\n/* harmony import */ var _src_utils_getCurrentUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/utils/getCurrentUrl.js */ \"./src/utils/getCurrentUrl.js\");\n/* harmony import */ var _src_utils_ResolvesRoutes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils/ResolvesRoutes.js */ \"./src/utils/ResolvesRoutes.js\");\n/* harmony import */ var _utils_SolveTemplates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/SolveTemplates.js */ \"./src/utils/SolveTemplates.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_payment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/payment.css */ \"./src/styles/payment.css\");\n/* harmony import */ var _styles_payment_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_payment_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_details_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/details.css */ \"./src/styles/details.css\");\n/* harmony import */ var _styles_details_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_details_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_products_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/products.css */ \"./src/styles/products.css\");\n/* harmony import */ var _styles_products_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_products_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_mainHome_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/mainHome.css */ \"./src/styles/mainHome.css\");\n/* harmony import */ var _styles_mainHome_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_mainHome_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/animations.css */ \"./src/styles/animations.css\");\n/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_animations_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_successfull_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/successfull.css */ \"./src/styles/successfull.css\");\n/* harmony import */ var _styles_successfull_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_successfull_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_mediasQueries_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/mediasQueries.css */ \"./src/styles/mediasQueries.css\");\n/* harmony import */ var _styles_mediasQueries_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_mediasQueries_css__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst router = async () => {\n\nconst header = document.getElementById('header')\nconst main = document.getElementById('main')\nconst footer = document.getElementById('footer')\n\nheader.innerHTML = await Object(_templates_Header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\nfooter.innerHTML = await Object(_templates_Footer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\nconst hash = Object(_src_utils_getCurrentUrl_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\nlet route = await Object(_src_utils_ResolvesRoutes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(hash)\ndebugger\n\nlet render = await Object(_utils_SolveTemplates_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(route)\n// let render = Routes[route] ? Routes[route] : Error404;\nmain.innerHTML = await render.template()\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/pages/Details.js":
/*!******************************!*\
  !*** ./src/pages/Details.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getId.js */ \"./src/utils/getId.js\");\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getData.js */ \"./src/utils/getData.js\");\n\n\n\nconst Details = async () => {\n  debugger\n  const id = Object(_utils_getId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const photo = await Object(_utils_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  let description = photo.url.split('/')[4].split('-');\n  description.pop()\n  const view = `\n  <section class=\"product\">\n  <div class=\"product__details\">\n    <div class=\"product__details--img\">\n      <figure>\n        <img src=\"${photo.src.original}\" alt=\"${photo.photographer}\">\n      </figure>\n    </div>\n    <div class=\"product__details--text\">\n      <span class=\"product--name\">\n      Photographer: ${photo.photographer}\n      </span>\n      <span class=\"product--clasification\">\n        Medidas: ${photo.height} x ${photo.width} pixels\n      </span>\n      <div class=\"product--description\">\n        Descripcion:<br>\n        <ul>\n        ${description.join(' ')}\n        </ul>\n      </div>\n      <span class=\"product--button\">\n        <a href=\"/#payment/${photo.id}\">\n          <button>La Quiero</button>\n        </a>\n      </span>\n    </div>\n  </div>\n</section>\n  `;\n  return view;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\n\n//# sourceURL=webpack:///./src/pages/Details.js?");

/***/ }),

/***/ "./src/pages/Main.js":
/*!***************************!*\
  !*** ./src/pages/Main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst sections = [\n  {\n    title: 'Blog',\n    href:  'blog.html',\n    img:   '../src/assets/images/2.jpg',\n    alt: 'blog',\n  },\n  {\n    title: 'Productos',\n    href:  '/#/products',\n    img:   '../src/assets/images/5.jpg',\n    alt: 'productos',\n  },\n  {\n    title: 'Comunidad',\n    href:  'comunidad.html',\n    img:   '../src/assets/images/7.jpg',\n    alt: 'comunidad',\n  },\n]\n\nconst partners = [\n  {\n    href: 'index.html',\n    image: '../src/assets/images/partners-1.svg',\n    alt: 'partner-1',\n  },\n  {\n    href: 'index.html',\n    image: '../src/assets/images/partners-2.svg',\n    alt: 'partner-1',\n  },\n  {\n    href: 'index.html',\n    image: '../src/assets/images/partners-3.svg',\n    alt: 'partner-1',\n  },\n  {\n    href: 'index.html',\n    image: '../src/assets/images/partners-4.svg',\n    alt: 'partner-1',\n  },\n  {\n    href: 'index.html',\n    image: '../src/assets/images/partners-5.svg',\n    alt: 'partner-1',\n  },\n  {\n    href: 'index.html',\n    image: '../src/assets/images/partners-6.svg',\n    alt: 'partner-1',\n  },\n]\n\n\nconst Main = () => {\n  const view = `\n  <section class=\"main--types\">\n  <!-- products cards -->\n    <section class=\"container__products \">\n    ${sections.map( section => `\n    <div class=\"section fadeIn-left\">\n      <a href=\"${section.href}\">\n        <figure class=\"section__img\">\n          <img src=\"${section.img}\" alt=\"${section.alt}\">\n        </figure>\n        <span class=\"section__overlay\">\n          <p>${section.title}</p>\n        </span>\n      </a>\n    </div>\n    `).join(\"\")}\n    </section>\n    <!-- final products -->\n        <!-- Inicio partners -->\n    <section class=\"container__partners fadeIn-right\">\n    ${partners.map( partner => `\n      <article class=\"partners\">\n        <a href=\"${partner.href}\">\n          <figure>\n            <img src=\"${partner.image}\" alt=\"${partner.alt}\"\n          </figure>\n        </a>\n      </article>\n        `).join(\"\")}\n    </section>\n  </section>\n<!-- partners fin -->\n`;\n  return view;\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./src/pages/Main.js?");

/***/ }),

/***/ "./src/pages/Payment.js":
/*!******************************!*\
  !*** ./src/pages/Payment.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getId.js */ \"./src/utils/getId.js\");\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getData.js */ \"./src/utils/getData.js\");\n\n\n\nconst Payment = async () => {\n  const id = Object(_utils_getId_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const photo = await Object(_utils_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\n  let description = photo.url.split('/')[4].split('-');\n  description.pop()\n  const view = `\n  <section class=\"product\">\n  <div class=\"product__details\">\n    <div class=\"product__details--img\">\n      <figure>\n        <img src=\"${photo.src.original}\" alt=\"${photo.photographer}\">\n      </figure>\n    </div>\n    <div class=\"product__details--text\">\n      <label>\n      Nombre:<br>\n      <input type=\"text\"   />\n      </label>\n      <label>\n      Correo:<br>\n      <input type=\"email\"  />\n      </label>\n      <label>\n      Telefono:<br>\n      <input type=\"phone\"  />\n      </label>\n      <span class=\"product--button\">\n        <a href=\"/#successfull\">\n          <button>\n          Pagar\n          </button>\n        </a>\n      </span>\n    </div>\n  </div>\n</section>\n  `;\n  return view;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Payment);\n\n//# sourceURL=webpack:///./src/pages/Payment.js?");

/***/ }),

/***/ "./src/pages/Products.js":
/*!*******************************!*\
  !*** ./src/pages/Products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData.js */ \"./src/utils/getData.js\");\n\n\nconst Products = async () => {\n  const plants = await Object(_utils_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const view = `\n  <main class=\"container--main\">\n    <div class=\"container--filter fadeIn\">\n      <div class=\"filter\">\n        <div class=\"filter--sections\">\n          <a href=\"../index.html\">\n            <h3>\n              All / Plants\n            </h3>  \n          </a>\n        </div>\n        <div class=\"filter--search\">\n          <a href=\"/public/detailProduct.html\">\n            <h3>\n              Filter / Search \n            </h3>\n          </a>\n        </div>\n      </div>\n    </div>\n    \n    <!-- seccion de texto -->\n    <section class=\"header--text fadeInLeft\">\n      <h1>\n        Aprendamos un poco más de las nuestras plantas.<br>\n        En cada producto encontraras una pequeña descripción de cada una.<br>\n      </h1>\n    </section>\n    \n    <!-- card clasificacion -->\n    \n    <section class=\"main--products\">\n    ${plants.photos.map((plant) => `\n    <a href=\"/#:id/${plant.id}\" class=\"products--cards\"/>\n      <figure class=\"product__image\">\n        <img src=\"${plant.src.original}\" alt=\"${plant.photographer}\" />\n      </figure>\n      <span class=\"product__image--info__text\">\n        <span class=\"text--name\">${plant.photographer}</span>\n        <span class=\"text--price\">$ 13.00</span>\n        <span class=\"text--button\">\n          <button>Detalles</button>\n        </span>\n      </span>\n    </a>\n    <!-- final cards -->\n    `)\n      .join(\"\")}\n    </section>\n    </main>`;\n  return view;\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\n\n//# sourceURL=webpack:///./src/pages/Products.js?");

/***/ }),

/***/ "./src/styles/animations.css":
/*!***********************************!*\
  !*** ./src/styles/animations.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/animations.css?");

/***/ }),

/***/ "./src/styles/details.css":
/*!********************************!*\
  !*** ./src/styles/details.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/details.css?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleParseError: Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?>\\n| <!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\n| <svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\n    at handleParseError (/mnt/d/xampp/htdocs/Suculentagram/node_modules/webpack/lib/NormalModule.js:469:19)\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/webpack/lib/NormalModule.js:503:5\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/webpack/lib/NormalModule.js:358:12\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/loader-runner/lib/LoaderRunner.js:373:3\\n    at iterateNormalLoaders (/mnt/d/xampp/htdocs/Suculentagram/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\\n    at Array.<anonymous> (/mnt/d/xampp/htdocs/Suculentagram/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/mnt/d/xampp/htdocs/Suculentagram/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/graceful-fs/graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)\");\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ }),

/***/ "./src/styles/mainHome.css":
/*!*********************************!*\
  !*** ./src/styles/mainHome.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/mainHome.css?");

/***/ }),

/***/ "./src/styles/mediasQueries.css":
/*!**************************************!*\
  !*** ./src/styles/mediasQueries.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleParseError: Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?>\\n| <!-- Generator: Adobe Illustrator 24.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\n| <svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\n    at handleParseError (/mnt/d/xampp/htdocs/Suculentagram/node_modules/webpack/lib/NormalModule.js:469:19)\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/webpack/lib/NormalModule.js:503:5\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/webpack/lib/NormalModule.js:358:12\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/loader-runner/lib/LoaderRunner.js:373:3\\n    at iterateNormalLoaders (/mnt/d/xampp/htdocs/Suculentagram/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\\n    at Array.<anonymous> (/mnt/d/xampp/htdocs/Suculentagram/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/mnt/d/xampp/htdocs/Suculentagram/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /mnt/d/xampp/htdocs/Suculentagram/node_modules/graceful-fs/graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)\");\n\n//# sourceURL=webpack:///./src/styles/mediasQueries.css?");

/***/ }),

/***/ "./src/styles/payment.css":
/*!********************************!*\
  !*** ./src/styles/payment.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/payment.css?");

/***/ }),

/***/ "./src/styles/products.css":
/*!*********************************!*\
  !*** ./src/styles/products.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/products.css?");

/***/ }),

/***/ "./src/styles/successfull.css":
/*!************************************!*\
  !*** ./src/styles/successfull.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/successfull.css?");

/***/ }),

/***/ "./src/templates/Footer.js":
/*!*********************************!*\
  !*** ./src/templates/Footer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n  \n\nconst Footer = () => {\n  const view = `\n    <footer class=\"footer fadeInDown\">\n    <div>\n      <h4>\n        Powered by Carlos L. Zavarce\n      </h4>\n    </div>\n    <div>\n      <a href=\"https://github.com/KrlosAren\">\n        <img src=\"https://img.icons8.com/material-rounded/24/f1eee9/github.png\" alt=\"GitHub Carlos Lopez Zavarce\">\n      </a>\n    </div>\n  </footer>\n  `;\n  return view;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/templates/Footer.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\n\nconst data = {\n\n  logo: [\n    {\n      href: '/',\n      title: '../src/assets/images/Logo2.svg',\n    }\n  ],\n  menu: [\n    {\n      href: 'Faqs.html',\n      title: 'FAQs'\n    },\n    {\n      href: 'Blog',\n      title: 'Blog'\n    },\n    {\n      href: 'tips.html',\n      title: 'Tips'\n    },\n  ]\n}\n\nconst Header = () => {\n  const view = `\n  <!-- menu de navegacion  -->\n    <nav class=\"menu fadeIn-top\">\n      <div class=\"menu--logo\">\n      ${data.logo.map(logoMenu => `\n          <a href=${logoMenu.href}>\n          <img src=${logoMenu.title}  />\n          </a>\n          `).join(\"\")}\n      </div>\n      <div class=\"menu--links\">\n        <ul class=\"links--list\">\n        ${data.menu.map(link => `\n          <li>\n            <a href=${link.href}>${link.title}</a>\n          </li>\n          `).join(\"\")}\n        </ul>\n      </div>\n    </nav>\n<!-- seccion de texto -->\n<section class=\"header--text header--background opacity-back\">\n  <h1>\n    Crear un jardín de Suculentas requiere atención y cuidado.<br>\n    Aquí encontraras las diferentes clasificaciones de estas plantas, sus propiedades y cuidado.<br>\n    Anímate a comenzar tu jardín de Suculentas con Nosotros!<br>\n  </h1>\n</section>\n  `;\n  return view;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/templates/Header.js?");

/***/ }),

/***/ "./src/templates/Successfull.js":
/*!**************************************!*\
  !*** ./src/templates/Successfull.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst Successful = () => {\n  const view = `\n  <div class=\"successfull--main\">\n    <img src=\"../src/assets/images/9.jpg\" alt=\"\">\n    <p>\n      Su Compra ha sido Exitosa <a href=\"/\">Regresar</a>\n    </p>\n  </div>\n  `;\n  return view;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Successful);\n\n//# sourceURL=webpack:///./src/templates/Successfull.js?");

/***/ }),

/***/ "./src/utils/ResolvesRoutes.js":
/*!*************************************!*\
  !*** ./src/utils/ResolvesRoutes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routes.js */ \"./src/utils/Routes.js\");\n\n\nconst resolveRoutes = (currentUrlSegs) => {\n  debugger\n  const id = new RegExp(':id/[0-9]{1,}')\n  const payment = new RegExp('payment/[0-9]{1,}')\n\n  let currentUrl = id.test(currentUrlSegs) ? '/:id'.split(' ') :\n                   payment.test(currentUrlSegs) ? '/payment'.split(' ') : currentUrlSegs.split(' ')\n\n  // id.test(currentUrlSegs) ? currentUrl = '/:id'.split(' ') : currentUrl = currentUrlSegs.split(' ')\n  // payment.test(currentUrlSegs) ? currentUrl = '/payment'.split(' ') : currentUrl = currentUrlSegs.split(' ')\n\n  _Routes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((route) => {\n    const availableRoute = route.path.split(' ')\n    if(availableRoute.length !== currentUrl.length){\n      return false\n    }\n\n    return availableRoute.every( (routePath, i) => {\n      routePath === currentUrl[i]\n    })\n  })\n\n  return currentUrl\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolveRoutes);\n\n//# sourceURL=webpack:///./src/utils/ResolvesRoutes.js?");

/***/ }),

/***/ "./src/utils/Routes.js":
/*!*****************************!*\
  !*** ./src/utils/Routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Main.js */ \"./src/pages/Main.js\");\n/* harmony import */ var _pages_Products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Products.js */ \"./src/pages/Products.js\");\n/* harmony import */ var _pages_Details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Details.js */ \"./src/pages/Details.js\");\n/* harmony import */ var _pages_Payment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Payment.js */ \"./src/pages/Payment.js\");\n/* harmony import */ var _templates_Successfull_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Successfull.js */ \"./src/templates/Successfull.js\");\n\n\n\n\n\n\ndebugger\nconst routes = [\n  {\n    path: '/',\n    template: _pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  {\n    path: '/products',\n    template: _pages_Products_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  {\n    path: '/details',\n    template: _pages_Details_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  {\n    path: '/payment',\n    template: _pages_Payment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  {\n    path: '/:id',\n    template: _pages_Details_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  {\n    path: '/successfull',\n    template: _templates_Successfull_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/utils/Routes.js?");

/***/ }),

/***/ "./src/utils/SolveTemplates.js":
/*!*************************************!*\
  !*** ./src/utils/SolveTemplates.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_Routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Routes.js */ \"./src/utils/Routes.js\");\n\n\nconst solveTemplate = (route) => {\n  debugger\n  const template = _utils_Routes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find( template => template.path ===  route[0])\n\n  return  template || null\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (solveTemplate);\n\n//# sourceURL=webpack:///./src/utils/SolveTemplates.js?");

/***/ }),

/***/ "./src/utils/getCurrentUrl.js":
/*!************************************!*\
  !*** ./src/utils/getCurrentUrl.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getCurrentUrl = () => {\n  debugger\n    const currentUrl = window.location.hash.split('#')\n    const pathSegs = currentUrl.length > 1 ? currentUrl.slice(1) : \"/\";\n    return `${pathSegs}`;\n  }\n  \n  /* harmony default export */ __webpack_exports__[\"default\"] = (getCurrentUrl);\n\n//# sourceURL=webpack:///./src/utils/getCurrentUrl.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst API = `https://api.pexels.com/v1/`;\nconst URL_ = `search?query=succulents&per_page=8`\nconst API_KEY = '563492ad6f9170000100000153371c4354a14827a6bb089ac5454cd3';\n\n\nconst fetchData = async (id) => {\n  const URL = id ? `${API}/photos/${id}` : `${API}/${URL_}`\n  const response = await fetch(URL, {\n    headers: {\n      'authorization': API_KEY,\n    },\n  });\n  try{\n    const data = await response.json()\n    return data\n  }catch(error){\n    console.error('Fetch Error', error)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchData);\n\n//# sourceURL=webpack:///./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getId.js":
/*!****************************!*\
  !*** ./src/utils/getId.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst getId = () => {\n  const id = window.location.hash.split('/').slice(1)\n  return id[0]\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getId);\n\n//# sourceURL=webpack:///./src/utils/getId.js?");

/***/ })

/******/ });