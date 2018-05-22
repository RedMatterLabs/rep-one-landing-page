import React from 'react';
import styles from './styles.scss';
import ModalController from 'components/App/Shared/ModalController/index.js';

class TouchIdle extends React.Component {

  constructor(props) {
    super(props);
    this.appcontainer = null;
    this.state = {
      idle: false,
      appeared: false
    }
  }

  componentDidMount() {
    this.resetIdle();
    const listeners = ['touchdown', 'scroll'];
    listeners.forEach(event => document.addEventListener(event, this.resetIdle.bind(this)));
  }

  componentWillUnmount() {
    this.clearIdle();
  }

  clearIdle() {
    if (this.idletime) clearInterval(this.idletime);
  }

  resetIdle() {
    if (!this.state.appeared) {
      this.clearIdle();
      this.idletime = setTimeout(() => {
        this.setState({idle: true, appeared: true});
      }, 10000)
    }

  }

  render() { 
    return (
        <div>
          <ModalController idle={this.state.idle}/>)
          </div>
    );
  }
}

export default TouchIdle;
