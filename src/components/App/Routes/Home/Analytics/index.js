import React from 'react';
import styles from './styles.scss';

class Analytics extends React.Component {
  render() {
    return (
      <div className={styles.section} id="analytics">
        <div className={styles.main}>
          <h1>The RepOne Analytics Platform</h1>
          <h2>Advanced training at your fingertips.</h2>
          <div className={styles.subcontainer}>
            <div className={styles.subsection}>
              <div className={styles.placeholder}>
                <img src={require('src/images/repone_render.png')} />
              </div>
              <h2>RepOne Devices</h2>
              <p>
                Our platform is powered by a fleet of extraordinarily accurate, portable devices.
              </p>
            </div>
            <div className={styles.subsection}>
              <div className={styles.placeholder}>
                <img src={require('src/images/coaching_portal.jpg')} />
              </div>
              <h2>Coaching Portal</h2>
              <p>
                Full-roster capabilities and athlete performance monitoring in real-time using our
                unique metrics
              </p>
            </div>
            <div className={styles.subsection}>
              <div className={styles.placeholder}>
                <img src={require('src/images/athlete_portal.png')} />
              </div>
              <h2>Athlete Kiosk App</h2>
              <p>Athlete identification and autoregulated training for your whole team</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
