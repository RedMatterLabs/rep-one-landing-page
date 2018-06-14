import React, { Component } from 'react';
import styles from './styles.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class ThreeDee extends Component {
  render() {
    return (
      <div className={styles.section}>
          <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default ThreeDee;
