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
      currenttext: words[0],
      nexttext: words[1]
    }
  ;}

  componentDidMount () {
    this.textinterval = setInterval(() => {
      var maxindex = words.length - 1;
      const currenttextindex = this.state.windex + 1 > maxindex ? 0 : this.state.windex + 1;
      const nexttextindex = this.state.windex === maxindex ? 0 : this.state.windex + 2;
      this.setState({windex: this.state.windex + 1, currenttext: words[currenttextindex], nexttext: words[nexttextindex]})
      
    }, 1000 )
  }

  componentWillUnmount() {
    clearInterval(this.updateinterval);
  }

  com

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
                <p ref={(node) => {this.currentnode = node;}}>{'Win ' + this.state.currenttext}</p>
                <p ref={(node) => {this.nextnode = node;}}>{'Win ' + this.state.nexttext}</p>
              </div>
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Landing;
