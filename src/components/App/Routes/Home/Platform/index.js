import React from 'react';
import styles from './styles.scss';

function Platform() {
  return (
    <div className={styles.section} id="platform">
      <div className={styles.main}>
        <h1> The most advance training techniques at your fingertips</h1>
        <h2>RepOne streamlines autoregulation and individualized coaching.</h2>
        <h2>Implement top training methodologies, right away, for your whole team</h2>
        <div className={styles.appscontainer}>
          <div className={styles.ipadcontainer}>
            <img src={require('src/images/R1 Coach - Live.png')} alt="RepOne coaching Live" />
          </div>
          <div className={styles.ipadcontainer}>
            <img
              src={require('src/images/R1 Coach - Programs.png')}
              alt="RepOne coaching Programs"
            />
          </div>
          <div className={styles.ipadcontainer}>
            <img
              src={require('src/images/R1 Coach - Dashboard.png')}
              alt="RepOne coaching Dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
