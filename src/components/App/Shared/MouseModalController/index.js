import React from 'react';
import styles from './styles.scss';
import ModalController from 'components/App/Shared/ModalController/index.js';

class MouseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idle: false,
      canidle: false,
      appeared: false
    }
  }

  componentDidMount() {
    document.body.addEventListener('mouseleave', this.setIdle.bind(this));
    this.canidletimeout = setTimeout(() => {
      this.setState({canidle: true});
    }, 10000)
  }

  componentWillUnmount() {
    if (this.canidletimeout)
    clearTimeout(this.canidletimeout);
  }

  setIdle() {
    if (this.state.canidle && !this.state.appeared) {
      this.setState({idle: true, appeared: true}); 
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

export default MouseModal;
