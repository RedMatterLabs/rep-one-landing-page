import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


class Video extends React.Component {
  constructor(props) {
    super(props);

    this.container = null;
    this.scrollcontainer = null;
    this.contexts = [];
    this.canvases = [];
    this.images = [];

    this.state = {
      duration:props.duration,
      frame: 0,
      contexts:[],
      container:null,
      width:0,
      height:0,
    }
  }

  componentDidMount() {
    // preload images.
    for (let i = 0; i < this.state.duration; i++) {
      const filename = `${i}.jpg`;
      const imageurl = `https://assets.reponestrength.com/repone_large${i > 9
        ? '00'
        : '000'}${filename}`;
      const image = new Image();
      image.src = imageurl;
      image.onload = (e) => {this.drawcanvases(image, i)}
      this.images.push(image);
    }

    if (window.innerWidth > 600) {
      requestAnimationFrame(this.animate.bind(this));
      requestAnimationFrame(this.updateframes.bind(this));
    }
  }

  animate() {
    this.scroll();
    requestAnimationFrame(this.animate.bind(this));
  }

  updateframes() {
    this.selectframe();
    requestAnimationFrame(this.updateframes.bind(this));
  }

  scroll() {
    if (this.container && this.scrollcontainer) {
      const rect = this.container.getBoundingClientRect();
      
      let width = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth : window.innerHeight / 0.5625;
      width = width > 720 ? 720 : width;
      let height = width * 0.5625;
        
      if(this.state.width !== width || this.state.height !== height){
        this.setState({width, height});
      }
      
      let yoffset = rect.top < 0 ? Math.abs(rect.top) : 0;
      yoffset = yoffset + height > rect.height  ? rect.height - height : yoffset;

      this.scrollcontainer.style.transform = 'translate3d(0,' + yoffset + 'px, 0)';
    }
  }
 
  drawcanvases(image, i){
    let width = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth : window.innerHeight / 0.5625;
    width = width > 720 ? 720 : width;
    let height = width * 0.5625;

    const xoffset = (width - window.innerWidth) * -0.5;
    var ctx = this.contexts[i];
    ctx.drawImage(image, xoffset, 0, width, height)

  }

  selectframe() {
    if (this.container) {
      let width = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth : window.innerHeight / 0.5625;
      width = width > 720 ? 720 : width;
      let height = width * 0.5625;

    const rect = this.container.getBoundingClientRect();
    const location = rect.top < 0 ? Math.abs(rect.top) : 0;
    const mod = (this.container.clientHeight - height) / this.images.length;
    let frame = Math.round(location / mod);

    frame = frame > this.images.length - 1 ? this.images.length - 1 : frame;
    frame = frame < 0 ? 0 : frame;
    this.setState({frame});
    }
  }
 
  rendercanvas( ) {
    this.canvases = this.images.map((image, i) => {
      let element_style = {zIndex:i};
      
      return (
        <canvas
        width={this.state.width}
        height={this.state.height}
        className={this.state.frame === i ? styles.currentframe : styles.canvas}
        key={i}
        ref={(node) => {
            if(node) this.contexts.push(node.getContext('2d'));
          }
        }
        style={element_style}
        />
      )
    })
  }

  renderfull() {
    return (
      <div ref={node => { this.container = node; }}
        className={styles.videocontainer}
        style={{height:1.5*this.state.height}}
      >
        <div className={styles.scrollcontainer} style={{height:this.state.height,width:this.state.width}} ref={node => {this.scrollcontainer = node}}>
          {this.canvases}
        </div>
      </div>
    );
  }

  rendermobile() {
    return (
      <div
      ref={node => {
        this.container = node;
      }}
      className={styles.videocontainer}
    >
      <img src='https://assets.reponestrength.com/repone_large0059.jpg' />
    </div>
    );
  }

  render() {
    this.rendercanvas();
    if (window.innerWidth > 600) {
      return this.renderfull();
    } else {
      return this.rendermobile();
    }
  }
}

Video.propTypes = {
  scrollable: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};
export default Video;
