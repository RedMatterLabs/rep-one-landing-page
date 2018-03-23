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
];

function Teams() {
  return (
    <div className={styles.section} id="teams">
      <div className={styles.main}>
        <div className={styles.teamlogocontainer}>
          {images.map(image => <img className={styles.teamlogo} src={image} alt="logo" />)}
        </div>
      </div>
    </div>
  );
}

export default Teams;
