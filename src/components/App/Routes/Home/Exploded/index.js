import Video from 'src/components/App/Shared/Video/index.js';
import React from 'react';
import styles from './styles.scss';

function Exploded() {
  return (
    <div className={styles.section} id="insights">
      <div className={styles.main}>
        <div className={styles.diagram}>
          <div className={styles.explosioncontainer}>
            <Video
              autoPlay="true"
              muted="true"
              loop="true"
              duration={59}
              className={styles.video}
              scrollable
              src="https://demo.vmg.nyc/greg/repone/repone_large.mp4"
              type="video/mp4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exploded;
