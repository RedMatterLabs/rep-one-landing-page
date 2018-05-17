import React from 'react';
import styles from './styles.scss';
import Modal from 'components/App/Shared/Modal/index.js';

class TouchModal extends React.Component {

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

    function closeModal() {
      this.setState({idle: false});
    }

    closeModal = closeModal.bind(this);

      return (
      <Modal open={this.state.idle} closeModal={closeModal}>
        <div className={styles.section}>
          <div className={styles.main}>
          <h1>Since you're here...</h1>
          <h2>You're already a step ahead of 95% of strength coaches. Strength in team sports has a problem - modern training is sprinting ahead without it. Sign up for updates about RepOne, a leap forward in strength coaching, and leave other teams behind.</h2>
          <a onClick={onClick} className={styles.button}>
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

export default TouchModal;
