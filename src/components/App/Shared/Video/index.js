import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Video extends React.Component {
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
      const imageurl = `https://demo.vmg.nyc/greg/parallax/other/repone_large${i > 9
        ? '00'
        : '000'}${filename}`;
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
    let rect = this.canvas.getBoundingClientRect();
    if (direction > 0 && (rect.top - 65) <= 0){
      return true;
    } else if (direction < 0 && (rect.top - 65) >= 0 && rect.top <= rect.height + 65) {
      return true;
    }
    return false;
  }

  scrubvideo() {
    const direction = this.state.direction;
    let location = this.state.location;
    location += direction;
    const image = Math.round(location / 100);
    const remaining = this.state.duration - image;
    this.context.drawImage(this.images[image], 0, 0, this.state.width, this.state.height);
    this.setState({ timeremaing: remaining, location });
  }

  render() {
    return (
      <div className={styles.videocontainer}>
        <canvas
          className={styles.canvas}
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
