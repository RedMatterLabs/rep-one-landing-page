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
      yoffset: 0,
      preventUserScroll: false,
      scrolled: 0,
      direction: 0,
      top: 0,
      width: 0,
      height: 0,
    };

    this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  }

  scrollHandler(e) {
    e = e || window.event;
    const newscrollposition = this.state.scrolled + e.deltaY;
    const direction = e.deltaY;
    this.setState({ scrolled: newscrollposition, direction });
    this.update();
    this.drawcanvas();
    this.selectframe();
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
      const imageurl = `https://assets.reponestrength.com/repone_large${i > 9
        ? '00'
        : '000'}${filename}`;
      const image = new Image();
      image.src = imageurl;
      this.images.push(image);
    }

    // draw thumbnail
    const width = window.innerWidth;
    const height = window.innerWidth * 0.5625;
    this.canvas.width = width;
    this.canvas.height = height;

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

  updateScrollableState(top) {
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
      const container = this.container.getBoundingClientRect();
      if (container.top <= 0) {
        return styles.relativebottom;
      }
      return styles.relativetop;
    }
  }

  selectframe() {
    if (!this.state.image) {
      this.setState({ image: this.images[0] });
    } else if (this.state.preventUserScroll) {
      const direction = this.state.direction;
      let location = this.state.location;
      location += direction;
      const mod = this.container.offsetHeight / this.images.length;
      let image = Math.round(location / mod);
      image = image > this.images.length - 1 ? this.images.length - 1 : image;
      image = image < 0 ? 0 : image;
      const remaining = this.state.duration - image;
      this.setState({
        image: this.images[image],
        timeremaing: remaining,
        location,
        yoffset: window.pageYOffset,
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
    return (
      <div
        ref={node => {
          this.container = node;
        }}
        className={styles.videocontainer}
      >
        <canvas
          className={this.state.preventUserScroll ? styles.fixed : canvasposition}
          ref={node => {
            if (node) {
              this.canvas = node;
              this.context = node.getContext('2d');
            }
          }}
        />
      </div>
    );
  }
}

Video.propTypes = {
  scrollable: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};
export default Video;
