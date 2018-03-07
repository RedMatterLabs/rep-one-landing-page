import React from 'react';
import styles from './styles.scss';

function Pricing() {
  return (
    <div className={styles.container}>
      <div className={`${styles.flexrow} ${styles.roundedcorners} ${styles.card}`}>
        <div className={styles.content}>
          <h1>Amateur</h1>
          <ul>
            <li>250 athletes max</li>
            <li>$100/month</li>
            <li>$30/month per rack</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.flexrow} ${styles.roundedcorners} ${styles.card}`}>
        <div className={styles.content}>
          <h1>Professional</h1>
          <ul>
            <li>250 athletes max</li>
            <li>$100/month</li>
            <li>$30/month per rack</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.flexrow} ${styles.roundedcorners} ${styles.card}`}>
        <div className={styles.content}>
          <h1>Elite</h1>
          <ul>
            <li>250 athletes max</li>
            <li>$100/month</li>
            <li>$30/month per rack</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
