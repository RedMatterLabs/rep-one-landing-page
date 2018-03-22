import React from 'react';
import styles from './styles.scss';

class Platform extends React.Component {
  render() {
    return (
      <div className={styles.section} id="platform">
        <div className={styles.main}>
          <h1>The most advanced training techniques at your fingertips</h1>
          <div className={styles.flexleft}>
            <div className={styles.placeholder}>
              <img src={require('src/images/live_ipad_1024.png')} alt="autoregulation" />
            </div>
            <div className={styles.rel}>
              <h2>RepOne streamlines autoregulation and individualized coaching.</h2>
            </div>
          </div>
          <div className={styles.flexright}>
            <h2>Implement top training methodologies, right away, for your whole team.</h2>
            <div className={styles.placeholder}>
              <img src={require('src/images/athlete_program_ipad_1024.png')} alt="autoregulation" />
            </div>
          </div>
          <div className={styles.flexleft}>
            <div className={styles.placeholder}>
              <img src={require('src/images/dashboard_ipad_1024.png')} alt="autoregulation" />
            </div>
            <h2>
              Keep track of your teams overall performance in real-time using our unique metrics.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Platform;
