import React from 'react';
import styles from './styles.scss';
import Logo from './components/RepOneLogo/index.js';
import Video from 'src/components/App/Shared/Video/index.js';

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.bg}>
          <Video
            scrollable
            src="http://demo.vmg.nyc/foxnews/d/underarmour-gc/v1/video/demovid.mp4"
            duration={318}
          />
        </div>
        <div className={styles.main}>
          <h1> Win in the weight room.</h1>
          <h1>Win on the field.</h1>
          <Logo />
        </div>
      </div>
    );
  }
}

export default Landing;
