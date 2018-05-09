import React from 'react';
import styles from './styles.scss';
import Video from 'components/App/Shared/Video/index.js';

class Kiosk extends React.Component {

  render() {
    return (
      <div className={styles.section} id="kiosk">
        <div className={styles.main}>
        <h1>THE REPONE ATHLETE KIOSK APP</h1>
        <h2>Connect and automate your entire weight room.</h2>
        </div>
        <div className={styles.imagecontainer}>
        <img src='https://assets.reponestrength.com/kiosk.png' alt='RepOne Kiosk'/>
        </div>
      </div>
    );
  }
}

export default Kiosk;
