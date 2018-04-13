import React from 'react';
import styles from './styles.scss';
import Video from 'components/App/Shared/Video/index.js';

const words= ["on the field",
"on the court",
"in the rink",
"on the pitch",
"on the track",
"in the pool",
"on the road",
"on the slope",
"on the field",
"in the games",
"in the ring"];

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windex: 0,
      windexnext: 1,
      winiter: 0,
      transitionstate: 0,
      currenttext: words[0],
      nexttext: words[1],
      animationiter: 0
    }
  ;}

  componentDidMount () {
    this.animateinterval = setInterval(() => {
        this.animate();
    }, 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.animateinterval);
  }

  animate () {
    this.updatewords()
    this.updatetextposition()
  }

  updatewords() {
    const maxindex = words.length - 1;
    switch(this.state.animationiter) {
      case 1: 
        const nextindex = this.state.windexnext  === maxindex ? 0 : this.state.windexnext + 1;
        this.setState({nexttext: words[nextindex], windexnext: nextindex});
        break;
      case 2: 
        const index = this.state.windex === maxindex ? 0 : this.state.windex + 1;
        this.setState({windex: index, currenttext: words[index]});
        break;
      default: break;
    }
 
  }

  updatetextposition () {
    switch(this.state.animationiter) {
      case 0:
        this.currentnode.className = styles.middle;
        this.nextnode.className = styles.below;
        this.setState({animationiter: 1});
        break; 
      case 1:
        this.currentnode.className = styles.above;
        this.nextnode.className = styles.middle;
        this.setState({animationiter: 2});
        break;
      case 2:
        this.currentnode.className = styles.below;
        this.nextnode.className = styles.middle;
        this.setState({animationiter: 3});
        break;
      case 3:
        this.currentnode.className = styles.middle;
        this.nextnode.className = styles.above;
        this.setState({animationiter: 0});
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={styles.section}>
        <div className={styles.bg}>
          <video autoPlay="true" muted="true" loop="true" className={styles.herovid}>
            <source src="https://assets.reponestrength.com/hero_movie_no_sound.m4v" type="video/mp4" />
          </video>
          <img className={styles.heroimg} src='https://assets.reponestrength.com/hero_mobile_full_screen.jpg' />
        </div>
        <div className={styles.main}>
          <h1>
            Win in the weight room<br />
            <div className={styles.rolotext}>
              <div>
                <p ref={(node) => {this.currentnode = node}} className={`${styles.middle} `}>{'Win ' + this.state.currenttext}</p>
                <p ref={(node) => {this.nextnode = node}} className={`${styles.below} `}>{'Win ' + this.state.nexttext}</p>
              </div>
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Landing;
