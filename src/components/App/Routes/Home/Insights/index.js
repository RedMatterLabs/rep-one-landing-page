import React from 'react';
import styles from './styles.scss';

import Video from 'components/App/Shared/Video/index.js';

class Insights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frame: 0,
      scrollable: props.scrollable,
      height: 0,
      containerheight: 0,
      canvasheight: 0
    };
  }

  componentDidMount() {    
    if (this.canvas) {

      if (window.innerWidth > 600) {
      this.updateinterval = setInterval(() => {
        this.selectframe();
        }, 16);
      }

      // initiate scroll listeners
      if (this.props.scrollable) {
        this.selectframe();
      }
    }
  }


  componentWillUnmount() {
    clearInterval(this.updateinterval);
  }

  canvasisinview() {
    if (this.container) {
      const rect = this.container.getBoundingClientRect();
      return (rect.top <= 0 && this.hasframes());  
    }
  }

  hasframes() {
    console.log(this.state.frame <= 100, this.state.frame)
    return (Boolean(this.state.frame < 100));
  }

  canvasposition() {
    if (this.container) {
      const container = this.container.getBoundingClientRect();
      if (container.top <= 0) {
        return styles.headerbottom;
      }
      return styles.headertop;
    }
  }

  selectframe() {
    const rect = this.container.getBoundingClientRect();
    const location = rect.top < 0 ? Math.abs(rect.top) : 0;
    const mod = ((this.container.offsetHeight + (this.canvas.offsetHeight / 4)) - this.canvas.offsetHeight) / 100;
    let frame = Math.round(location / mod);
    frame = frame > 100 ? 100 : frame;
    frame = frame < 0 ? 0 : frame;

    this.setState({
      frame,
    });
  }

  render() {
    const canvasposition = this.canvasposition();
    return (
      <div className={styles.section} id="insights">
        <div className={styles.subsection} ref={(node) => {this.container = node}}>
        <div style={{mixBlendMode: 'multiply', opacity:(100 - this.state.frame) * .01}} ref={(node) => {this.canvas = node}} className={`${styles.main} ${this.canvasisinview() ? styles.fixed : canvasposition}`}>
          <h1>REPONE INSIGHTS</h1>
          <h2>Industry-leading 3D sensing makes the invisible, visible.</h2>
          <div className={styles.diagram}>
            <div className={styles.diagramcontainer}>
              <img src={require('images/jacob.jpg')}></img>
              </div>
          </div>
        </div>
        </div>

        <Video
          autoPlay="true"
          muted="true"
          loop="true"
          duration={59}
          className={styles.video}
          scrollable
          src="https://demo.vmg.nyc/greg/repone/repone_large.mp4"
          type="video/mp4"
        />
      </div>
    ); 
  }
}

export default Insights;