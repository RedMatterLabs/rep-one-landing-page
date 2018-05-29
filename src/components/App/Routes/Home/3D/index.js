import React, { Component } from 'react';
import styles from './styles.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class ThreeDee extends Component {

  render() {
    return (
      <div className={styles.section}>
        <div className={styles.main}>
          <P5Wrapper className={styles.main} sketch={sketch} />
        </div>
      </div>
    );
  }
}

export default ThreeDee;
