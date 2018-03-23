import React from 'react';
import styles from './styles.scss';

function Exploded() {
  return (
    <div className={styles.section} id="insights">
      <div className={styles.main}>
        <div className={styles.diagram}>
          <div className={styles.explosioncontainer}>
            <video autoPlay="true" muted="true" loop="true" className={styles.video}>
              <source src="https://demo.vmg.nyc/greg/repone/repone_large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exploded;
