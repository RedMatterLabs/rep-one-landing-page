import React from 'react';
import styles from './styles.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

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
      </div>

      <div className={styles.mbt}>
        <P5Wrapper sketch={sketch} />

        <div className={styles.mbtoverlay}>
          <div className={styles.description}>
            Our unique 3D-sensing technology makes the invisible, visible. RepOne tracks everything from velocity to skill adaptation — even trends in motion that indicate fatigue and injury. <b>The new sensing also removes the need to keep a device directly underneath the weights.</b> Gain access to unmatched analysis of all your athletes’ movements and make your team stronger than ever.</div>
          <a href="http://blog.reponestrength.com/2018/05/07/the-emergence-of-motion-based-training/" className={styles.button}>Learn more about Motion Based Training</a>
        </div>
      </div>
    </div>
  );
}

export default Insights;