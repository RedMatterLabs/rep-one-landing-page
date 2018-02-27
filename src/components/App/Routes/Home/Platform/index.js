import React from 'react';
import styles from './styles.scss';

class Platform extends React.Component {
  render() {
    return (
      <div className={styles.section} id="platform">
        <div className={styles.main}>
          <h1> The most advance training techniques at your fingertips</h1>
          <div className={styles.flexleft}>
            <div className={styles.placeholder} />
            <h2> RepOne streamlines autoregulation and individualized coaching.</h2>
          </div>
          <div className={styles.flexright}>
            <h2> RepOne streamlines autoregulation and individualized coaching.</h2>
            <div className={styles.placeholder} />
          </div>
        </div>
      </div>
    );
  }
}

export default Platform;
