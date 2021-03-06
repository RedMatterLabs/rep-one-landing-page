import React from 'react';
import styles from './styles.scss';

class Analytics extends React.Component {
  render() {
    return (
      <div className={styles.section} id="analytics">
        <div className={styles.main}>
          <h1>The RepOne Platform</h1>
          <h2>Powerful system for managing and analyzing your team.</h2>
          <div className={styles.subcontainer}>
            <a href="#kiosk" className={styles.subsection}>
                <div className={styles.placeholder}>
                  <img src='https://assets.reponestrength.com/athlete_kiosk.jpg' />
                </div>
                <div className={styles.textcontainer}>
                  <div>
                    <h2>Athlete Kiosk App</h2>
                    <p>Replace workout cards and individualize training for your whole team.</p>
                  </div>
                </div>
            </a>
            <a href="#platform" className={styles.subsection}>
              <div className={styles.placeholder}>
                <img src='https://assets.reponestrength.com/coach_portal.jpg' />
              </div>
              <div className={styles.textcontainer}>
                <div>
                  <h2>Coaching Portal</h2>
                  <p>
                    Full-roster capabilities and athlete performance monitoring in real-time using
                    our unique metrics.
                  </p>
                </div>
              </div>
            </a>
            <a href="#device" className={styles.subsection}>
              <div className={styles.placeholder}>
                <img src='https://assets.reponestrength.com/device-render.png' />
              </div>
              <div className={styles.textcontainer}>
                <div>
                  <h2>RepOne Devices</h2>
                  <p>
                    A fleet of extraordinarily accurate, portable devices you place on each training
                    station.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
