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
];

function Teams() {
  return (
    <div className={styles.section} id="teams">
      <div className={styles.main}>
      <h1>FROM THE CREATORS OF OPENBARBELL</h1>
        <h2>Trusted by some of the best teams in the world.</h2>

        <div className={styles.teamlogocontainer}>
          {images.map(image => <div className={styles.logocontainer}><img className={styles.teamlogo} src={image} alt="logo" /></div>)}
        </div>
      </div>
    </div>
  );
}

export default Teams;
