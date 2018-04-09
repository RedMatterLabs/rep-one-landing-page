import React from 'react';
import styles from './styles.scss';

function CTA() {
  return (
    <div className={styles.section} id="cta">
      <div className={styles.main}>
        <h1>Be the first to get RepOne</h1>
        <a className={styles.button}>Contact Us</a>
      </div>
    </div>
  );
}

export default CTA;
