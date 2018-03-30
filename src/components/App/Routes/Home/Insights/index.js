import React from 'react';
import styles from './styles.scss';

function Insights() {
  return (
    <div className={styles.section} id="insights">
      <div className={styles.main}>
        <h1>REPONE INSIGHTS</h1>
        <h2>Industry-leading 3D sensing makes the invisible, visible.</h2>
        <div className={styles.diagram}>
          <div className={styles.diagramcontainer}>
            <img src={require('src/images/jacob.jpg')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
