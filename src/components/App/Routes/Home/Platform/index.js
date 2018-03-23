import React from 'react';
import styles from './styles.scss';

class Platform extends React.Component {
  render() {
    return (
      <div className={styles.section} id="platform">
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={`${styles.image} ${styles.left}`}>
              <img
                src={require('src/images/screenshot_athlete_tablet_short.png')}
                alt="autoregulation"
              />
            </div>
            <div className={`${styles.textcontainer} ${styles.left}`}>
              <div className={styles.text}>
                <h2>Autoregulation</h2>
                <p>RepOne streamlines autoregulation and individualized coaching.</p>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.textcontainer} ${styles.left}`}>
              <div className={styles.text}>
                <h2>Updates In Real-Time</h2>
                <p>Implement top training methodologies, right away, for your whole team.</p>
              </div>
            </div>
            <div className={`${styles.image} ${styles.left}`}>
              <img
                src={require('src/images/repone_screenshot_live_browser.png')}
                alt="autoregulation"
              />
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.image} ${styles.left}`}>
              <img
                src={require('src/images/repone_screenshot_dashboard_browser.png')}
                alt="autoregulation"
              />
            </div>
            <div className={`${styles.textcontainer} ${styles.left}`}>
              <div className={styles.text}>
                <h2>Performance Metrics</h2>
                <p>
                  Keep track of your teams overall performance in real-time using our unique
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Platform;
