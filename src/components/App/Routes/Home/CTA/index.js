import React from 'react';
import styles from './styles.scss';

function CTA() {
  return (
    <div className={styles.section} id="cta">
      <div className={styles.main}>
        <h1> Be the first to get RepOne</h1>
        <a className={styles.btn}>Reserve Now</a>
        <h1> Get in touch</h1>
        <a className={styles.btn}>Email Us</a>
      </div>
    </div>
  );
}

export default CTA;
