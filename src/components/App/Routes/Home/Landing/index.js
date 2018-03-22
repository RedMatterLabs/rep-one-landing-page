import React from 'react';
import styles from './styles.scss';
import Logo from './components/RepOneLogo/index.js';
import Video from 'src/components/App/Shared/Video/index.js';

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.bg}>
          <video autoPlay="true" muted="true" loop="true" className={styles.herovid}>
            <source src="https://demo.vmg.nyc/greg/repone/repone_hero_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.main}>
          <h1>
            Win in the weight room<br /> Win on the field
          </h1>
        </div>
      </div>
    );
  }
}

export default Landing;
