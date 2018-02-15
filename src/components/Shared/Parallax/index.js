import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Parallax extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child =>
      <Stickybox>
        {child}
      </Stickybox>
    );

    return (
      <div className={styles.parallax}>
        {children}
      </div>
    );
  }
}

const SCROLL_TIMEOUT = 240;
const CHECK_INTERVAL = SCROLL_TIMEOUT / 6;

class Stickybox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 1,
      height: -1,
      scrolling: false,
    };
  }

  componentDidMount() {
    console.log('mounted');
    window.addEventListener('scroll', this.onScroll.bind(this), false);
    this.checkInterval = window.setInterval(this.checkScroll.bind(this), CHECK_INTERVAL);
    this.scrolling = false;
    this.active = false;
    this.className = styles.parallaxcontainer;
    this.updateTopPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  checkScroll() {
    if (Date.now() - this.lastScrollTime > SCROLL_TIMEOUT && this.scrolling) {
      this.scrolling = false;
      this.onScrollEnd();
    }
  }

  proxiedScroll() {
    if (Date.now() - this.proxiedScrollTime > CHECK_INTERVAL && this.scrolling) {
      this.proxiedScrollTime = Date.now();
      this.onScrollProxy();
    }
  }

  onScroll() {
    if (!this.scrolling) {
      this.scrolling = true;
      this.onScrollStart();
    }

    this.lastScrollTime = Date.now();
    this.proxiedScroll();
  }

  handleScroll() {
    this.updateTopPosition();
  }

  updateTopPosition() {
    const box = this.node.getBoundingClientRect();
    this.setState({
      top: box.top,
      height: box.height,
    });
  }

  onScrollStart() {
    this.setState({ scrolling: true });
    this.handleScroll();
  }

  onScrollProxy() {
    this.handleScroll();
  }

  shouldComponentUpdate() {
    if (this.isFrozen() && !this.active) {
      this.active = true;
      return false;
    }
    return true;
  }

  onScrollEnd() {
    this.setState({ scrolling: false });
    this.handleScroll();
  }

  getState() {
    return this.state;
  }

  isFrozen() {
    if (this.node) {
      const rect = this.node.parentElement.parentElement.getBoundingClientRect();
      return rect.top < 1 && rect.top + rect.height > 1;
    }

    return false;
  }

  setClassName() {
    if (this.node) {
      if (this.isFrozen()) {
        if (!this.node.className) {
          this.node.className = styles.frozen;
        }
      } else {
        this.node.className = '';
      }
    }
  }

  render() {
    this.setClassName();
    return (
      <div ref={node => (this.node = node)} style={{ height: this.state.height }}>
        {this.props.children}
      </div>
    );
  }
}

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Parallax;
