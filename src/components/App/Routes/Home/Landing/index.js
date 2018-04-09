import React from 'react';
import styles from './styles.scss';
import Video from 'src/components/App/Shared/Video/index.js';

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.bg}>
          <video autoPlay="true" muted="true" loop="true" className={styles.herovid}>
            <source src="https://assets.reponestrength.com/hero_movie_no_sound.m4v" type="video/mp4" />
          </video>
          <img className={styles.heroimg} src='https://assets.reponestrength.com/hero_mobile_full_screen.jpg' />
        </div>
        <div className={styles.main}>
          <h1>
            Win in the weight room<br />
            <div className={styles.rolotext}>
              <div>
                <p>Win</p>
                <ul>
                  <li>on the field</li>
                  <li>on the court</li>
                  <li>in the rink</li>
                  <li>on the pitch</li>
                  <li>on the track</li>
                  <li>in the pool</li>
                  <li>on the road</li>
                  <li>on the slope</li>
                  <li>on the field</li>
                  <li>in the games</li>
                  <li>in the ring</li>
                </ul>
              </div>
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Landing;
