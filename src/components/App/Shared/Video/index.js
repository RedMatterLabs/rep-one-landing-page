import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 0,
      duration: props.duration - 1,
      timeremaing: props.duration - 1,
      location: 0,
      scrollable: props.scrollable,
      scrolled: 0,
      direction: 0,
      top: 0,
      width: 0,
      height: 0,
      xoffset: 0,
      yoffset: 0,
      containerheight: 0,
      canvaswidth: 0,
      canvasheight: 0
    };

    this.yoffset = 0;
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

  componentDidMount() {
    // preload images.
    this.images = [];

    for (let i = 0; i < this.props.duration; i++) {
      const filename = `${i}.jpg`;
      const imageurl = `https://assets.reponestrength.com/repone_large${i > 9
        ? '00'
        : '000'}${filename}`;
      const image = new Image();
      image.src = imageurl;
      this.images.push(image);
    }

    // draw thumbnail
    
    if (this.canvas) {

      if (window.innerWidth > 600) {
      this.updateinterval = setInterval(() => {
        this.update();
        this.selectframe();
        this.drawcanvas();
        }, 16);
      }

      // initiate scroll listeners
      if (this.props.scrollable) {
        this.addScrollListener();
        this.update();
        this.selectframe();
        this.drawcanvas();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.updateinterval);
  }

  update() {
    const rect = this.container.getBoundingClientRect();

    const canvaswidth = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth : window.innerHeight / 0.5625;
    const canvasheight = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth * 0.5625 : window.innerHeight;

    const width = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth : window.innerHeight / 0.5625;
    const height = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth * 0.5625 : window.innerHeight;
    
    let yoffset = rect.top < 0 ? Math.abs(rect.top) : 0;
    yoffset = yoffset + canvasheight > rect.height  ? rect.height - canvasheight : yoffset;
    this.yoffset = yoffset;
    
    const xoffset = (width - window.innerWidth) * -0.5;
    
    this.setState({width, height, xoffset, containerheight: height * 2 + 'px', canvaswidth, canvasheight});
  }

  canvasisinview() {
    if (this.container) {
      const rect = this.container.getBoundingClientRect();
      return (rect.top <= 0 && this.hasframes());  
    }
  }

  hasframes() {
    const rect = this.container.getBoundingClientRect();
    const location = rect.top < 0 ? Math.abs(rect.top) : 0;
    const mod = (this.container.offsetHeight - this.canvas.offsetHeight) / this.images.length;
    let image = Math.round(location / mod);
    return (Boolean(this.images[image]));
  }

  canvasposition() {
    if (this.container) {
      const container = this.container.getBoundingClientRect();
      if (container.top <= 0) {
        return styles.relativebottom;
      }
      return styles.relativetop;
    }
  }

  selectframe() {
    const rect = this.container.getBoundingClientRect();
    const location = rect.top < 0 ? Math.abs(rect.top) : 0;
    const mod = (this.container.offsetHeight - this.state.canvasheight) / this.images.length;
    let image = Math.round(location / mod);

    image = image > this.images.length - 1 ? this.images.length - 1 : image;
    image = image < 0 ? 0 : image;
    const remaining = this.state.duration - image;

    this.setState({
      image: this.images[image],
      timeremaing: remaining,
      location,
    });
  }

  drawcanvas() {
    if (this.context && this.state.image) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.drawImage(this.state.image, this.state.xoffset, 0, this.state.width, this.state.height);
    }
  }

  render() {
    const canvasposition = this.canvasposition();
    if (window.innerWidth > 600) {
    return (
      <div
        ref={node => {
          this.container = node;
        }}
        className={styles.videocontainer}
        style={{height:this.state.containerheight}}
      >
        <canvas 
          className={this.canvasisinview() ? styles.fixed : canvasposition}
          height={this.state.canvasheight}
          width={window.innerWidth}
          ref={node => {
            if (node) {
              this.canvas = node;
              this.context = node.getContext('2d');
            }
          }}
        />
      </div>
    );
  } else {
    return (
      <div
      ref={node => {
        this.container = node;
      }}
      className={styles.videocontainer}
    >
      <img src='https://assets.reponestrength.com/repone_large0059.jpg' />
    </div>
    )
  }
  }
}

Video.propTypes = {
  scrollable: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};
export default Video;
