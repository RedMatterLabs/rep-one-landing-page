import React from 'react';
import styles from './styles.scss';

class Price extends React.Component {
  render() {
    return (
      <div className={styles.section} id="platform">
        <div className={styles.main}>
          <h1>Flexible pricing to fit your organization</h1>
          <div className={styles.container}>
            <img src='https://assets.reponestrength.com/pricing.png' />
        </div>
        </div>
      </div>
    );
  }
}

export default Price;
