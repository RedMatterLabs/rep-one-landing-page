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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);




class Video extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration - 1,
      timeremaing: props.duration - 1,
      location: 0,
      scrollable: props.scrollable,
      preventUserScroll: false,
      scrolled: 0,
      direction: 0,
      top: 0,
      width: 0,
      height: 0
    };

    this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  }

  scrollHandler(e) {
    e = e || window.event;
    const newscrollposition = this.state.scrolled + e.deltaY;
    const direction = e.deltaY;
    this.setState({ scrolled: newscrollposition, direction });
    this.update();

    if (this.state.preventUserScroll) {
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
      this.scrubvideo();
    }
  }

  keyHandler(e) {
    if (this.keys[e.keyCode]) {
      this.scrollHandler(e);
      return false;
    }

    return true;
  }

  addScrollListener() {
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', this.scrollHandler.bind(this), false);
    }

    window.onwheel = this.scrollHandler.bind(this); // modern standard
    window.onmousewheel = this.scrollHandler.bind(this);
    document.onmousewheel = this.scrollHandler.bind(this); // older browsers, IE
    window.ontouchmove = this.scrollHandler.bind(this); // mobile
    document.onkeydown = this.keyHandler.bind(this);
  }

  disableScroll() {
    this.setState({ preventUserScroll: true });
  }

  enableScroll() {
    this.setState({ preventUserScroll: false });
  }

  componentDidMount() {
    // preload images.
    this.images = [];

    for (let i = 0; i < this.props.duration; i++) {
      const filename = `${i}.jpg`;
      const imageurl = `https://demo.vmg.nyc/greg/parallax/other/repone_large${i > 9 ? '00' : '000'}${filename}`;
      const image = new Image();
      image.src = imageurl;
      this.images.push(image);
    }

    // draw thumbnail
    const width = window.innerWidth;
    const height = window.innerWidth * .5625;
    this.canvas.width = width;
    this.canvas.height = height;
    this.context.drawImage(this.images[0], 0, 0, width, height);

    // initiate scroll listeners
    if (this.props.scrollable) {
      this.addScrollListener();
      this.scrubvideo();
      this.checkInterval = setInterval(() => {
        this.update();
      }, 5);
    }
  }

  componentWillUnmount() {
    clearInterval(this.checkInterval);
  }

  update() {
    const width = window.innerWidth;
    const height = .5625 * width;

    if (width !== this.state.width) {
      this.canvas.width = width;
      this.canvas.height = height;
    }

    this.setState({ top, width, height });
    this.updateScrollableState(top);
  }

  updateScrollableState(top) {
    if (this.canvasisinview() && this.state.timeremaing) {
      if (!this.state.preventUserScroll) {
        this.disableScroll();
      }
    } else if (this.state.direction < 0 && this.canvasisinview() && this.state.timeremaing < this.state.duration) {
      if (!this.state.preventUserScroll) {
        this.disableScroll();
      }
    } else {
      this.enableScroll();
    }
  }

  canvasisinview() {
    const direction = this.state.direction;
    let rect = this.canvas.getBoundingClientRect();
    console.log(rect, rect.top - 65);
    if (direction > 0 && rect.top - 65 <= 0) {
      return true;
    } else if (direction < 0 && rect.top - 65 >= 0) {
      return true;
    }
    return false;
  }

  scrubvideo() {
    const direction = this.state.direction;
    let location = this.state.location;
    location += direction;
    const image = Math.round(location / 100);
    console.log(image);
    const remaining = this.state.duration - image;
    this.context.drawImage(this.images[image], 0, 0, this.state.width, this.state.height);
    this.setState({ timeremaing: remaining, location });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.videocontainer },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', {
        className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.canvas,
        ref: node => {
          if (node) {
            this.canvas = node;
            this.context = node.getContext('2d');
          }
        }
      })
    );
  }
}

Video.propTypes = {
  scrollable: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_lib_RouterContext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_lib_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_lib_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_lib_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__template__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(11);












const clientAssets = __webpack_require__(60); // eslint-disable-line import/no-dynamic-require
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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/RouterContext");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/createMemoryHistory");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/match");

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_lib_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_lib_IndexRoute__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_App__ = __webpack_require__(14);





// Webpack 2 supports ES2015 `import()` by auto-
// chunking assets. Check out the following for more:
// https://webpack.js.org/guides/migrating/#code-splitting-with-es2015

const importHome = (nextState, cb) => {
  new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)).then(module => cb(null, module.default)).catch(e => {
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/Route");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router/lib/IndexRoute");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_index_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer_index_js__ = __webpack_require__(19);





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
/* 15 */
/***/ (function(module, exports) {

module.exports = {
	"content": "styles-content--2jscW"
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(17);
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.logo, src: __webpack_require__(18) })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: '#cta', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.button },
          'Get in touch'
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--omZoF",
	"section": "styles-section--2AtxK",
	"main": "styles-main--3lRdS",
	"button": "styles-button--3-N3I",
	"header": "styles-header--42xaK",
	"logo": "styles-logo---zSpO"
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/repone-c15c79aab4b3da53b96a20c6c9a4f14e.png";

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.footer },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
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
              '415 Wythe Ave'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              'Brooklyn, NY 11249'
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
            { href: 'mailto:sales@reponestrength.com' },
            'sales@reponestrength.com'
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
                { href: 'https://github.com/squatsandsciencelabs/', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-github' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'https://www.facebook.com/RepOneStrength', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-facebook' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'https://www.instagram.com/reponestrength/', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-instagram' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'https://twitter.com/RepOneStrength', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.socialIcon },
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'icon fa fa-twitter' })
              )
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_App_Routes_Home_Landing_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_src_components_App_Routes_Home_Analytics_index_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_src_components_App_Routes_Home_Platform_index_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_src_components_App_Routes_Home_Insights_index_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_components_App_Routes_Home_Exploded_index_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_components_App_Routes_Home_Teams_index_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_src_components_App_Routes_Home_CTA_index_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_src_components_App_Routes_Home_Price_index_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_src_components_App_Routes_Home_Modal_index_js__ = __webpack_require__(58);












function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_src_components_App_Routes_Home_Modal_index_js__["a" /* default */], { link: 'https://www.youtube.com/watch?v=uWIAo2XFcX4', linktext: 'Check out this tech demonstration for our new 3D sensing.', title: 'Hi there!', message: 'This page is a work in progress, it`ll be going live soon. If you`re seeing this message, then there`s still work left to do.' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_src_components_App_Routes_Home_Landing_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_src_components_App_Routes_Home_Analytics_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_src_components_App_Routes_Home_Platform_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_src_components_App_Routes_Home_Insights_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_src_components_App_Routes_Home_Exploded_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_src_components_App_Routes_Home_Teams_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_src_components_App_Routes_Home_Price_index_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_src_components_App_Routes_Home_CTA_index_js__["a" /* default */], null)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2EMsY",
	"section": "styles-section--1EFYD",
	"main": "styles-main--3_9Z8",
	"button": "styles-button--3v_u5"
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_src_components_App_Shared_Video_index_js__ = __webpack_require__(1);




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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.rolotext },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'Win'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the field'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the court'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'in the rink'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the pitch'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the track'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'in the pool'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the road'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the slope'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the field'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'in the games'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'in the ring'
                )
              )
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Landing);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--3r-XT",
	"section": "styles-section--REPrO",
	"main": "styles-main--28EZO",
	"button": "styles-button--27StL",
	"bg": "styles-bg--3XkJh",
	"herovid": "styles-herovid--2MsOt",
	"rolotext": "styles-rolotext--J34eQ",
	"change": "styles-change--Xg5PP"
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"videocontainer": "styles-videocontainer--2m0vV"
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(27);
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
          'The RepOne Platform'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Weight room analytics for sports teams.'
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
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(28) })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'Athlete Kiosk App'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Athlete identification and individualized training for your whole team.'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subsection },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(29) })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
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
              )
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
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'RepOne Devices'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'A fleet of extraordinarily accurate, portable devices you place on each training station.'
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.weightroom },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(31) })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Analytics);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--Kn0Rx",
	"section": "styles-section--2EfO1",
	"main": "styles-main--3ytPE",
	"button": "styles-button--1KYpr",
	"subsection": "styles-subsection--pPyLO",
	"subcontainer": "styles-subcontainer--3gkHy",
	"placeholder": "styles-placeholder--rmBbJ",
	"textcontainer": "styles-textcontainer--5Gli_",
	"weightroom": "styles-weightroom--qpcrr"
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/athlete_kiosk-1e3958dba1c56ae657d1adc432f1b7b1.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/coach_portal-4b44850aa4f91ac66b4a44c9736f4ce9.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/repone_render-de35d69a0bebca1abaa1647cbe8906b8.png";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/weightroom-962feb66bb082c5289de1af9060099c0.jpg";

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
          'THE REPONE COACHING PORTAL'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Your workout cards, players manual, Excel, and more. Simplified.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(34), alt: 'autoregulation' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.right}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'INDIVIDUALIZED TRAINING'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Our data science helps you make individualized coaching logistically possible.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'You\'re in control. Easily create programs for a team, then drag and drop changes for groups or individuals.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Work around injuries and reduce recovery time.'
                )
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
                'UPDATES IN REAL-TIME'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Get a closer look at your athletes performance in real-time with updates from each of your training stations.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Make modifications on the fly from across the weight room.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Set velocity thresholds and automatic guidance to your exact specifications.'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(35), alt: 'autoregulation' })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(36), alt: 'autoregulation' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${__WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.right}` },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'PERFORMANCE METRICS'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'RepOne keeps track of your team so they\'re ready for game day.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'See how your athletes are performing day to day, week to week, season to season.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Time tested metrics like tonnage and fatigue recorded and compiled automatically.'
                )
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
	"right": "styles-right--1NYYJ",
	"text": "styles-text--WHbXm",
	"left": "styles-left--1klzJ",
	"logo": "styles-logo--38G6L"
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/screenshot_athlete-a19f612ea08909598e5a13a3c32bc44a.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/screenshot_live-6b3e09aea703e42863b84d36c03da3a5.png";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/screenshot_dashboard-a828e13cbfe9ffc5b82f043c60bb03b1.png";

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
        'REPONE INSIGHTS'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Industry-leading 3D sensing makes the invisible, visible.'
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

module.exports = "http://localhost:3001/jacob-92100213440eb600a301382277698c2a.jpg";

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_components_App_Shared_Video_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);




function Exploded() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.section, id: 'insights' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.diagram },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.explosioncontainer },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_src_components_App_Shared_Video_index_js__["a" /* default */], {
            autoPlay: 'true',
            muted: 'true',
            loop: 'true',
            duration: 59,
            className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.video,
            scrollable: true,
            src: 'https://demo.vmg.nyc/greg/repone/repone_large.mp4',
            type: 'video/mp4'
          })
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



// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
const images = [__webpack_require__(44), __webpack_require__(45), __webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50)];

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
        'FROM THE CREATORS OF OPENBARBELL'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Trusted by some of the best teams in the world.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogocontainer },
        images.map((image, key) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: key, className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.logocontainer },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogo, src: image, alt: 'logo' })
        ))
      )
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Teams);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--qkU_9",
	"section": "styles-section--2zhc1",
	"main": "styles-main--3Odib",
	"button": "styles-button--2Opq9",
	"teamlogocontainer": "styles-teamlogocontainer--pMkqy",
	"logocontainer": "styles-logocontainer--1csu4",
	"change": "styles-change--3NDHd",
	"teamlogo": "styles-teamlogo--39qbP"
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/1-41aa42702fd9932246a9371c5dfbb0f7.png";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/2-654a85dcc680ed22d8c2eb6159b2132c.png";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/3-55aff29752ab76572d2b27318775b25f.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/4-cf69f3f1a2240c3f41ae23b4e1e641cc.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/5-346ee073ccef60fbcec7c597fd07844d.png";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/6-edb3c982da439d6b5f4c310095432a78.png";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/7-bbf89db8cac7ea9a0db70ccf5826a03c.png";

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(52);
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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Price extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
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
          'Flexible pricing to fit your organization'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(55) }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(56) }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(57) })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Price);

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2jQXM",
	"section": "styles-section--uYLz3",
	"main": "styles-main--2KY_E",
	"button": "styles-button--ejX7w"
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/simple_court-b0213b6cac3af4f5a2ebadf84509258e.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/court_seats-58dfacc1b6b474b2b678680b4f1694dd.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "http://localhost:3001/stadium-f3a5d52b94d6fe16316f6e6d9ecebd2f.svg";

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Modal extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      top: 1,
      height: -1,
      scrolling: false
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.modalcontainer },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.modal },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          this.props.message
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: this.props.link },
          this.props.linktext
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--4eHc2",
	"section": "styles-section--1LWL7",
	"main": "styles-main--2XKCU",
	"button": "styles-button--3Oc_a",
	"modalcontainer": "styles-modalcontainer--1IaF1",
	"modal": "styles-modal--2o2D4"
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {"1.png":"http://localhost:3001/1-41aa42702fd9932246a9371c5dfbb0f7.png","2.png":"http://localhost:3001/2-654a85dcc680ed22d8c2eb6159b2132c.png","3.png":"http://localhost:3001/3-55aff29752ab76572d2b27318775b25f.png","4.png":"http://localhost:3001/4-cf69f3f1a2240c3f41ae23b4e1e641cc.png","5.png":"http://localhost:3001/5-346ee073ccef60fbcec7c597fd07844d.png","6.png":"http://localhost:3001/6-edb3c982da439d6b5f4c310095432a78.png","7.png":"http://localhost:3001/7-bbf89db8cac7ea9a0db70ccf5826a03c.png","athlete_kiosk.jpg":"http://localhost:3001/athlete_kiosk-1e3958dba1c56ae657d1adc432f1b7b1.jpg","coach_portal.jpg":"http://localhost:3001/coach_portal-4b44850aa4f91ac66b4a44c9736f4ce9.jpg","court_seats.svg":"http://localhost:3001/court_seats-58dfacc1b6b474b2b678680b4f1694dd.svg","jacob.jpg":"http://localhost:3001/jacob-92100213440eb600a301382277698c2a.jpg","main.js":"http://localhost:3001/main.js","repone.png":"http://localhost:3001/repone-c15c79aab4b3da53b96a20c6c9a4f14e.png","repone_render.png":"http://localhost:3001/repone_render-de35d69a0bebca1abaa1647cbe8906b8.png","screenshot_athlete.png":"http://localhost:3001/screenshot_athlete-a19f612ea08909598e5a13a3c32bc44a.png","screenshot_dashboard.png":"http://localhost:3001/screenshot_dashboard-a828e13cbfe9ffc5b82f043c60bb03b1.png","screenshot_live.png":"http://localhost:3001/screenshot_live-6b3e09aea703e42863b84d36c03da3a5.png","simple_court.svg":"http://localhost:3001/simple_court-b0213b6cac3af4f5a2ebadf84509258e.svg","stadium.svg":"http://localhost:3001/stadium-f3a5d52b94d6fe16316f6e6d9ecebd2f.svg","weightroom.jpg":"http://localhost:3001/weightroom-962feb66bb082c5289de1af9060099c0.jpg"}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map