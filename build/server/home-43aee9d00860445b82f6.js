exports.ids = [0];
exports.modules = {

/***/ 23:
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2EMsY",
	"section": "styles-section--1EFYD",
	"main": "styles-main--3_9Z8",
	"button": "styles-button--3v_u5"
};

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--3r-XT",
	"section": "styles-section--REPrO",
	"main": "styles-main--28EZO",
	"button": "styles-button--27StL",
	"bg": "styles-bg--3XkJh",
	"herovid": "styles-herovid--2MsOt",
	"heroimg": "styles-heroimg--30r4X",
	"rolotext": "styles-rolotext--J34eQ",
	"change": "styles-change--Xg5PP"
};

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = {
	"videocontainer": "styles-videocontainer--2m0vV",
	"fixed": "styles-fixed--2brzj",
	"relativebottom": "styles-relativebottom--6J3Oh",
	"relativetop": "styles-relativetop--14Vlj",
	"sticky": "styles-sticky--3oq45"
};

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--Kn0Rx",
	"section": "styles-section--2EfO1",
	"main": "styles-main--3ytPE",
	"button": "styles-button--1KYpr",
	"subsection": "styles-subsection--pPyLO",
	"textcontainer": "styles-textcontainer--5Gli_",
	"subcontainer": "styles-subcontainer--3gkHy",
	"placeholder": "styles-placeholder--rmBbJ"
};

/***/ }),

/***/ 27:
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

/***/ 28:
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

/***/ 29:
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

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--qkU_9",
	"section": "styles-section--2zhc1",
	"main": "styles-main--3Odib",
	"button": "styles-button--2Opq9",
	"teamlogocontainer": "styles-teamlogocontainer--pMkqy",
	"logocontainer": "styles-logocontainer--1csu4",
	"change": "styles-change--3NDHd",
	"teamlogo": "styles-teamlogo--39qbP",
	"textcontainer": "styles-textcontainer--IK6Jf"
};

/***/ }),

/***/ 31:
/***/ (function(module, exports) {



/***/ }),

/***/ 32:
/***/ (function(module, exports) {



/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = {
	"container": "styles-container--2jQXM",
	"section": "styles-section--uYLz3",
	"main": "styles-main--2KY_E",
	"button": "styles-button--ejX7w"
};

/***/ }),

/***/ 34:
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/components/App/Shared/Video/index.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);




class Video extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 0,
      duration: props.duration - 1,
      timeremaing: props.duration - 1,
      location: 0,
      scrollable: props.scrollable,
      yoffset: 0,
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
  }

  keyHandler(e) {
    if (this.keys[e.keyCode]) {
      this.scrollHandler(e);
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
      const imageurl = `https://assets.reponestrength.com/repone_large${i > 9 ? '00' : '000'}${filename}`;
      const image = new Image();
      image.src = imageurl;
      this.images.push(image);
    }

    // draw thumbnail
    const width = window.innerWidth;
    const height = window.innerWidth * 0.5625;
    this.canvas.width = width;
    this.canvas.height = height;

    this.updateinterval = setInterval(() => {
      this.selectframe();
      this.drawcanvas();
      this.update();
    }, 1);

    // initiate scroll listeners
    if (this.props.scrollable) {
      this.addScrollListener();
      this.selectframe();
      this.drawcanvas();
    }
  }

  componentWillUnmount() {
    clearInterval(this.checkInterval);
  }

  update() {
    const width = window.innerWidth;
    const height = 0.5625 * width;

    if (width !== this.state.width) {
      this.canvas.width = width;
      this.canvas.height = height;
    }

    this.setState({ top, width, height });
    this.updateScrollableState(top);
  }

  updateScrollableState() {
    if (this.state.direction > 0 && this.canvasisinview() && this.state.timeremaing) {
      if (!this.state.preventUserScroll) {
        this.disableScroll();
      }
    } else if (this.state.direction < 0 && this.canvasisinview() && this.state.location > 5) {
      if (!this.state.preventUserScroll) {
        this.disableScroll();
      }
    } else {
      this.enableScroll();
    }
  }

  canvasisinview() {
    const direction = this.state.direction;
    const container = this.container.getBoundingClientRect();
    const canvas = this.canvas.getBoundingClientRect();
    if (direction > 0 && container.top <= 0) {
      return true;
    } else if (direction < 0 && canvas.top >= 0) {
      return true;
    }
    return false;
  }

  canvasposition() {
    if (this.container) {
      console.log(this.container.getBoundingClientRect().top);
    }
    if (this.container) {
      const container = this.container.getBoundingClientRect();
      if (container.top <= 0) {
        return __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.relativebottom;
      }
      return __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.relativetop;
    }
  }

  selectframe() {
    if (!this.state.image) {
      this.setState({ image: this.images[0] });
    } else if (this.state.preventUserScroll) {
      const rect = this.container.getBoundingClientRect();
      const location = rect.top < 0 ? Math.abs(rect.top) : 0;
      const mod = (this.container.offsetHeight - this.canvas.offsetHeight) / this.images.length;
      let image = Math.round(location / mod);
      image = image > this.images.length - 1 ? this.images.length - 1 : image;
      image = image < 0 ? 0 : image;

      const remaining = this.state.duration - image;

      this.setState({
        image: this.images[image],
        timeremaing: remaining,
        location,
        yoffset: window.pageYOffset
      });
    }
  }

  drawcanvas() {
    if (this.context && this.state.image) {
      this.context.drawImage(this.state.image, 0, 0, this.state.width, this.state.height);
    }
  }

  render() {
    const canvasposition = this.canvasposition();
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        ref: node => {
          this.container = node;
        },
        className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.videocontainer
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', {
        className: this.state.preventUserScroll ? __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.fixed : canvasposition,
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
/* harmony default export */ var Video_defaultExport = (Video);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Landing/index.js
/* harmony import */ var Landing___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Landing___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Landing___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);




class Landing extends Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section },
      Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.bg },
        Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'video',
          { autoPlay: 'true', muted: 'true', loop: 'true', className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.herovid },
          Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { src: 'http://assets.reponestrength.com/hero_movie_no_sound.m4v', type: 'video/mp4' })
        ),
        Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.heroimg, src: 'http://assets.reponestrength.com/hero_mobile_full_screen.jpg' })
      ),
      Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
        Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Win in the weight room',
          Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.rolotext },
            Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'Win'
              ),
              Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the field'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the court'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'in the rink'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the pitch'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the track'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'in the pool'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the road'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the slope'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'on the field'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'in the games'
                ),
                Landing___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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

/* harmony default export */ var Landing_defaultExport = (Landing);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Analytics/index.js
/* harmony import */ var Analytics___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Analytics___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Analytics___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(26);
/* harmony import */ var Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Analytics extends Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'analytics' },
      Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
        Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'The RepOne Platform'
        ),
        Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Weight room analytics for sports teams.'
        ),
        Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subcontainer },
          Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subsection },
            Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
              Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://assets.reponestrength.com/athlete_kiosk.jpg' })
            ),
            Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer },
              Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'Athlete Kiosk App'
                ),
                Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Athlete identification and individualized training for your whole team.'
                )
              )
            )
          ),
          Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subsection },
            Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
              Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://assets.reponestrength.com/coach_portal.jpg' })
            ),
            Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer },
              Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'Coaching Portal'
                ),
                Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Full-roster capabilities and athlete performance monitoring in real-time using our unique metrics'
                )
              )
            )
          ),
          Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.subsection },
            Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.placeholder },
              Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://assets.reponestrength.com/repone_render.png' })
            ),
            Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Analytics___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer },
              Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'RepOne Devices'
                ),
                Analytics___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'A fleet of extraordinarily accurate, portable devices you place on each training station.'
                )
              )
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ var Analytics_defaultExport = (Analytics);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Platform/index.js
/* harmony import */ var Platform___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Platform___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Platform___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(27);
/* harmony import */ var Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Platform extends Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'platform' },
      Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
        Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'THE REPONE COACHING PORTAL'
        ),
        Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Your workout cards, players manual, Excel, and more. Simplified.'
        ),
        Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://assets.reponestrength.com/screenshot_athlete.png', alt: 'autoregulation' })
          ),
          Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.right}` },
            Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'INDIVIDUALIZED TRAINING'
              ),
              Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Our data science helps you make individualized coaching logistically possible. You\'re in control. Easily create programs for a team, then drag and drop changes for groups or individuals. Work around injuries and reduce recovery time.'
                )
              )
            )
          )
        ),
        Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'UPDATES IN REAL-TIME'
              ),
              Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'Get a closer look at your athletes performance in real-time with updates from each of your training stations. Make modifications on the fly from across the weight room. Set velocity thresholds and automatic guidance to your exact specifications.'
                )
              )
            )
          ),
          Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://assets.reponestrength.com/screenshot_live.png', alt: 'autoregulation' })
          )
        ),
        Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.image} ${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.left}` },
            Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://assets.reponestrength.com/screenshot_dashboard.png', alt: 'autoregulation' })
          ),
          Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: `${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.textcontainer} ${Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.right}` },
            Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: Platform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.text },
              Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                null,
                'PERFORMANCE METRICS'
              ),
              Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                Platform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  'RepOne keeps track of your team so they\'re ready for game day. See how your athletes are performing day to day, week to week, season to season. Time tested metrics like tonnage and fatigue recorded and compiled automatically.'
                )
              )
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ var Platform_defaultExport = (Platform);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Insights/index.js
/* harmony import */ var Insights___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Insights___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Insights___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Insights___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(28);
/* harmony import */ var Insights___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(Insights___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



function Insights() {
  return Insights___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: Insights___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'insights' },
    Insights___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: Insights___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      Insights___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'REPONE INSIGHTS'
      ),
      Insights___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Industry-leading 3D sensing makes the invisible, visible.'
      ),
      Insights___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: Insights___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.diagram },
        Insights___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: Insights___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.diagramcontainer },
          Insights___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://assets.reponestrength.com/deadlift_guy.jpg' })
        )
      )
    )
  );
}

/* harmony default export */ var Insights_defaultExport = (Insights);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Exploded/index.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var Exploded___WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(29);
/* harmony import */ var Exploded___WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(Exploded___WEBPACK_IMPORTED_MODULE_2__styles_scss__);




function Exploded() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { className: Exploded___WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.section, id: 'insights' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: Exploded___WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.main },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Video_defaultExport, {
        autoPlay: 'true',
        muted: 'true',
        loop: 'true',
        duration: 59,
        className: Exploded___WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.video,
        scrollable: true,
        src: 'https://demo.vmg.nyc/greg/repone/repone_large.mp4',
        type: 'video/mp4'
      })
    )
  );
}

/* harmony default export */ var Exploded_defaultExport = (Exploded);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Teams/index.js
/* harmony import */ var Teams___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Teams___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Teams___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(30);
/* harmony import */ var Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
const images = ['http://assets.reponestrength.com/1.png', 'http://assets.reponestrength.com/2.png', 'http://assets.reponestrength.com/3.png', 'http://assets.reponestrength.com/4.png', 'http://assets.reponestrength.com/5.png', 'http://assets.reponestrength.com/6.png', 'http://assets.reponestrength.com/7.png'];

function Teams() {
  return Teams___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'teams' },
    Teams___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
      Teams___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'FROM THE CREATORS OF OPENBARBELL'
      ),
      Teams___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Trusted by some of the best teams in the world.'
      ),
      Teams___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogocontainer },
        images.map((image, key) => Teams___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: key, className: Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.logocontainer },
          Teams___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: Teams___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.teamlogo, src: image, alt: 'logo' })
        ))
      )
    )
  );
}

/* harmony default export */ var Teams_defaultExport = (Teams);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/CTA/components/teamform/index.js
/* harmony import */ var teamform___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var teamform___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(teamform___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var teamform___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(31);
/* harmony import */ var teamform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(teamform___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class TeamForm extends teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      job: '',
      email: '',
      phone1: '',
      phone2: '',
      phone3: '',
      organization: '',
      teams: '',
      athletes: '',
      stations: '',
      other: ''
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = false;
    script.setAttribute("id", "mailchimp team validate");
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "http://assets.reponestrength.com/mailchimp.teams.js";
    script2.async = false;
    script2.setAttribute("id", "mailchimp team repone");
    document.body.appendChild(script2);
  }

  componentWillUnmount() {
    try {
      const script = document.getElementById("mailchimp team validate");
      script.parentNode.removeChild(script);

      const script2 = document.getElementById("mailchimp team repone");
      script2.parentNode.removeChild(script2);
    } catch (e) {
      console.log("Scripts don't exist");
    }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleJobChange(event) {
    this.setState({ job: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneChange1(event) {
    this.setState({ phone1: event.target.value });
  }

  handlePhoneChange2(event) {
    this.setState({ phone2: event.target.value });
  }

  handlePhoneChange3(event) {
    this.setState({ phone3: event.target.value });
  }

  handleOrganizationChange(event) {
    this.setState({ organization: event.target.value });
  }

  handleTeamsChange(event) {
    this.setState({ teams: event.target.value });
  }

  handleAthletesChange(event) {
    this.setState({ athletes: event.target.value });
  }

  handleStationsChange(event) {
    this.setState({ stations: event.target.value });
  }

  handleOtherChange(event) {
    this.setState({ other: event.target.value });
  }

  render() {
    return teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'mc_embed_signup' },
      teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { action: 'https://squatsandscience.us12.list-manage.com/subscribe/post?u=a3cf758809f155c2dd9a85297&id=bc978fccc8', method: 'post', id: 'mc-embedded-subscribe-form', name: 'mc-embedded-subscribe-form', className: 'validate', target: '_blank', noValidate: true },
        teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'mc_embed_signup_scroll' },
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'indicates-required' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'asterisk' },
              '*'
            ),
            ' indicates required'
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'mce-NAME' },
              teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'asterisk' },
                '*'
              )
            ),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.name, name: 'NAME', className: 'required', id: 'mce-NAME', placeholder: 'name', onChange: this.handleNameChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-JOBTITLE' }),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.job, name: 'JOBTITLE', className: '', id: 'mce-JOBTITLE', placeholder: 'job title', onChange: this.handleJobChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group size1of2' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-PHONE' }),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'phonefield phonefield-us' },
              '(',
              teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'phonearea' },
                teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'phonepart ', pattern: '[0-9]*', id: 'mce-PHONE-area', name: 'PHONE[area]', maxLength: '3', size: '3', value: this.state.phone1, type: 'text', onChange: this.handlePhoneChange1.bind(this) })
              ),
              ')',
              teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'phonedetail1' },
                teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'phonepart ', pattern: '[0-9]*', id: 'mce-PHONE-detail1', name: 'PHONE[detail1]', maxLength: '3', size: '3', value: this.state.phone2, type: 'text', onChange: this.handlePhoneChange2.bind(this) })
              ),
              ' -',
              teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'phonedetail2' },
                teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'phonepart ', pattern: '[0-9]*', id: 'mce-PHONE-detail2', name: 'PHONE[detail2]', maxLength: '4', size: '4', value: this.state.phone3, type: 'text', onChange: this.handlePhoneChange3.bind(this) })
              ),
              teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'small-meta nowrap' },
                '(###) ###-####'
              )
            )
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'mce-EMAIL' },
              teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'asterisk' },
                '*'
              )
            ),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', value: this.state.email, name: 'EMAIL', className: 'required email', id: 'mce-EMAIL', placeholder: 'email', onChange: this.handleEmailChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'mce-ORGNAME' },
              teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'asterisk' },
                '*'
              )
            ),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.organization, name: 'ORGNAME', className: 'required', id: 'mce-ORGNAME', placeholder: 'organization', onChange: this.handleOrganizationChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group size1of2' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-NUMTEAMS' }),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', name: 'NUMTEAMS', className: '', value: this.state.teams, id: 'mce-NUMTEAMS', placeholder: '# teams', onChange: this.handleTeamsChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group size1of2' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-NUMATHLETE' }),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', name: 'NUMATHLETE', className: '', value: this.state.athletes, id: 'mce-NUMATHLETE', placeholder: '# athletes', onChange: this.handleAthletesChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group size1of2' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-NUMSTATION' }),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', name: 'NUMSTATION', className: '', value: this.state.stations, id: 'mce-NUMSTATION', placeholder: '# training stations you want to outfit', onChange: this.handleStationsChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-OTHER' }),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.other, name: 'OTHER', className: '', id: 'mce-OTHER', placeholder: 'anything else?', onChange: this.handleOtherChange.bind(this) })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'mce-responses', className: 'clear' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response', id: 'mce-error-response', style: { display: 'none' } }),
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response', id: 'mce-success-response', style: { display: 'none' } })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { position: 'absolute', left: -5000 }, 'aria-hidden': 'true' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'b_a3cf758809f155c2dd9a85297_bc978fccc8', tabIndex: '-1', value: '' })
          ),
          teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'clear' },
            teamform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', value: 'Get in touch', name: 'subscribe', id: 'mc-embedded-subscribe', className: 'button' })
          )
        )
      )
    );
  }
}

/* harmony default export */ var teamform_defaultExport = (TeamForm);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/CTA/components/individualform/index.js
/* harmony import */ var individualform___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var individualform___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(individualform___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var individualform___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(32);
/* harmony import */ var individualform___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(individualform___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class IndividualForm extends individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone1: '',
      phone2: '',
      phone3: '',
      other: ''
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = false;
    script.setAttribute("id", "mailchimp individual validate");
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "http://assets.reponestrength.com/mailchimp.individual.js";
    script2.async = false;
    script2.setAttribute("id", "mailchimp individual repone");
    document.body.appendChild(script2);
  }

  componentWillUnmount() {
    try {
      const script = document.getElementById("mailchimp individual validate");
      script.parentNode.removeChild(script);

      const script2 = document.getElementById("mailchimp individual repone");
      script2.parentNode.removeChild(script2);
    } catch (e) {
      console.log("Scripts don't exist");
    }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneChange1(event) {
    this.setState({ phone1: event.target.value });
  }

  handlePhoneChange2(event) {
    this.setState({ phone2: event.target.value });
  }

  handlePhoneChange3(event) {
    this.setState({ phone3: event.target.value });
  }

  handleOtherChange(event) {
    this.setState({ other: event.target.value });
  }

  render() {
    return individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'mc_embed_signup' },
      individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { action: 'https://squatsandscience.us12.list-manage.com/subscribe/post?u=a3cf758809f155c2dd9a85297&id=c8b6623f1e', method: 'post', id: 'mc-embedded-subscribe-form', name: 'mc-embedded-subscribe-form', className: 'validate', target: '_blank', noValidate: true },
        individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'mc_embed_signup_scroll' },
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'indicates-required' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'asterisk' },
              '*'
            ),
            ' indicates required'
          ),
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'mce-NAME' },
              individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'asterisk' },
                '*'
              )
            ),
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.name, name: 'NAME', className: 'required', id: 'mce-NAME', placeholder: 'name', onChange: this.handleNameChange.bind(this) })
          ),
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'mce-EMAIL' },
              individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'asterisk' },
                '*'
              )
            ),
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', value: this.state.email, name: 'EMAIL', className: 'required email', id: 'mce-EMAIL', placeholder: 'email', onChange: this.handleEmailChange.bind(this) })
          ),
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group size1of2' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-PHONE' }),
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'phonefield phonefield-us' },
              '(',
              individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'phonearea' },
                individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'phonepart ', pattern: '[0-9]*', id: 'mce-PHONE-area', name: 'PHONE[area]', maxLength: '3', size: '3', value: this.state.phone1, type: 'text', onChange: this.handlePhoneChange1.bind(this) })
              ),
              ')',
              individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'phonedetail1' },
                individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'phonepart ', pattern: '[0-9]*', id: 'mce-PHONE-detail1', name: 'PHONE[detail1]', maxLength: '3', size: '3', value: this.state.phone2, type: 'text', onChange: this.handlePhoneChange2.bind(this) })
              ),
              ' -',
              individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'phonedetail2' },
                individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'phonepart ', pattern: '[0-9]*', id: 'mce-PHONE-detail2', name: 'PHONE[detail2]', maxLength: '4', size: '4', value: this.state.phone3, type: 'text', onChange: this.handlePhoneChange3.bind(this) })
              ),
              individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'small-meta nowrap' },
                '(###) ###-####'
              )
            )
          ),
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mc-field-group' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label', { htmlFor: 'mce-OTHER' }),
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: this.state.other, name: 'OTHER', className: '', id: 'mce-OTHER', placeholder: 'anything else?', onChange: this.handleOtherChange.bind(this) })
          ),
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'mce-responses', className: 'clear' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response', id: 'mce-error-response', style: { display: 'none' } }),
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'response', id: 'mce-success-response', style: { display: 'none' } })
          ),
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { position: 'absolute', left: -5000 }, 'aria-hidden': 'true' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'b_a3cf758809f155c2dd9a85297_bc978fccc8', tabIndex: '-1', value: '' })
          ),
          individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'clear' },
            individualform___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', value: 'Join waitlist', name: 'subscribe', id: 'mc-embedded-subscribe', className: 'button' })
          )
        )
      )
    );
  }
}

/* harmony default export */ var individualform_defaultExport = (IndividualForm);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/CTA/index.js
/* harmony import */ var CTA___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var CTA___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(CTA___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Toggle__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Toggle__);

// import styles from './styles.css';




// TODO: move this to a css file if possible
// If it's possible to move it to a scss even better, but it seems unlikely
const styles = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: '#ffcccc'
  },
  trackOff: {
    backgroundColor: '#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red'
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d'
  }
};

class CTA_CTA extends CTA___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.state = {
      showingTeams: true
    };
  }

  handleToggleChange() {
    this.setState({ showingTeams: !this.state.showingTeams });
  }

  _renderForm() {
    if (this.state.showingTeams) {
      return CTA___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(teamform_defaultExport, null);
    } else {
      return CTA___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(individualform_defaultExport, null);
    }
  }

  render() {
    return CTA___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: styles.block },
      CTA___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Toggle___default.a, {
        label: '',
        toggled: !this.state.showingTeams,
        onToggle: this.handleToggleChange.bind(this),
        thumbStyle: styles.thumbOff,
        trackStyle: styles.trackOff,
        thumbSwitchedStyle: styles.thumbSwitched,
        trackSwitchedStyle: styles.trackSwitched
      }),
      this._renderForm()
    );
  }

}

/* harmony default export */ var CTA_defaultExport = (CTA_CTA);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Price/index.js
/* harmony import */ var Price___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Price___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Price___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Price___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(33);
/* harmony import */ var Price___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(Price___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Price extends Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: Price___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.section, id: 'platform' },
      Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: Price___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.main },
        Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'Flexible pricing to fit your organization'
        ),
        Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: Price___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
          Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://assets.reponestrength.com/simple_court.svg' }),
          Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://assets.reponestrength.com/court_seats.svg' }),
          Price___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'http://assets.reponestrength.com/stadium.svg' })
        )
      )
    );
  }
}

/* harmony default export */ var Price_defaultExport = (Price);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/Modal/index.js
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(34);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_1__styles_scss__);



class Modal extends Modal___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
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
    return Modal___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: Modal___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.modalcontainer },
      Modal___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: Modal___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.modal },
        Modal___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          this.props.title
        ),
        Modal___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          this.props.message
        ),
        Modal___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: this.props.link },
          this.props.linktext
        )
      )
    );
  }
}

/* harmony default export */ var Modal_defaultExport = (Modal);
// CONCATENATED MODULE: ./src/components/App/Routes/Home/index.js
/* harmony import */ var Home___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Home___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Home___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Home___WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__(23);
/* harmony import */ var Home___WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(Home___WEBPACK_IMPORTED_MODULE_1__styles_scss__);












function Home() {
  return Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: Home___WEBPACK_IMPORTED_MODULE_1__styles_scss___default.a.container },
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Landing_defaultExport, null),
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Analytics_defaultExport, null),
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Platform_defaultExport, null),
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Insights_defaultExport, null),
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Exploded_defaultExport, null),
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Teams_defaultExport, null),
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Price_defaultExport, null),
    Home___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CTA_defaultExport, null)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};;
//# sourceMappingURL=home-43aee9d00860445b82f6.js.map