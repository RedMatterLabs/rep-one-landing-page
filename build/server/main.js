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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__template__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(10);












const clientAssets = __webpack_require__(87); // eslint-disable-line import/no-dynamic-require
const port = process.env.PORT ? process.env.PORT : 3000;
const app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(__WEBPACK_IMPORTED_MODULE_1_compression___default.a());

// Setup the public directory so that we can server static assets.
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(), "src/public")));

// Tell bots not to load any of our pages.
app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_App__ = __webpack_require__(13);





// Webpack 2 supports ES2015 `import()` by auto-
// chunking assets. Check out the following for more:
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

const importHome = (nextState, cb) => {
  new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)).then(module => cb(null, module.default)).catch(e => {
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
  require('src/components/App/Routes/Home'); // eslint-disable-line global-require
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/Route");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/IndexRoute");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_index_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_index_js__ = __webpack_require__(17);





function App({ children }) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.content },
      children
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Footer_index_js__["a" /* default */], null)
  );
}

App.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"content": "styles-content--2jscW"
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }
  scrollFunction() {
    console.log(window.screenY);
    if (window.scrollY > 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }
  componentDidMount() {
    window.onscroll = this.scrollFunction.bind(this);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.header}  ${this.state.scrolled ? __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.scrolled : __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.notscrolled}`
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'RepOne'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.button },
        'Get yours today'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--omZoF",
	"section": "styles-section--2AtxK",
	"main": "styles-main--3lRdS",
	"button": "styles-button--3-N3I",
	"header": "styles-header--42xaK",
	"scrolled": "styles-scrolled--O7CRW"
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.footer },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Contact Us'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.adress },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '275 Brooklyn St.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            'Williamsburg, NY, 12345'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            'United States'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'mailto:squatsandscience@gmail.com' },
          'squatsandscience@gmail.com'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.footerSocialIcons },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcons },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-github' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-facebook' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-instagram' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-twitter' })
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2QShP",
	"section": "styles-section--5nq-m",
	"main": "styles-main--1ctYf",
	"button": "styles-button--3kosb",
	"footer": "styles-footer--1kKw0",
	"footerSocialIcons": "styles-footerSocialIcons--2KxL5",
	"socialIcons": "styles-socialIcons--1Y_F0"
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_App_Routes_Home_Landing_index_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_App_Routes_Home_Analytics_index_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_App_Routes_Home_Platform_index_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_App_Routes_Home_Insights_index_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_App_Routes_Home_Exploded_index_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_App_Routes_Home_Manage_index_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_App_Routes_Home_Teams_index_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_App_Routes_Home_CTA_index_js__ = __webpack_require__(81);











function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_App_Routes_Home_Landing_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_App_Routes_Home_Analytics_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_App_Routes_Home_Platform_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_App_Routes_Home_Insights_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_components_App_Routes_Home_Exploded_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_components_App_Routes_Home_Teams_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_src_components_App_Routes_Home_CTA_index_js__["a" /* default */], null)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2EMsY",
	"section": "styles-section--1EFYD",
	"main": "styles-main--3_9Z8",
	"button": "styles-button--3v_u5"
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_RepOneLogo_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_App_Shared_Video_index_js__ = __webpack_require__(25);





class Landing extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bg },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          { autoPlay: 'true', muted: 'true', loop: 'true', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.herovid },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: 'https://demo.vmg.nyc/greg/repone/repone_hero_large.mp4', type: 'video/mp4' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Win in the weight room',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          ' Win on the field'
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Landing);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--3r-XT",
	"section": "styles-section--REPrO",
	"main": "styles-main--28EZO",
	"button": "styles-button--27StL",
	"filter": "styles-filter--OKkZS",
	"bg": "styles-bg--3XkJh",
	"herovid": "styles-herovid--2MsOt",
	"rolotext": "styles-rolotext--J34eQ",
	"rolotextlist": "styles-rolotextlist--3-koH",
	"rolotextli": "styles-rolotextli--2nWQb",
	"change": "styles-change--Xg5PP"
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(24);
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

/* unused harmony default export */ var _unused_webpack_default_export = (Logo);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--QTYDU",
	"section": "styles-section--1fAna",
	"main": "styles-main--3uBCb",
	"button": "styles-button--2bIJX",
	"electronorbit": "styles-electronorbit--2Sh4K",
	"electron": "styles-electron--1OHOw",
	"nucleus": "styles-nucleus--NPUoq",
	"logo": "styles-logo--25S9R",
	"electronoutline": "styles-electronoutline--3y9AV",
	"orbit": "styles-orbit--1isDm"
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);




class Video extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration,
      playing: false,
      playbacktime: 0,
      timeremaing: 0,
      top: 0,
      width: 0,
      scrollable: props.scrollable
    };
  }

  componentDidMount() {
    this.node.play();

    window.onscroll = () => {
      this.node.pause();
    };

    if (this.props.scrollable) {
      this.updatetop();
      this.checkInterval = setInterval(() => {
        this.updatetop();
        this.scrubvideo();
      }, 40);
    }
  }

  componentWillUnmount() {
    clearInterval(this.checkInterval);
  }

  updatetop() {
    const noderect = this.node.getBoundingClientRect();
    const parentrect = this.node.parentElement.getBoundingClientRect();
    const nodetop = noderect.top;
    const parenttop = parentrect.top;
    const relativetop = nodetop - parenttop;
    this.setState({
      top: relativetop
    });
  }

  scrubvideo() {
    const duration = this.state.duration;
    const nodetop = this.state.top;
    const scrubtime = (duration - nodetop) / 25;
    console.log(duration, nodetop);
    this.node.currentTime = scrubtime;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.videocontainer },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.videoscrollbuffer },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          {
            ref: node => {
              this.node = node;
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: this.props.src })
        )
      )
    );
  }
}

Video.propTypes = {
  scrollable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  src: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* unused harmony default export */ var _unused_webpack_default_export = (Video);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
	"videocontainer": "styles-videocontainer--2m0vV",
	"videoscrollbuffer": "styles-videoscrollbuffer--2Iyec"
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Analytics extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'analytics' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Analytics platform for strength coaches'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subsection },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(29) })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              null,
              'RepOne Devices'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Our platform is powered by a fleet of extraordinarily accurate, portable devices.'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subsection },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(30) })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              null,
              'Coaching Portal'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Full-roster capabilities and athlete performance monitoring in real-time using our unique metrics'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subsection },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(31) })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              null,
              'Athlete Kiosk App'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              'Athlete identification and autoregulated training for your whole team'
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Analytics);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--Kn0Rx",
	"section": "styles-section--2EfO1",
	"main": "styles-main--3ytPE",
	"button": "styles-button--1KYpr",
	"subsection": "styles-subsection--pPyLO",
	"subcontainer": "styles-subcontainer--3gkHy",
	"placeholder": "styles-placeholder--rmBbJ"
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/repone_render-de35d69a0bebca1abaa1647cbe8906b8.png";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/coaching_portal-832bd3cd2efefb515d23050172f99818.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/athlete_portal-f9f515b63e72346148bf48c2dc227b1f.png";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Platform extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'platform' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'The most advanced training techniques at your fingertips'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.flexleft },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(34), alt: 'autoregulation' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.rel },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              null,
              'RepOne streamlines autoregulation and individualized coaching.'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.flexright },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Implement top training methodologies, right away, for your whole team.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(35), alt: 'autoregulation' })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.flexleft },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(36), alt: 'autoregulation' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Keep track of your teams overall performance in real-time using our unique metrics.'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Platform);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--3l6R5",
	"section": "styles-section--3Ic3m",
	"main": "styles-main--2WqtH",
	"button": "styles-button--17ecM",
	"placeholder": "styles-placeholder--138fP",
	"flexleft": "styles-flexleft--MQp1k",
	"flexright": "styles-flexright--3xkXb",
	"underline": "styles-underline--35v9k",
	"rel": "styles-rel--1WLqj"
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/live_ipad_1024-3a7c8f79232599a1956aca37d62f939f.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/athlete_program_ipad_1024-20cb1699bef57178a6a6a7d63322ccf7.png";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/dashboard_ipad_1024-faad244a96bf6580364767b31c5a5e9a.png";

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(38);
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
        'Insights you can only get with RepOne'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.diagram },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.diagramcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(39) })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Industry-leading inductive 3D sensing gives you new ways to measure and enhance performance.'
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Insights);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--1wUyM",
	"section": "styles-section--2LXgi",
	"main": "styles-main--XNtXj",
	"button": "styles-button--3oi4z",
	"diagramcontainer": "styles-diagramcontainer--2Dilh",
	"explosioncontainer": "styles-explosioncontainer--btCEF",
	"video": "styles-video--1YLkF",
	"diagram": "styles-diagram--27Dit",
	"explodedvid": "styles-explodedvid--2oA11"
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/deadlift_guy.001-396092ac4388438e7243d6e63e67a85b.jpg";

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Exploded() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'insights' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'Say something about your awsome hardware guys.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.diagram },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.explosioncontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'video',
            { autoPlay: 'true', muted: 'true', loop: 'true', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.video },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: 'https://demo.vmg.nyc/greg/repone/repone_large.mp4', type: 'video/mp4' })
          )
        )
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Exploded);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--1sd5l",
	"section": "styles-section--3_GZD",
	"main": "styles-main--1uV7X",
	"button": "styles-button--2JVOz",
	"diagramcontainer": "styles-diagramcontainer--igWdu",
	"explosioncontainer": "styles-explosioncontainer--Q0-P2",
	"video": "styles-video--1zzP3",
	"diagram": "styles-diagram--25KrG",
	"explodedvid": "styles-explodedvid--DI2lx"
};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(43);
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
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder })
      )
    )
  );
}

/* unused harmony default export */ var _unused_webpack_default_export = (Manage);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--tXpBS",
	"section": "styles-section--18T0a",
	"main": "styles-main--2v33e",
	"button": "styles-button--128uC",
	"placeholder": "styles-placeholder--CHoJ6"
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
const images = [__webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51), __webpack_require__(52), __webpack_require__(53), __webpack_require__(54), __webpack_require__(55), __webpack_require__(56), __webpack_require__(57), __webpack_require__(58), __webpack_require__(59), __webpack_require__(60), __webpack_require__(61), __webpack_require__(62), __webpack_require__(63), __webpack_require__(64), __webpack_require__(65), __webpack_require__(66), __webpack_require__(67), __webpack_require__(68), __webpack_require__(69), __webpack_require__(70), __webpack_require__(71), __webpack_require__(72), __webpack_require__(73), __webpack_require__(74), __webpack_require__(75), __webpack_require__(76), __webpack_require__(77), __webpack_require__(78), __webpack_require__(79), __webpack_require__(80)];

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
        ' Our technology powers the best teams'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogocontainer },
        images.map(image => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogo, src: image, alt: 'logo' }))
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Teams);

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--qkU_9",
	"section": "styles-section--2zhc1",
	"main": "styles-main--3Odib",
	"button": "styles-button--2Opq9",
	"teamlogocontainer": "styles-teamlogocontainer--pMkqy",
	"teamlogo": "styles-teamlogo--39qbP"
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/1-e9ff91718ead8a6f5781d81c68fa89ec.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/2-dccde8258e679a606e5a6bbe4f84873d.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/3-fc59b97872412881b214e3d5769f5224.png";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/4-749046615c5a4d6dcc0eef14b71e203a.png";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/5-01497e015bfa3f4701da1641be52b7da.png";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/6-3020c355fc36a85e154c2c9754f4cc0f.png";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/7-5d5403628e6dfac183043fc5a988f82b.png";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/8-a22187dd850f1b2c9462b6dc9eb6ac5d.png";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/9-76e5cff6eb6c1495297ffe76e0d6eae9.png";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/10-7c6f73ffe2bca06cf1cb50b100ac39a2.png";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/11-21746f45cf7bdc2178814cfb5df00534.png";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/12-1d399f5500608a8e7468506ae948764c.png";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/13-518d3aa671480a1cd05ba7ae337fcb48.png";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/14-b60d97fc40cdee02f0d895978a38db64.png";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/15-6e9f2f17be8f7c14726ffa71a26b1861.png";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/16-4d1212305bb9350c0a544a2002e43a7d.png";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/17-e4d17a823f51fb22855137083fe54747.png";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/18-627faed6f0318c5d7b40f4d70677215e.png";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/19-46d4207cef8a0bbba1e4500b4a12b3cc.png";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/20-6402d5ffc6aa6dc39222b90c569b3cb7.png";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/21-5dacda291cc433c11a3b4395c7d89351.png";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/22-b54290b60ce5b7e60fd22f5dcb75ddd7.png";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/23-2aae5d15ec3f4cf0f27778bb41f386a9.png";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/24-e78f426968d12baf720c3230beb550c9.png";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/25-879d2a2db7699d6ec896066682228e9c.png";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/26-40f5a1ecc56329c6f6548502c1e9a30f.png";

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/27-77b335846aa757038a711cd6aadfa099.png";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/28-c2c9456a0030cfc6a4001add7908be8c.png";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/29-f8b6aa6d17a4af6571add266acc78b50.png";

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/30-d44693f2a9fafc78715890e1d775a533.png";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/31-d3de470b3ce1f427d99f82909f82589a.png";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/32-db635b89fd557109f537363f9e5870f0.png";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/33-e2c831ae33ad0c7ae33533747499135d.png";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/34-8658471aabd1c7a66f3748487f5db200.png";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/35-54279c47868500a4948f2b1c54ca24d1.png";

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_emailform_index_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pricing_index_js__ = __webpack_require__(85);





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
        'Be the first to get RepOne'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.button },
        'Contact Us'
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (CTA);

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--1u53v",
	"section": "styles-section--2ilPY",
	"main": "styles-main--2R38f",
	"button": "styles-button--1EyEm",
	"switch": "styles-switch--3BLD5",
	"slider": "styles-slider--3nH1V"
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function EmailForm() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'form',
    {
      className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.form} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.card}`,
      id: 'signup',
      method: 'post',
      action: ''
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.row },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.group}  ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.name}` },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'name', className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textinput}` }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.highlight }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bar }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'POST-name' },
          'name'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.group}  ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.email}` },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'POST-email' },
          'email'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'email', className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textinput}` }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.highlight }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bar }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'POST-email' },
          'email'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.row },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.group}  ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.message}` },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'message', className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textinput} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.message}` }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.highlight }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bar }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'POST-message' },
          'message'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.row },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', value: 'Submit', className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.button} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.submit}` })
    )
  );
}

/* unused harmony default export */ var _unused_webpack_default_export = (EmailForm);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--1AhVN",
	"section": "styles-section--2EtVw",
	"main": "styles-main--3PU0i",
	"button": "styles-button--3HHyK",
	"row": "styles-row--3wX-F",
	"roundedcorners": "styles-roundedcorners--1Ejg0",
	"name": "styles-name--7K_si",
	"email": "styles-email--oigZ4",
	"message": "styles-message--Zpszi",
	"card": "styles-card--30w7K",
	"footer": "styles-footer--QrInP",
	"group": "styles-group--2MoBW",
	"bar": "styles-bar--1IXTl",
	"highlight": "styles-highlight--2b2i1",
	"inputHighlighter": "styles-inputHighlighter--23PQ5"
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Pricing() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.flexrow} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.roundedcorners} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.card}` },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.content },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Amateur'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '250 athletes max'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '$100/month'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '$30/month per rack'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.flexrow} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.roundedcorners} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.card}` },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.content },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Professional'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '250 athletes max'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '$100/month'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '$30/month per rack'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.flexrow} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.roundedcorners} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.card}` },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.content },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Elite'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '250 athletes max'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '$100/month'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            null,
            '$30/month per rack'
          )
        )
      )
    )
  );
}

/* unused harmony default export */ var _unused_webpack_default_export = (Pricing);

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--N97Tp",
	"section": "styles-section--2uffX",
	"main": "styles-main--3L1FD",
	"button": "styles-button--138zI",
	"flexrow": "styles-flexrow--2ivW2",
	"roundedcorners": "styles-roundedcorners--ZkloY",
	"card": "styles-card--28181",
	"content": "styles-content--3g6HR"
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {"1.png":"http://localhost:3001/1-e9ff91718ead8a6f5781d81c68fa89ec.png","10.png":"http://localhost:3001/10-7c6f73ffe2bca06cf1cb50b100ac39a2.png","11.png":"http://localhost:3001/11-21746f45cf7bdc2178814cfb5df00534.png","12.png":"http://localhost:3001/12-1d399f5500608a8e7468506ae948764c.png","13.png":"http://localhost:3001/13-518d3aa671480a1cd05ba7ae337fcb48.png","14.png":"http://localhost:3001/14-b60d97fc40cdee02f0d895978a38db64.png","15.png":"http://localhost:3001/15-6e9f2f17be8f7c14726ffa71a26b1861.png","16.png":"http://localhost:3001/16-4d1212305bb9350c0a544a2002e43a7d.png","17.png":"http://localhost:3001/17-e4d17a823f51fb22855137083fe54747.png","18.png":"http://localhost:3001/18-627faed6f0318c5d7b40f4d70677215e.png","19.png":"http://localhost:3001/19-46d4207cef8a0bbba1e4500b4a12b3cc.png","2.png":"http://localhost:3001/2-dccde8258e679a606e5a6bbe4f84873d.png","20.png":"http://localhost:3001/20-6402d5ffc6aa6dc39222b90c569b3cb7.png","21.png":"http://localhost:3001/21-5dacda291cc433c11a3b4395c7d89351.png","22.png":"http://localhost:3001/22-b54290b60ce5b7e60fd22f5dcb75ddd7.png","23.png":"http://localhost:3001/23-2aae5d15ec3f4cf0f27778bb41f386a9.png","24.png":"http://localhost:3001/24-e78f426968d12baf720c3230beb550c9.png","25.png":"http://localhost:3001/25-879d2a2db7699d6ec896066682228e9c.png","26.png":"http://localhost:3001/26-40f5a1ecc56329c6f6548502c1e9a30f.png","27.png":"http://localhost:3001/27-77b335846aa757038a711cd6aadfa099.png","28.png":"http://localhost:3001/28-c2c9456a0030cfc6a4001add7908be8c.png","29.png":"http://localhost:3001/29-f8b6aa6d17a4af6571add266acc78b50.png","3.png":"http://localhost:3001/3-fc59b97872412881b214e3d5769f5224.png","30.png":"http://localhost:3001/30-d44693f2a9fafc78715890e1d775a533.png","31.png":"http://localhost:3001/31-d3de470b3ce1f427d99f82909f82589a.png","32.png":"http://localhost:3001/32-db635b89fd557109f537363f9e5870f0.png","33.png":"http://localhost:3001/33-e2c831ae33ad0c7ae33533747499135d.png","34.png":"http://localhost:3001/34-8658471aabd1c7a66f3748487f5db200.png","35.png":"http://localhost:3001/35-54279c47868500a4948f2b1c54ca24d1.png","4.png":"http://localhost:3001/4-749046615c5a4d6dcc0eef14b71e203a.png","5.png":"http://localhost:3001/5-01497e015bfa3f4701da1641be52b7da.png","6.png":"http://localhost:3001/6-3020c355fc36a85e154c2c9754f4cc0f.png","7.png":"http://localhost:3001/7-5d5403628e6dfac183043fc5a988f82b.png","8.png":"http://localhost:3001/8-a22187dd850f1b2c9462b6dc9eb6ac5d.png","9.png":"http://localhost:3001/9-76e5cff6eb6c1495297ffe76e0d6eae9.png","athlete_portal.png":"http://localhost:3001/athlete_portal-f9f515b63e72346148bf48c2dc227b1f.png","athlete_program_ipad_1024.png":"http://localhost:3001/athlete_program_ipad_1024-20cb1699bef57178a6a6a7d63322ccf7.png","coaching_portal.jpg":"http://localhost:3001/coaching_portal-832bd3cd2efefb515d23050172f99818.jpg","cutspectrum.png":"http://localhost:3001/cutspectrum-8ef64f81689454be7787d092823a0ffa.png","dashboard_ipad_1024.png":"http://localhost:3001/dashboard_ipad_1024-faad244a96bf6580364767b31c5a5e9a.png","deadlift_guy.001.jpg":"http://localhost:3001/deadlift_guy.001-396092ac4388438e7243d6e63e67a85b.jpg","deadlift_guy.001.png":"http://localhost:3001/deadlift_guy.001-a94f4f289665be7745ccffcb23134da2.png","live_ipad_1024.png":"http://localhost:3001/live_ipad_1024-3a7c8f79232599a1956aca37d62f939f.png","main.js":"http://localhost:3001/main.js","repone_render.png":"http://localhost:3001/repone_render-de35d69a0bebca1abaa1647cbe8906b8.png","text.png":"http://localhost:3001/text-74b71348ea4cfcb9d5b3c902188bcaf7.png"}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map