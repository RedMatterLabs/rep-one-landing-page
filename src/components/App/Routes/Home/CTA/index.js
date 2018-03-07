import React from 'react';
import styles from './styles.scss';
import EmailForm from './components/emailform/index.js';
import Pricing from './components/pricing/index.js';

function CTA() {
  return (
    <div className={styles.section} id="cta">
      <div className={styles.main}>
        <h1>Be the first to get RepOne</h1>
        <div className={styles.labeledselect}>
          <span className={styles.selectleft}>For Teams</span>
          <label className={styles.switch}>
            <input type="checkbox" checked />
            <span className={styles.slider} />
          </label>
          <span className={styles.selectright}>For Individuals</span>
          <EmailForm />
          <Pricing />
        </div>
      </div>
    </div>
  );
}

export default CTA;
