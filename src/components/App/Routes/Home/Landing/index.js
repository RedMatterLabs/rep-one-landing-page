import React from 'react';
import styles from './styles.scss';
import Logo from './components/RepOneLogo/index.js';
import Video from 'src/components/App/Shared/Video/index.js';

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.filter} />
        <div className={styles.bg} />
        <div className={styles.main}>
          <h1> Win in the weight room</h1>
          <h1 className={styles.rolotext}>
            <span>Win</span>

            <ul className={styles.rolotextlist}>
              <li className={styles.rolotextli}>&nbsp;on the field</li>
              <li className={styles.rolotextli}>&nbsp;on the court</li>
              <li className={styles.rolotextli}>&nbsp;in the bed</li>
            </ul>
          </h1>
        </div>
      </div>
    );
  }
}

export default Landing;
