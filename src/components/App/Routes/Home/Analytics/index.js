import React from 'react';
import styles from './styles.scss';

class Analytics extends React.Component {
  render() {
    return (
      <div className={styles.section} id="analytics">
        <div className={styles.main}>
          <h1>Analytics platform for strength coaches</h1>
          <div className={styles.subcontainer}>
            <div className={styles.subsection}>
              <div className={styles.placeholder} />
              <h2>Motion Sensors</h2>
              <p>Our platform is powered by a fleet of extraordinarily portable devices.</p>
            </div>
            <div className={styles.subsection}>
              <div className={styles.placeholder} />
              <h2>Coaching Portal</h2>
              <p>
                Coaches can write programs remotely and monitor their athletes' performance in
                realtime using our unique metrics
              </p>
            </div>
            <div className={styles.subsection}>
              <div className={styles.placeholder} />
              <h2>Motion Sensors</h2>
              <p>
                Individual or group programs are given to each athlete -- even multiple athletes on
                the same rack!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
