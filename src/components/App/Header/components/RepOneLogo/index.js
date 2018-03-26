import React from 'react';
import styles from './styles.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.electronorbit}>
        <div className={styles.electron} />
        <div className={styles.nucleus} />
      </div>
    </div>
  );
}

export default Logo;
