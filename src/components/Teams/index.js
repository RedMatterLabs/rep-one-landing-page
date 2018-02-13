import React from 'react';
import styles from './styles.scss';

// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
var images = [
	require('../../images/teams/1.png'),
	require('../../images/teams/2.png'),
	require('../../images/teams/3.png'),
	require('../../images/teams/4.png'),
	require('../../images/teams/5.png'),
	require('../../images/teams/6.png'),
	require('../../images/teams/7.png'),
	require('../../images/teams/8.png'),
	require('../../images/teams/9.png'),
	require('../../images/teams/10.png'),
	require('../../images/teams/11.png'),
	require('../../images/teams/12.png'),
	require('../../images/teams/13.png'),
	require('../../images/teams/14.png'),
	require('../../images/teams/15.png'),
	require('../../images/teams/16.png'),
	require('../../images/teams/17.png'),
	require('../../images/teams/18.png'),
	require('../../images/teams/19.png'),
	require('../../images/teams/20.png'),
	require('../../images/teams/21.png'),
	require('../../images/teams/22.png'),
	require('../../images/teams/23.png'),
	require('../../images/teams/24.png'),
	require('../../images/teams/25.png'),
	require('../../images/teams/26.png'),
	require('../../images/teams/27.png'),
	require('../../images/teams/28.png'),
	require('../../images/teams/29.png'),
	require('../../images/teams/30.png'),
	require('../../images/teams/31.png'),
	require('../../images/teams/32.png'),
	require('../../images/teams/33.png'),
	require('../../images/teams/34.png'),
	require('../../images/teams/35.png')
];

function makekey() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function Teams() {
    return ( 
	    <div className={styles.section} id="teams">
	    	<div className={styles.main}>
	        	<h1> RepOne tech powers the best teams</h1>
	        	<div className={styles.teamlogocontainer}>
					    {images.map(image => (
					      <img key={makekey()} className={styles.teamlogo} src={image} alt='logo' />
					    ))}
	        	</div>
	        </div>
	    </div>  
    );
}

export default Teams;
