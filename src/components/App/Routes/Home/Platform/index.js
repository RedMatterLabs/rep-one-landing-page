import React, { Component } from 'react';
import styles from './styles.scss';
import ReactGA from 'react-ga';

class Platform extends Component {

  handleClick (e) {
    ReactGA.event({
      category: 'cta',
      action: 'scroll to form'
    });
  }

  render() {
    return (
      <div className={styles.section} id="platform">
        <div className={styles.main}>
          <h1>THE REPONE COACHING PORTAL</h1>
          <h2>Your workout cards, players manual, Excel, and more. Simplified.</h2>
          <div className={styles.container}>
            <div className={`${styles.image} ${styles.left}`}>
              <img src='https://assets.reponestrength.com/screenshot_athlete.png' alt="autoregulation" />
            </div>
            <div className={`${styles.textcontainer} ${styles.right}`}>
              <div className={styles.text}>
                <h2>INDIVIDUALIZED TRAINING</h2>
                <ul>
                  <li>
                    Easily create workout programs for your entire team, or drag and drop changes for groups or individuals.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.textcontainer} ${styles.left}`}>
              <div className={styles.text}>
                <h2>UPDATES IN REAL-TIME</h2>
                <ul>
                  <li>
                    Get a closer look at your athletes performance in real-time with updates from
                    each of your training stations. Make modifications on the fly from across the weight room. Set velocity thresholds and automatic guidance to your exact specifications.
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.image} ${styles.left}`}>
              <img src='https://assets.reponestrength.com/screenshot_live.png' alt="autoregulation" />
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.image} ${styles.left}`}>
              <img src='https://assets.reponestrength.com/screenshot_dashboard.png' alt="autoregulation" />
            </div>
            <div className={`${styles.textcontainer} ${styles.right}`}>
              <div className={styles.text}>
                <h2>PERFORMANCE METRICS</h2>
                <ul>
                  <li>RepOne keeps track of your team so they're ready for game day. See how your athletes are performing day to day, week to week, season to season. Time tested metrics like tonnage and fatigue recorded and compiled
                    automatically.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#cta" className={styles.button} onClick={this.handleClick.bind(this)}>GET IN TOUCH</a>
          <div className={styles.actionSubtitle}>And read our latest white paper, the Two Ways Data Science is Changing the Future of the Weight Room</div>
        </div>
      </div>
    );
  }
}

export default Platform;
