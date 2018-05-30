import React from 'react';
import styles from './styles.scss';

function Insights() {
  return (
    <div className={styles.section} id="device">
      <div className={styles.main}>
        <h1>REPONE INSIGHTS</h1>
        <h2>The only platform Strength Coaches can use to enable Motion Based Training.</h2>
        <div className={styles.diagram}>
          <div className={styles.diagramcontainer}>
            <img src='https://assets.reponestrength.com/deadlift_guy.jpg' />
          </div>
        </div>

        <div className={styles.description}>Our unique 3D-sensing technology makes the invisible, visible. RepOne tracks everything from velocity to skill adaptation — even trends in motion that indicate fatigue and injury. Gain access to unmatched analysis of all your athletes’ movements and make your team stronger than ever.</div>
        <a href="http://blog.reponestrength.com/" className={styles.button}>Learn more about Motion Based Training</a>
      </div>
    </div>
  );
}

export default Insights;