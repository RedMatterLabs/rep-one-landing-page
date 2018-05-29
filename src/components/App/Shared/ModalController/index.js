import React from 'react';
import styles from './styles.scss';
import Modal from 'components/App/Shared/Modal/index.js';

class ModalController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idle: false,
    };

    this._mapPropsToState(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  _mapPropsToState(props) {
    for(var k in props) {
      this.state[k] = props[k];
    }
  }

  _scrollToTag(tag) {
    if (tag) {
      let element = document.querySelector(tag) || document.getElementById(tag);
      window.scroll({top: element.offsetTop});
    }
  }

  _onClick() {
    this.setState({idle: false});
    this._scrollToTag('#cta');
    return true;  
  }

  _closeModal() {
    this.setState({idle: false});
  }

  renderModal() {
      return (
      <Modal open={true} closeModal={this._closeModal.bind(this)}>
        <div className={styles.section}>
          <div className={styles.main}>
          <h1>You're already a step ahead of 95% of strength coaches</h1>
          <h2>Strength in team sports has a problem - modern training is sprinting ahead without it. Sign up for updates about RepOne, a leap forward in strength coaching, and leave other teams behind.</h2>
          <a onClick={this._onClick.bind(this)} className={styles.button}>
            Get in touch
          </a>
          </div>
        </div>
      </Modal>)
  }

  render() { 
    return (
        <div>
          {this.renderModal()}
        </div>
    );
  }
}

export default ModalController;
