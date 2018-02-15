import React from 'react';
import styles from './styles.scss';
import Parallax from 'src/components/Shared/Parallax/index.js';

function Analytics() {
  return (
    <div className={styles.section} id="analytics">
      <div className={styles.barbelltrack}>
        <Parallax>
          <div className={styles.barbellcontainer}>
            <img src={require('src/images/RepOneBarbell.png')} alt="RepOne Barbell" />
          </div>
        </Parallax>
      </div>
      <div className={styles.main}>
        <h1>Analytics platform for strength coaches</h1>
        <h2>
          Team management and analytics, powered by a fleet of extraordinarily accurate, portable
          devices.
        </h2>
        <div className={styles.devicecontainertouch}>
          <div className={styles.ipadcontainer}>
            <img src={require('src/images/R1 Coach - Live.png')} alt="RepOne coaching Live" />
          </div>
        </div>

        <div className={styles.reponecontainer}>
          <figure>
            <img src={require('src/images/RepOne.png')} alt="RepOne device" />
            <img src={require('src/images/RepOne.png')} alt="RepOne device" />
            <img src={require('src/images/RepOne.png')} alt="RepOne device" />
          </figure>
        </div>
        <div className={styles.devicecontainerdesktop}>
          <figure>
            <img src={require('src/images/Group-2.png')} alt="RepOne app on laptop" />
            <img src={require('src/images/Group-3.png')} alt="RepOne app on phone" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
