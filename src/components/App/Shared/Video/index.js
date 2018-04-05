import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration,
      timeremaing: props.duration,

      scrollable: props.scrollable,
      preventUserScroll: false,
      scrolled: 0,
    };

    this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
    const newscrollposition = this.state.scrolled + e.deltaY;
    this.setState({ scrolled: newscrollposition });
  }

  preventDefaultForScrollKeys(e) {
    if (this.keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }

    return true;
  }

  disableScroll() {
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', this.preventDefault.bind(this), false);
    }

    window.onwheel = this.preventDefault.bind(this); // modern standard
    window.onmousewheel = this.preventDefault.bind(this);
    document.onmousewheel = this.preventDefault.bind(this); // older browsers, IE
    window.ontouchmove = this.preventDefault.bind(this); // mobile
    document.onkeydown = this.preventDefaultForScrollKeys.bind(this);
    this.setState({ preventUserScroll: true });
  }

  enableScroll() {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }

    window.onmousewheel = null;
    document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
    this.setState({ preventUserScroll: false });
  }

  componentDidMount() {
    this.videonode.play();

    window.onscroll = () => {
      this.videonode.pause();
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
    const top = this.videonode.getBoundingClientRect().top;

    if (top <= 0 && this.state.timeremaing > 0) {
      if (!this.state.preventUserScroll) {
        this.disableScroll();
      }
    } else {
      this.enableScroll();
    }
  }

  scrub() {
    const waypoints = [{ '0,30': this.scrubvideo }, { '30,60': this.scrubcss }];

    waypoints.foreach((waypoint, key) => {
      const range = key.split(',');
      if (this.duration >= range[0] && this.duration <= range[1]) waypoint();
    });
  }

  scrubvideo() {
    const duration = this.state.duration;
    const scrolled = this.state.scrolled;
    const windowheight = window.innerHeight;
    const currentTime = this.videonode.currentTime;
    const scrubtime = (currentTime + scrolled) / windowheight;
    console.log(scrubtime);
    this.videonode.currentTime = scrubtime;
    this.setState({ timeremaing: duration - currentTime });
  }

  scrubcss() {
    const duration = this.state.duration;
    const scrolled = this.state.scrolled;
    const windowheight = window.innerHeight;
    const currentTime = this.videonode.currentTime;
    const scrubtime = (currentTime + scrolled) / windowheight;
    console.log(scrubtime);
    this.videonode.currentTime = scrubtime;
    this.setState({ timeremaing: duration - currentTime });
  }

  render() {
    return (
      <div className={styles.videocontainer}>
        <div
          ref={cssnode => {
            this.cssnode = cssnode;
          }}
        />

        <video
          ref={videonode => {
            this.videonode = videonode;
          }}
        >
          <source src={this.props.src} />
        </video>
      </div>
    );
  }
}

Video.propTypes = {
  scrollable: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
export default Video;
