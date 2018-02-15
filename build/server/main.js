require("source-map-support").install();
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/RepOne-394244b169341043dd679bdd0e66a7aa.png";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/R1 Coach - Live-492f2e49b83cbc2be54721a083bedf1c.png";

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_lib_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__template__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(12);












const clientAssets = __webpack_require__(80); // eslint-disable-line import/no-dynamic-require
const port = parseInt("3000", 10);
const app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(__WEBPACK_IMPORTED_MODULE_1_compression___default.a());

// Setup the public directory so that we can server static assets.
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(), "src/public")));

// Setup server side routing.
app.get('*', (request, response) => {
  const history = __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory___default.a(request.originalUrl);

  __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match___default.a({ routes: __WEBPACK_IMPORTED_MODULE_9__routes__["a" /* default */], history }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      // When a React Router route is matched then we render
      // the components and assets into the template.
      response.status(200).send(__WEBPACK_IMPORTED_MODULE_8__template__["a" /* default */]({
        root: __WEBPACK_IMPORTED_MODULE_4_react_dom_server__["renderToString"](__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext___default.a, renderProps)),
        manifestJSBundle: clientAssets['manifest.js'],
        mainJSBundle: clientAssets['main.js'],
        vendorJSBundle: clientAssets['vendor.js'],
        mainCSSBundle: clientAssets['main.css']
      }));
    } else {
      response.status(404).send('Not found');
    }
  });
});

app.listen(port, () => {
  console.log(`✅  server started on port: ${port}`); // eslint-disable-line no-console
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable prefer-template, max-len */

const getDeferScript = src => src ? `<script defer src="${src}"></script>` : '';

/* harmony default export */ __webpack_exports__["a"] = (vo => `

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link id="favicon" rel="shortcut icon" href="/repone-favicon.png" sizes="16x16 32x32" type="image/png" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">
    ${vo.mainCSSBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.mainCSSBundle + '">' : ''}

    <title>RepOne</title>
  </head>

  <body>
    <div id="root"><div>${vo.root}</div></div>
    ${getDeferScript(vo.manifestJSBundle)}
    ${getDeferScript(vo.vendorJSBundle)}
    ${getDeferScript(vo.mainJSBundle)}
  </body>

</html>

`);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_App__ = __webpack_require__(15);





// Webpack 2 supports ES2015 `import()` by auto-
// chunking assets. Check out the following for more:
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

const importHome = (nextState, cb) => {
  new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)).then(module => cb(null, module.default)).catch(e => {
    throw e;
  });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route___default.a,
  { path: '/', component: __WEBPACK_IMPORTED_MODULE_3_src_components_App__["a" /* default */] },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute___default.a, { getComponent: importHome })
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (false) {
  require('../components/Home'); // eslint-disable-line global-require
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/Route");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/IndexRoute");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Link__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_lib_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);




function App({ children }) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.content },
      children
    )
  );
}

App.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/Link");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
	"header": "styles-header--3vyxV",
	"nav": "styles-nav--1wfLC",
	"content": "styles-content--2jscW",
	"navItem": "styles-navItem--2Kapk",
	"link": "styles-link--1lrKW",
	"logo": "styles-logo--REh8o"
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_Sections_Landing_index_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_Sections_Analytics_index_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_Sections_Platform_index_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_Sections_Insights_index_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_Sections_Manage_index_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_Sections_Teams_index_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_Sections_Pricing_index_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_Sections_CTA_index_js__ = __webpack_require__(78);











function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_Sections_Landing_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_Sections_Analytics_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_Sections_Platform_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_Sections_Insights_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_components_Sections_Manage_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_src_components_Sections_Teams_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_components_Sections_Pricing_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_src_components_Sections_CTA_index_js__["a" /* default */], null)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--1AkH0",
	"section": "styles-section--cSBy1",
	"main": "styles-main--1egQf"
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_RepOneLogo_index_js__ = __webpack_require__(22);




function Landing() {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'div',
								{ className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section },
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
												'div',
												{ className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
												__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
																'h1',
																null,
																' Win in the weight room.'
												),
												__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
																'h1',
																null,
																'Win on the field.'
												),
												__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_RepOneLogo_index_js__["a" /* default */], null)
								)
				);
}

/* harmony default export */ __webpack_exports__["a"] = (Landing);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--3zsw1",
	"section": "styles-section--2P3oh",
	"main": "styles-main--1EcVV"
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Logo() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.logo },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.electronoutline }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.electronoutline }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.electronoutline }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.electronoutline }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.electronorbit },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.electron }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.nucleus })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      null,
      'RepOne'
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--1SRMI",
	"section": "styles-section--2gZIu",
	"main": "styles-main--2qpeH",
	"electronorbit": "styles-electronorbit--1PVUy",
	"electron": "styles-electron--2QWWV",
	"nucleus": "styles-nucleus--1znFt",
	"logo": "styles-logo--2JWk7",
	"electronoutline": "styles-electronoutline--3Lgzk",
	"orbit": "styles-orbit--3BbkU"
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_Shared_Parallax_index_js__ = __webpack_require__(26);




function Analytics() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'analytics' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.barbelltrack },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_src_components_Shared_Parallax_index_js__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.barbellcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(28), alt: 'RepOne Barbell' })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'Analytics platform for strength coaches'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Team management and analytics, powered by a fleet of extraordinarily accurate, portable devices.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.devicecontainertouch },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.ipadcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(2), alt: 'RepOne coaching Live' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.reponecontainer },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'figure',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(1), alt: 'RepOne device' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(1), alt: 'RepOne device' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(1), alt: 'RepOne device' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.devicecontainerdesktop },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'figure',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(29), alt: 'RepOne app on laptop' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(30), alt: 'RepOne app on phone' })
        )
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Analytics);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2Rx5M",
	"section": "styles-section--3SI4l",
	"main": "styles-main--3t0OR",
	"barbellcontainer": "styles-barbellcontainer--28mKN",
	"reponecontainer": "styles-reponecontainer--1-0ST",
	"barbelltrack": "styles-barbelltrack--3rS_Z",
	"devicecontainerdesktop": "styles-devicecontainerdesktop--2Qbns",
	"devicecontainertouch": "styles-devicecontainertouch--2Tlj9",
	"ipadcontainer": "styles-ipadcontainer--38eBP"
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);




class Parallax extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    const children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children, child => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Stickybox,
      null,
      child
    ));

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.parallax },
      children
    );
  }
}

const SCROLL_TIMEOUT = 240;
const CHECK_INTERVAL = SCROLL_TIMEOUT / 6;

class Stickybox extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 1,
      height: -1,
      scrolling: false
    };
  }

  componentDidMount() {
    console.log('mounted');
    window.addEventListener('scroll', this.onScroll.bind(this), false);
    this.checkInterval = window.setInterval(this.checkScroll.bind(this), CHECK_INTERVAL);
    this.scrolling = false;
    this.active = false;
    this.className = __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.parallaxcontainer;
    this.updateTopPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  checkScroll() {
    if (Date.now() - this.lastScrollTime > SCROLL_TIMEOUT && this.scrolling) {
      this.scrolling = false;
      this.onScrollEnd();
    }
  }

  proxiedScroll() {
    if (Date.now() - this.proxiedScrollTime > CHECK_INTERVAL && this.scrolling) {
      this.proxiedScrollTime = Date.now();
      this.onScrollProxy();
    }
  }

  onScroll() {
    if (!this.scrolling) {
      this.scrolling = true;
      this.onScrollStart();
    }

    this.lastScrollTime = Date.now();
    this.proxiedScroll();
  }

  handleScroll() {
    this.updateTopPosition();
  }

  updateTopPosition() {
    const box = this.node.getBoundingClientRect();
    this.setState({
      top: box.top,
      height: box.height
    });
  }

  onScrollStart() {
    this.setState({ scrolling: true });
    this.handleScroll();
  }

  onScrollProxy() {
    this.handleScroll();
  }

  shouldComponentUpdate() {
    if (this.isFrozen() && !this.active) {
      this.active = true;
      return false;
    }
    return true;
  }

  onScrollEnd() {
    this.setState({ scrolling: false });
    this.handleScroll();
  }

  getState() {
    return this.state;
  }

  isFrozen() {
    if (this.node) {
      const rect = this.node.parentElement.parentElement.getBoundingClientRect();
      return rect.top < 1 && rect.top + rect.height > 1;
    }

    return false;
  }

  setClassName() {
    if (this.node) {
      if (this.isFrozen()) {
        if (!this.node.className) {
          this.node.className = __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.frozen;
        }
      } else {
        this.node.className = '';
      }
    }
  }

  render() {
    this.setClassName();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { ref: node => this.node = node, style: { height: this.state.height } },
      this.props.children
    );
  }
}

Parallax.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Parallax);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"frozen": "styles-frozen--CO8IM",
	"parallax": "styles-parallax--1-bIH"
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/RepOneBarbell-f18914c0f6f4125bd0872ddc386ceeba.png";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/Group-2-e3764a9c67a5ee51befba1f96fe55cdf.png";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/Group-3-86cbfec66c74904e94fa60180d1d4dc0.png";

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Platform() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'platform' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        ' The most advance training techniques at your fingertips'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'RepOne streamlines autoregulation and individualized coaching.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Implement top training methodologies, right away, for your whole team'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.appscontainer },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.ipadcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(2), alt: 'RepOne coaching Live' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.ipadcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
            src: __webpack_require__(33),
            alt: 'RepOne coaching Programs'
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.ipadcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
            src: __webpack_require__(34),
            alt: 'RepOne coaching Dashboard'
          })
        )
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Platform);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--3bpRm",
	"section": "styles-section--cWIe1",
	"main": "styles-main--1Hkxe",
	"appscontainer": "styles-appscontainer--3o9Cn",
	"ipadcontainer": "styles-ipadcontainer--3oZg8"
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/R1 Coach - Programs-57ef207323e7179d3b6edd9eb967ac59.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/R1 Coach - Dashboard-3770950d4918c37fce93c28fa504be58.png";

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Insights() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'insights' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        ' Insights you can only get with RepOne'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        ' ',
        'Industry-leading inductive 3D sensing gives you new ways to measure and enhance performance.'
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Insights);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--UPh_z",
	"section": "styles-section--3jW8e",
	"main": "styles-main--FPI6s",
	"video": "styles-video--3hdU5"
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Manage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'manage' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        ' RepOne helps you manage your team, your way.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'The RepOne device fits the equipment you already have, and the flexible athlete management software works with your routine.'
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Manage);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--192t-",
	"section": "styles-section--2RICH",
	"main": "styles-main--rUZ_a"
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
const images = [__webpack_require__(41), __webpack_require__(42), __webpack_require__(43), __webpack_require__(44), __webpack_require__(45), __webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51), __webpack_require__(52), __webpack_require__(53), __webpack_require__(54), __webpack_require__(55), __webpack_require__(56), __webpack_require__(57), __webpack_require__(58), __webpack_require__(59), __webpack_require__(60), __webpack_require__(61), __webpack_require__(62), __webpack_require__(63), __webpack_require__(64), __webpack_require__(65), __webpack_require__(66), __webpack_require__(67), __webpack_require__(68), __webpack_require__(69), __webpack_require__(70), __webpack_require__(71), __webpack_require__(72), __webpack_require__(73), __webpack_require__(74), __webpack_require__(75)];

function makekey() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function Teams() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'teams' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        ' RepOne tech powers the best teams'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogocontainer },
        images.map(image => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: makekey(), className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogo, src: image, alt: 'logo' }))
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Teams);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--3yCvX",
	"section": "styles-section--3zl0m",
	"main": "styles-main--31X70",
	"teamlogo": "styles-teamlogo--1Faow"
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/1-e9ff91718ead8a6f5781d81c68fa89ec.png";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/2-dccde8258e679a606e5a6bbe4f84873d.png";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/3-fc59b97872412881b214e3d5769f5224.png";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/4-749046615c5a4d6dcc0eef14b71e203a.png";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/5-01497e015bfa3f4701da1641be52b7da.png";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/6-3020c355fc36a85e154c2c9754f4cc0f.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/7-5d5403628e6dfac183043fc5a988f82b.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/8-a22187dd850f1b2c9462b6dc9eb6ac5d.png";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/9-76e5cff6eb6c1495297ffe76e0d6eae9.png";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/10-7c6f73ffe2bca06cf1cb50b100ac39a2.png";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/11-21746f45cf7bdc2178814cfb5df00534.png";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/12-1d399f5500608a8e7468506ae948764c.png";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/13-518d3aa671480a1cd05ba7ae337fcb48.png";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/14-b60d97fc40cdee02f0d895978a38db64.png";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/15-6e9f2f17be8f7c14726ffa71a26b1861.png";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/16-4d1212305bb9350c0a544a2002e43a7d.png";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/17-e4d17a823f51fb22855137083fe54747.png";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/18-627faed6f0318c5d7b40f4d70677215e.png";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/19-46d4207cef8a0bbba1e4500b4a12b3cc.png";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/20-6402d5ffc6aa6dc39222b90c569b3cb7.png";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/21-5dacda291cc433c11a3b4395c7d89351.png";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/22-b54290b60ce5b7e60fd22f5dcb75ddd7.png";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/23-2aae5d15ec3f4cf0f27778bb41f386a9.png";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/24-e78f426968d12baf720c3230beb550c9.png";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/25-879d2a2db7699d6ec896066682228e9c.png";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/26-40f5a1ecc56329c6f6548502c1e9a30f.png";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/27-77b335846aa757038a711cd6aadfa099.png";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/28-c2c9456a0030cfc6a4001add7908be8c.png";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/29-f8b6aa6d17a4af6571add266acc78b50.png";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/30-d44693f2a9fafc78715890e1d775a533.png";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/31-d3de470b3ce1f427d99f82909f82589a.png";

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/32-db635b89fd557109f537363f9e5870f0.png";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/33-e2c831ae33ad0c7ae33533747499135d.png";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/34-8658471aabd1c7a66f3748487f5db200.png";

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/35-54279c47868500a4948f2b1c54ca24d1.png";

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Pricing() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'landing_zone' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        ' Pricing'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.pricing, id: 'front' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            'Hardware Up Front $349'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '349 per unit'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            'Starting at $99 monthly'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.pricing, id: 'monthly' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            'Hardware Monthly'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '20+ units'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '499+ monthly'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '24mo contract'
          )
        )
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Pricing);

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2tjKc",
	"section": "styles-section--1LwyH",
	"main": "styles-main--2UJnv",
	"pricing": "styles-pricing--9UDgq"
};

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function CTA() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'cta' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        ' Be the first to get RepOne'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.btn },
        'Reserve Now'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        ' Get in touch'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.btn },
        'Email Us'
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (CTA);

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2zLDp",
	"section": "styles-section--2ldD8",
	"main": "styles-main--3Yp-L",
	"btn": "styles-btn--UfHtT"
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = {"1.png":"http://localhost:3001/1-e9ff91718ead8a6f5781d81c68fa89ec.png","10.png":"http://localhost:3001/10-7c6f73ffe2bca06cf1cb50b100ac39a2.png","11.png":"http://localhost:3001/11-21746f45cf7bdc2178814cfb5df00534.png","12.png":"http://localhost:3001/12-1d399f5500608a8e7468506ae948764c.png","13.png":"http://localhost:3001/13-518d3aa671480a1cd05ba7ae337fcb48.png","14.png":"http://localhost:3001/14-b60d97fc40cdee02f0d895978a38db64.png","15.png":"http://localhost:3001/15-6e9f2f17be8f7c14726ffa71a26b1861.png","16.png":"http://localhost:3001/16-4d1212305bb9350c0a544a2002e43a7d.png","17.png":"http://localhost:3001/17-e4d17a823f51fb22855137083fe54747.png","18.png":"http://localhost:3001/18-627faed6f0318c5d7b40f4d70677215e.png","19.png":"http://localhost:3001/19-46d4207cef8a0bbba1e4500b4a12b3cc.png","2.png":"http://localhost:3001/2-dccde8258e679a606e5a6bbe4f84873d.png","20.png":"http://localhost:3001/20-6402d5ffc6aa6dc39222b90c569b3cb7.png","21.png":"http://localhost:3001/21-5dacda291cc433c11a3b4395c7d89351.png","22.png":"http://localhost:3001/22-b54290b60ce5b7e60fd22f5dcb75ddd7.png","23.png":"http://localhost:3001/23-2aae5d15ec3f4cf0f27778bb41f386a9.png","24.png":"http://localhost:3001/24-e78f426968d12baf720c3230beb550c9.png","25.png":"http://localhost:3001/25-879d2a2db7699d6ec896066682228e9c.png","26.png":"http://localhost:3001/26-40f5a1ecc56329c6f6548502c1e9a30f.png","27.png":"http://localhost:3001/27-77b335846aa757038a711cd6aadfa099.png","28.png":"http://localhost:3001/28-c2c9456a0030cfc6a4001add7908be8c.png","29.png":"http://localhost:3001/29-f8b6aa6d17a4af6571add266acc78b50.png","3.png":"http://localhost:3001/3-fc59b97872412881b214e3d5769f5224.png","30.png":"http://localhost:3001/30-d44693f2a9fafc78715890e1d775a533.png","31.png":"http://localhost:3001/31-d3de470b3ce1f427d99f82909f82589a.png","32.png":"http://localhost:3001/32-db635b89fd557109f537363f9e5870f0.png","33.png":"http://localhost:3001/33-e2c831ae33ad0c7ae33533747499135d.png","34.png":"http://localhost:3001/34-8658471aabd1c7a66f3748487f5db200.png","35.png":"http://localhost:3001/35-54279c47868500a4948f2b1c54ca24d1.png","4.png":"http://localhost:3001/4-749046615c5a4d6dcc0eef14b71e203a.png","5.png":"http://localhost:3001/5-01497e015bfa3f4701da1641be52b7da.png","6.png":"http://localhost:3001/6-3020c355fc36a85e154c2c9754f4cc0f.png","7.png":"http://localhost:3001/7-5d5403628e6dfac183043fc5a988f82b.png","8.png":"http://localhost:3001/8-a22187dd850f1b2c9462b6dc9eb6ac5d.png","9.png":"http://localhost:3001/9-76e5cff6eb6c1495297ffe76e0d6eae9.png","Group-2.png":"http://localhost:3001/Group-2-e3764a9c67a5ee51befba1f96fe55cdf.png","Group-3.png":"http://localhost:3001/Group-3-86cbfec66c74904e94fa60180d1d4dc0.png","R1 Coach - Dashboard.png":"http://localhost:3001/R1 Coach - Dashboard-3770950d4918c37fce93c28fa504be58.png","R1 Coach - Live.png":"http://localhost:3001/R1 Coach - Live-492f2e49b83cbc2be54721a083bedf1c.png","R1 Coach - Programs.png":"http://localhost:3001/R1 Coach - Programs-57ef207323e7179d3b6edd9eb967ac59.png","RepOne.png":"http://localhost:3001/RepOne-394244b169341043dd679bdd0e66a7aa.png","RepOneBarbell.png":"http://localhost:3001/RepOneBarbell-f18914c0f6f4125bd0872ddc386ceeba.png","icon-kytLogo_large-252x252.svg":"http://localhost:3001/icon-kytLogo_large-252x252-466d0df90a1887c34d04caa92ed278c6.svg","ipad.png":"http://localhost:3001/ipad-74f3b11b13d8c58558e86592aa0d93a3.png","main.js":"http://localhost:3001/main.js"}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map