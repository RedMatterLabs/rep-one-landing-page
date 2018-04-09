import React from 'react';
import styles from './styles.scss';

class Price extends React.Component {
  render() {
    return (
      <div className={styles.section} id="platform">
        <div className={styles.main}>
          <h1>Flexible pricing to fit your organization</h1>
          <div className={styles.container}>
            <img src='https://assets.reponestrength.com/simple_court.svg' />
            <img src='https://assets.reponestrength.com/court_seats.svg' />
            <img src='https://assets.reponestrength.com/stadium.svg' />
        </div>
        </div>
      </div>
    );
  }
}

export default Price;
