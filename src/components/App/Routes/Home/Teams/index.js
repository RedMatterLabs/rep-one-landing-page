import React from 'react';
import styles from './styles.scss';

// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
const images = [
  'https://assets.reponestrength.com/1.png',
  'https://assets.reponestrength.com/2.png',
  'https://assets.reponestrength.com/3.png',
  'https://assets.reponestrength.com/4.png',
  'https://assets.reponestrength.com/5.png',
  'https://assets.reponestrength.com/6.png',
  'https://assets.reponestrength.com/7.png',
];

function Teams() {
  return (
    <div className={styles.section} id="teams">
      <div className={styles.main}>
        <h1>FROM THE CREATORS OF OPENBARBELL</h1>
        <h2>Trusted by some of the best teams in the world.</h2>

        <div className={styles.teamlogocontainer}>
          {images.map((image, key) =>
            <div key={key} className={styles.logocontainer}>
              <img className={styles.teamlogo} src={image} alt="logo" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Teams;
