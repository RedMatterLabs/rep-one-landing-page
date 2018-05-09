import React from 'react';
import styles from './styles.scss';
import Header from './Header/index.js'
import Footer from './Footer/index.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Modal from 'components/App/Routes/Home/Modal/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appcontainer = null;
    this.state = {
      idle: false
    }
  }

  componentDidMount() {
    this.resetIdle();
    const listeners = ['mousemove', 'keydown', 'scroll'];
    document.body.addEventListener('mouseleave', this.setIdle.bind(this));
    listeners.forEach(event => document.addEventListener(event, this.resetIdle.bind(this)));
  }

  componentWillUnmount() {
    this.clearIdle();
  }

  clearIdle() {
    if (this.idletime) clearInterval(this.idletime);
  }

  resetIdle() {
    this.clearIdle();
    this.idletime =    this.idletime = setTimeout(() => {
      this.setState({idle: true});
    }, 600000)

  }

  setIdle() {
    this.clearIdle();
    this.idletime =    this.idletime = setTimeout(() => {
      this.setState({idle: true});
    }, 10000)

  }
  
  scrollToTag(tag) {
    if (tag) {
      let element = document.querySelector(tag) || document.getElementById(tag);
      window.scroll({top: element.offsetTop});
    }
  }

  renderModal() {
    function onClick() {
      this.setState({idle: false});
      this.scrollToTag('#cta');
      return true;
    }

    onClick = onClick.bind(this);

    if (this.state.idle) {
      return (
      <Modal>
        <p>Since you're here, you're already a step ahead of 95% of strength coaches. Strength in team sports has a problem - modern training is sprinting ahead without it. Sign up for updates about RepOne, a leap forward in strength coaching, and leave other teams behind.</p>
        <a onClick={onClick} className={styles.button}>
          Get in touch
        </a>
      </Modal>)
    } else { return null }
  }

  render() { 
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header/>
          {this.renderModal()}
          <div className={styles.content}>
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
