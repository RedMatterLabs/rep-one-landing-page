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












const clientAssets = __webpack_require__(58); // eslint-disable-line import/no-dynamic-require
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
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
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
	"header": "styles-header--42xaK"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_App_Routes_Home_CTA_index_js__ = __webpack_require__(52);











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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(59);
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
          'The RepOne Analytics Platform'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Advanced training at your fingertips.'
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
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
              src: __webpack_require__(34),
              alt: 'autoregulation'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'Autoregulation'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'RepOne streamlines autoregulation and individualized coaching.'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'Updates In Real-Time'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'Implement top training methodologies, right away, for your whole team.'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
              src: __webpack_require__(35),
              alt: 'autoregulation'
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', {
              src: __webpack_require__(36),
              alt: 'autoregulation'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'Performance Metrics'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'Keep track of your teams overall performance in real-time using our unique metrics.'
              )
            )
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
	"image": "styles-image--2Qsxp",
	"textcontainer": "styles-textcontainer--3MEDt",
	"left": "styles-left--1klzJ",
	"text": "styles-text--WHbXm",
	"logo": "styles-logo--38G6L"
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/screenshot_athlete_tablet_short-6bd2461c2ad976a35233e39f1ad841fa.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/repone_screenshot_live_browser-387b26d2a3ea7d84be0ddbfa76cf5afe.png";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/repone_screenshot_dashboard_browser-4654c44dce90ec70dd4908310a46354f.png";

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
        'h2',
        null,
        'Industry-leading inductive 3D sensing gives you new ways to measure and enhance performance.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.diagram },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.diagramcontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(39) })
        )
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
const images = [__webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51)];

function Teams() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'teams' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
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

module.exports = "http://localhost:3001/1-6cc4c73a873aa5d64e3b7da4c56f5c0e.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/2-279ee3a816acaa54e5c7e3bde31bd7e4.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/3-5e77cf02cc000d637ca690d39ca6e44b.png";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/4-feaddec9b679fc9204bb764daa0d47f0.png";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/5-8f154d22d9f3521f3bdd87425c191d5b.png";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/6-2a417d318977abda1e0d9c816811d17a.png";

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_emailform_index_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pricing_index_js__ = __webpack_require__(56);





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
/* 53 */
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(55);
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
/* 55 */
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(57);
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
/* 57 */
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
/* 58 */
/***/ (function(module, exports) {

module.exports = {"1.png":"http://localhost:3001/1-6cc4c73a873aa5d64e3b7da4c56f5c0e.png","2.png":"http://localhost:3001/2-279ee3a816acaa54e5c7e3bde31bd7e4.png","3.png":"http://localhost:3001/3-5e77cf02cc000d637ca690d39ca6e44b.png","4.png":"http://localhost:3001/4-feaddec9b679fc9204bb764daa0d47f0.png","5.png":"http://localhost:3001/5-8f154d22d9f3521f3bdd87425c191d5b.png","6.png":"http://localhost:3001/6-2a417d318977abda1e0d9c816811d17a.png","HelveticaNeueLTStd-Bd.otf":"http://localhost:3001/HelveticaNeueLTStd-Bd-dd719c752659d460d3a55b978fd622c2.otf","HelveticaNeueLTStd-Blk.otf":"http://localhost:3001/HelveticaNeueLTStd-Blk-bd2b5420d911319087aa026ce88ecc1d.otf","HelveticaNeueLTStd-Hv.otf":"http://localhost:3001/HelveticaNeueLTStd-Hv-172a42d7ed548b2d75ba7999e1fe05fd.otf","HelveticaNeueLTStd-Lt.otf":"http://localhost:3001/HelveticaNeueLTStd-Lt-4f27a4e5a731a020f10179da42fd4df2.otf","HelveticaNeueLTStd-Md.otf":"http://localhost:3001/HelveticaNeueLTStd-Md-db8b90d6037c4eef42c5a2ea7fec4071.otf","HelveticaNeueLTStd-Roman.otf":"http://localhost:3001/HelveticaNeueLTStd-Roman-c50cafe27126364ceb9f08dfd666645f.otf","HelveticaNeueLTStd-Th.otf":"http://localhost:3001/HelveticaNeueLTStd-Th-07007f413fcadd68f44e805e711fe3b9.otf","HelveticaNeueLTStd-UltLt.otf":"http://localhost:3001/HelveticaNeueLTStd-UltLt-a1c58ee84e44dea57f5dccc86ac7c9ca.otf","athlete_portal.png":"http://localhost:3001/athlete_portal-f9f515b63e72346148bf48c2dc227b1f.png","coaching_portal.jpg":"http://localhost:3001/coaching_portal-832bd3cd2efefb515d23050172f99818.jpg","deadlift_guy.001.jpg":"http://localhost:3001/deadlift_guy.001-396092ac4388438e7243d6e63e67a85b.jpg","main.js":"http://localhost:3001/main.js","repone_render.png":"http://localhost:3001/repone_render-de35d69a0bebca1abaa1647cbe8906b8.png","repone_screenshot_dashboard_browser.png":"http://localhost:3001/repone_screenshot_dashboard_browser-4654c44dce90ec70dd4908310a46354f.png","repone_screenshot_live_browser.png":"http://localhost:3001/repone_screenshot_live_browser-387b26d2a3ea7d84be0ddbfa76cf5afe.png","screenshot_athlete_tablet_short.png":"http://localhost:3001/screenshot_athlete_tablet_short-6bd2461c2ad976a35233e39f1ad841fa.png"}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map