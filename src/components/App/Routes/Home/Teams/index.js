import React from 'react';
import styles from './styles.scss';

// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
const images = [
  require('src/images/teams/1.png'),
  require('src/images/teams/2.png'),
  require('src/images/teams/3.png'),
  require('src/images/teams/4.png'),
  require('src/images/teams/5.png'),
  require('src/images/teams/6.png'),
  require('src/images/teams/7.png'),
  require('src/images/teams/8.png'),
  require('src/images/teams/9.png'),
  require('src/images/teams/10.png'),
  require('src/images/teams/11.png'),
  require('src/images/teams/12.png'),
  require('src/images/teams/13.png'),
  require('src/images/teams/14.png'),
  require('src/images/teams/15.png'),
  require('src/images/teams/16.png'),
  require('src/images/teams/17.png'),
  require('src/images/teams/18.png'),
  require('src/images/teams/19.png'),
  require('src/images/teams/20.png'),
  require('src/images/teams/21.png'),
  require('src/images/teams/22.png'),
  require('src/images/teams/23.png'),
  require('src/images/teams/24.png'),
  require('src/images/teams/25.png'),
  require('src/images/teams/26.png'),
  require('src/images/teams/27.png'),
  require('src/images/teams/28.png'),
  require('src/images/teams/29.png'),
  require('src/images/teams/30.png'),
  require('src/images/teams/31.png'),
  require('src/images/teams/32.png'),
  require('src/images/teams/33.png'),
  require('src/images/teams/34.png'),
  require('src/images/teams/35.png'),
];

function Teams() {
  return (
    <div className={styles.section} id="teams">
      <div className={styles.main}>
        <h1> Our technology powers the best teams</h1>
        <div className={styles.teamlogocontainer}>
          {images.map(image => <img className={styles.teamlogo} src={image} alt="logo" />)}
        </div>
      </div>
    </div>
  );
}

export default Teams;
