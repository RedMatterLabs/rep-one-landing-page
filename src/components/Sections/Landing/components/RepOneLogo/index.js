import React from 'react';
import styles from './styles.scss';

function Logo() {
    return ( 
    	<div className={styles.logo}>
    	<div className={styles.electronoutline}></div>
    	<div className={styles.electronoutline}></div>
    	<div className={styles.electronoutline}></div>
    	<div className={styles.electronoutline}></div>
    	<div className={styles.electronorbit}>
    		<div className={styles.electron}></div>
        	<div className={styles.nucleus}></div>
        </div>
        <label>RepOne</label>
        </div>
    );
}

export default Logo;
