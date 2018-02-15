import React from 'react';
import styles from './styles.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.electronoutline} />
      <div className={styles.electronoutline} />
      <div className={styles.electronoutline} />
      <div className={styles.electronoutline} />
      <div className={styles.electronorbit}>
        <div className={styles.electron} />
        <div className={styles.nucleus} />
      </div>
      <label>RepOne</label>
    </div>
  );
}

export default Logo;
