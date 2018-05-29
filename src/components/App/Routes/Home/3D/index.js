import React, { Component } from 'react';
import styles from './styles.scss';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';

class ThreeDee extends Component {

  componentDidMount() {
    var that = this;
    setTimeout(() => {
      var canvas = document.getElementById('defaultCanvas0');
      window.addEventListener('resize', resizeCanvas, false);
      
      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff(); 
      }
      resizeCanvas();

      function drawStuff() {
        console.log('should redraw');
        that.forceUpdate();
      }

    }, 3000);
  }

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
