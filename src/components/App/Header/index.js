import React from 'react';
import styles from './styles.scss';
import Logo from './components/ReponeLogo/index.js'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
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
    return (
      <div
        className={`${styles.header}  ${this.state.scrolled
          ? styles.scrolled
          : styles.notscrolled}`}
      >
        <div className={styles.main}>
          <h1><Logo />RepOne</h1>
          <button className={styles.button}>Get yours today</button>
        </div>
      </div>
    );
  }
}

export default Header;
