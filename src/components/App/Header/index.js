import React from 'react';
import styles from './styles.scss';
import ReactGA from 'react-ga';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  scrollFunction() {
    if (window.scrollY > 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  componentDidMount() {
    window.onscroll = this.scrollFunction.bind(this);
  }

  handleClick (e) {
    ReactGA.event({
      category: 'cta',
      action: 'scroll to form'
    });
  }

  render() {
    return (
      <div>
        <div
          className={`${styles.header}  ${this.state.scrolled
            ? styles.scrolled
            : styles.notscrolled}`}
        >
          <div className={styles.main}>
            <h1>
              <div className={styles.logo} />
            </h1>
            <div className={styles.menu}>
              <a href="https://angel.co/repone-strength/jobs?al_content=experience-module-view-jobs" className={styles.link}>
                We're Hiring!
              </a>
              <a href="http://blog.reponestrength.com" className={styles.link}>
                Blog
              </a>
              <a href="#cta" className={styles.navActionButton} onClick={this.handleClick.bind(this)}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <a href="#cta" className={styles.actionButton} onClick={this.handleClick.bind(this)}>
          GET IN TOUCH
        </a>
      </div>
    );
  }
}

export default Header;
