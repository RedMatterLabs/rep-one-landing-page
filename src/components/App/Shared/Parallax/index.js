import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SCROLL_TIMEOUT = 240;
const CHECK_INTERVAL = SCROLL_TIMEOUT / 6;

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 1,
      height: -1,
      scrolling: false,
    };
  }

  // attach scroll events to window
  componentDidMount() {
    this.scrolling = false;
    this.active = false;
    this.className = styles.parallaxcontainer;
    this.updateTopPosition();
    this.checkInterval = window.setInterval(this.checkScroll.bind(this), CHECK_INTERVAL);
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  // track scrolled value in this components state
  updateTopPosition() {
    const box = this.node.getBoundingClientRect();
    this.setState({
      top: box.top,
      height: box.height,
    });
  }

  onScroll() {
    if (!this.scrolling) {
      this.scrolling = true;
      this.onScrollStart();
    }

    this.lastScrollTime = Date.now();
    this.proxiedScroll();
  }

  onScrollStart() {
    this.setState({ scrolling: true });
    this.handleScroll();
  }

  proxiedScroll() {
    if (Date.now() - this.proxiedScrollTime > CHECK_INTERVAL && this.scrolling) {
      this.proxiedScrollTime = Date.now();
      this.onScrollProxy();
    }
  }

  onScrollProxy() {
    this.handleScroll();
  }

  handleScroll() {
    this.updateTopPosition();
  }

  checkScroll() {
    if (Date.now() - this.lastScrollTime > SCROLL_TIMEOUT && this.scrolling) {
      this.scrolling = false;
      this.onScrollEnd();
    }
  }

  onScrollEnd() {
    this.setState({ scrolling: false });
    this.handleScroll();
  }

  getChildContext() {
    //  exposes one property "parallaxstate", any of the components
    // in its sub-hierarchy will be able to access it
    return { parallaxstate: this.state };
  }

  getState() {
    return this.state;
  }

  render() {
    return (
      <div
        ref={node => {
          this.node = node;
        }}
        className={styles.parallax}
      >
        {this.props.children}
      </div>
    );
  }
}

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
};

Parallax.childContextTypes = {
  parallaxstate: React.PropTypes.object,
};

export default Parallax;
