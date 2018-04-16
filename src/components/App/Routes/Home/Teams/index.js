import React from 'react';
import styles from './styles.scss';

// I couldn't find a better way to include these :/
// todo: expand to an array of object with team name and image data use team name to create alt text for seo alt = 'team name uses rep one technology'
const words = [
  'https://assets.reponestrength.com/eagles.png',
  'https://assets.reponestrength.com/byu.png',
  'https://assets.reponestrength.com/kennesaw.png',
  'https://assets.reponestrength.com/baylor.png',
];

//todo: teams and words animations should be one component

class Teams extends React.Component {
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
    }, 2000 );
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
  render(){
    return (
      <div className={styles.section} id="teams">
        <div className={styles.main}>
          <h1>FROM THE CREATORS OF OPENBARBELL</h1>
          <h2>Trusted by some of the best teams in the world.</h2>

          <div className={styles.teamlogocontainer}>
              <div className={styles.logocontainer}>
                <img ref={(node) => {this.currentnode = node}} className={styles.middle} src={this.state.currenttext} alt='logo'/>
              </div>
              <div className={styles.logocontainer}>
                <img ref={(node) => {this.nextnode = node}} className={styles.below} src={this.state.nexttext} alt='logo'/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
