import React from 'react';
import styles from './styles.scss';

function Insights() {
  return (
    <div className={styles.section} id="device">
      <div className={styles.main}>
        <h1>REPONE INSIGHTS</h1>
        <h2>Industry-leading 3D sensing makes the invisible, visible.</h2>
        <div className={styles.diagram}>
          <div className={styles.diagramcontainer}>
            <img src='https://assets.reponestrength.com/deadlift_guy.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;