import React from 'react';
import styles from './styles.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class ThreeDee extends React.Component {

  render() {
    return (
      <div className={styles.section} id="3D">
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default ThreeDee;
