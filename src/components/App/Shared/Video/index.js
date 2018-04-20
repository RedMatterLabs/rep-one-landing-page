import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.canvases = [];
    this.images = [];
    this.contexts = [];

    this.state = {
      image: 0,
      duration: props.duration - 1,
      timeremaing: props.duration - 1,
      location: 0,
      scrollable: props.scrollable,
      scrolled: 0,
      needsdraw: true,
      direction: 0,
      top: 0,
      width: 0,
      height: 0,
      xoffset: 0,
      yoffset: 0,
      containerheight: 0,
      canvaswidth: 0,
      canvasheight: 0
    };

    this.yoffset = 0;
    this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  }



  componentDidMount() {
    // preload images.

    for (let i = 0; i < this.props.duration; i++) {
      const filename = `${i}.jpg`;
      const imageurl = `https://assets.reponestrength.com/repone_large${i > 9
        ? '00'
        : '000'}${filename}`;
      const image = new Image();
      image.src = imageurl;
      this.images.push(image);
    }

     



    // draw thumbnail
    

      if (window.innerWidth > 600) {
      this.updateinterval = setInterval(() => {
        if (this.container) {

          this.update();
          this.selectframe();
        }
        }, 33);
      }

      // initiate scroll listeners
      if (this.props.scrollable) {
        this.update();
        this.selectframe();
      }
    }

  componentWillUnmount() {
    clearInterval(this.updateinterval);
  }

  update() {

    const rect = this.container.getBoundingClientRect();

    const canvaswidth = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth : window.innerHeight / 0.5625;
    const canvasheight = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth * 0.5625 : window.innerHeight;

    const width = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth : window.innerHeight / 0.5625;
    const height = window.innerWidth * 0.5625 > window.innerHeight ? window.innerWidth * 0.5625 : window.innerHeight;
    
    let yoffset = rect.top < 0 ? Math.abs(rect.top) : 0;
    yoffset = yoffset + canvasheight > rect.height  ? rect.height - canvasheight : yoffset;

    const xoffset = (width - window.innerWidth) * -0.5;


    if(!this.drawn){
      this.images.map((image,i) => {
        if (image && this.contexts[i]) {
          this.drawn = true;
          var ctx = this.contexts[i];
          console.log(image, canvaswidth, canvasheight);
          ctx.drawImage(image,xoffset, 0, canvaswidth, canvasheight)
          console.log(image);
        }
      })
    }

    this.setState({width, height, xoffset, yoffset, containerheight: height * 2 + 'px', canvaswidth, canvasheight});
  }

  canvasisinview() {
    if (this.container) {
      const rect = this.container.getBoundingClientRect();
      return (rect.top <= 0 && this.hasframes());  
    }
  }

  hasframes() {
    const rect = this.container.getBoundingClientRect();
    const location = rect.top < 0 ? Math.abs(rect.top) : 0;
    const mod = (this.container.offsetHeight - this.canvas.offsetHeight) / this.images.length;
    let image = Math.round(location / mod);
    return (Boolean(this.images[image]));
  }

  canvasposition() {
    if (this.container) {
      const container = this.container.getBoundingClientRect();
      if (container.top <= 0) {
        return styles.relativebottom;
      }
      return styles.relativetop;
    }
  }

  selectframe() {
    const rect = this.container.getBoundingClientRect();
    const location = rect.top < 0 ? Math.abs(rect.top) : 0;
    const mod = (this.container.offsetHeight - this.state.canvasheight) / this.images.length;
    let image = Math.round(location / mod);

    image = image > this.images.length - 1 ? this.images.length - 1 : image;
    image = image < 0 ? 0 : image;
    const remaining = this.state.duration - image;

    this.setState({
      image,
      timeremaing: remaining,
      location,
    });
  }

  render() {
    this.canvases = this.images.map((image, i) => {
      let element_style = {zIndex:i};

      if (this.state.image === i) {
        element_style.display = 'block';
      } else {
        element_style.display = this.drawn ? 'none' : 'block';
      }
      return (
        <canvas 
        width={window.innerWidth}
        height={this.state.canvasheight}
        className={styles.canvas}
        key={i}
        ref={(node) => {
            if(node) this.contexts.push(node.getContext('2d'));
          }
        }
        style={element_style}
        />
      )
    })
    
    if (window.innerWidth > 600) {
    return (
      <div ref={node => { this.container = node; }}
        className={styles.videocontainer}
        style={{height:this.state.containerheight}}
      >
        <div style={{transform:'translate3d(0,' + this.state.yoffset + 'px, 0)'}}>
          {this.canvases}
        </div>
      </div>
    );
  } else {
    return (
      <div
      ref={node => {
        this.container = node;
      }}
      className={styles.videocontainer}
    >
      <img src='https://assets.reponestrength.com/repone_large0059.jpg' />
    </div>
    )
  }
  }
}

Video.propTypes = {
  scrollable: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
};
export default Video;
