require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"home"}[chunkId]||chunkId) + "-" + {"0":"d8cfb660db438ac40d4e"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/server/template.js
/* eslint-disable prefer-template, max-len */

const getDeferScript = src => src ? `<script defer src="${src}"></script>` : '';

/* harmony default export */ var template_defaultExport = (vo => `

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
// CONCATENATED MODULE: ./src/components/App/index.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function App({ children }) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.content },
      children
    )
  );
}

App.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};

/* harmony default export */ var App_defaultExport = (App);
// CONCATENATED MODULE: ./src/routes/index.js
/* harmony import */ var routes___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var routes___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(routes___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__);





// Webpack 2 supports ES2015 `import()` by auto-
// chunking assets. Check out the following for more:
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

const importHome = (nextState, cb) => {
  __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 66)).then(module => cb(null, module.default)).catch(e => {
    throw e;
  });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = routes___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route___default.a,
  { path: '/', component: App_defaultExport },
  routes___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute___default.a, { getComponent: importHome })
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (false) {
  require('src/components/App/Routes/Home'); // eslint-disable-line global-require
}

/* harmony default export */ var routes_defaultExport = (routes);
// CONCATENATED MODULE: ./src/server/index.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_lib_match__);












const clientAssets = __webpack_require__(12); // eslint-disable-line import/no-dynamic-require
const port = parseInt("3000", 10);
const app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(__WEBPACK_IMPORTED_MODULE_1_compression___default.a());

// Setup the public directory so that we can server static assets.
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(), "build/public")));

// Setup server side routing.
app.get('*', (request, response) => {
  const history = __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory___default.a(request.originalUrl);

  __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match___default.a({ routes: routes_defaultExport, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      // When a React Router route is matched then we render
      // the components and assets into the template.
      response.status(200).send(template_defaultExport({
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-router/lib/IndexRoute");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = {
	"content": "styles-content--2jscW"
};

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = {"1.png":"/1-e9ff91718ead8a6f5781d81c68fa89ec.png","10.png":"/10-7c6f73ffe2bca06cf1cb50b100ac39a2.png","11.png":"/11-21746f45cf7bdc2178814cfb5df00534.png","12.png":"/12-1d399f5500608a8e7468506ae948764c.png","13.png":"/13-518d3aa671480a1cd05ba7ae337fcb48.png","14.png":"/14-b60d97fc40cdee02f0d895978a38db64.png","15.png":"/15-6e9f2f17be8f7c14726ffa71a26b1861.png","16.png":"/16-4d1212305bb9350c0a544a2002e43a7d.png","17.png":"/17-e4d17a823f51fb22855137083fe54747.png","18.png":"/18-627faed6f0318c5d7b40f4d70677215e.png","19.png":"/19-46d4207cef8a0bbba1e4500b4a12b3cc.png","2.png":"/2-dccde8258e679a606e5a6bbe4f84873d.png","20.png":"/20-6402d5ffc6aa6dc39222b90c569b3cb7.png","21.png":"/21-5dacda291cc433c11a3b4395c7d89351.png","22.png":"/22-b54290b60ce5b7e60fd22f5dcb75ddd7.png","23.png":"/23-2aae5d15ec3f4cf0f27778bb41f386a9.png","24.png":"/24-e78f426968d12baf720c3230beb550c9.png","25.png":"/25-879d2a2db7699d6ec896066682228e9c.png","26.png":"/26-40f5a1ecc56329c6f6548502c1e9a30f.png","27.png":"/27-77b335846aa757038a711cd6aadfa099.png","28.png":"/28-c2c9456a0030cfc6a4001add7908be8c.png","29.png":"/29-f8b6aa6d17a4af6571add266acc78b50.png","3.png":"/3-fc59b97872412881b214e3d5769f5224.png","30.png":"/30-d44693f2a9fafc78715890e1d775a533.png","31.png":"/31-d3de470b3ce1f427d99f82909f82589a.png","32.png":"/32-db635b89fd557109f537363f9e5870f0.png","33.png":"/33-e2c831ae33ad0c7ae33533747499135d.png","34.png":"/34-8658471aabd1c7a66f3748487f5db200.png","35.png":"/35-54279c47868500a4948f2b1c54ca24d1.png","4.png":"/4-749046615c5a4d6dcc0eef14b71e203a.png","5.png":"/5-01497e015bfa3f4701da1641be52b7da.png","6.png":"/6-3020c355fc36a85e154c2c9754f4cc0f.png","7.png":"/7-5d5403628e6dfac183043fc5a988f82b.png","8.png":"/8-a22187dd850f1b2c9462b6dc9eb6ac5d.png","9.png":"/9-76e5cff6eb6c1495297ffe76e0d6eae9.png","Group-2.png":"/Group-2-e3764a9c67a5ee51befba1f96fe55cdf.png","Group-3.png":"/Group-3-86cbfec66c74904e94fa60180d1d4dc0.png","R1 Coach - Dashboard.png":"/R1 Coach - Dashboard-3770950d4918c37fce93c28fa504be58.png","R1 Coach - Live.png":"/R1 Coach - Live-492f2e49b83cbc2be54721a083bedf1c.png","R1 Coach - Programs.png":"/R1 Coach - Programs-57ef207323e7179d3b6edd9eb967ac59.png","RepOne.png":"/RepOne-394244b169341043dd679bdd0e66a7aa.png","RepOneBarbell.png":"/RepOneBarbell-f18914c0f6f4125bd0872ddc386ceeba.png","home.js":"/home-56d906267b61e5689d97.js","home.js.map":"/home-59d40f21057bad644549.js.map","ipad.png":"/ipad-74f3b11b13d8c58558e86592aa0d93a3.png","main.css":"/main-eb1e3b850a0f544eb1b437c9740b78de.css","main.css.map":"/main-eb1e3b850a0f544eb1b437c9740b78de.css.map","main.js":"/main-15faa142e63fda6bd0f3.js","main.js.map":"/main-08b969801fcc74d0d08a.js.map","manifest.js":"/manifest-da202cfbb341288b9d5a.js","manifest.js.map":"/manifest-14c3e93a45f64b659e48.js.map","vendor.js":"/vendor-3c1b2e50f0c38f04f8f1.js","vendor.js.map":"/vendor-6076716cd9f1d58b9f36.js.map"}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("react-router/lib/Route");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map