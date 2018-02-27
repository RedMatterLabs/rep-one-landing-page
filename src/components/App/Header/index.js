import React from 'react';
import styles from './styles.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>RepOne</h1>
        <button className={styles.button}>Get yours today!</button>
      </div>
    );
  }
}

export default Header;
