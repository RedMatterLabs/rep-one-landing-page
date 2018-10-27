import React from 'react';
import styles from './styles.scss';
import Modal from 'components/App/Shared/Modal/index.js';
import ReactGA from 'react-ga';

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
    ReactGA.event({
      category: 'cta',
      action: 'scroll to form'
    });
    return true;  
  }

  _closeModal() {
    this.setState({idle: false});
  }

  renderModal() {
      return (
      <Modal open={this.state.idle} closeModal={this._closeModal.bind(this)}>
          <div className={styles.grid}>
            <div className={styles.popupLeft}><img src="http://assets.reponestrength.com/popup_left.png" /></div>
            <div className={styles.popupRight}>
              <div className={styles.popupTitle}>Download our free Velocity Based Training White Papers</div>
              <ul className={styles.popupSubtitle}>
                <li>Build individualized athlete tables</li>
                <li>Use our aggregate tables</li>
                <li>Learn from our example data</li>
                <li>Make your athletes stronger</li>
              </ul>
              <a onClick={this._onClick.bind(this)} className={styles.popupButton}>
                Send Me the White Papers!
              </a>
              <a onClick={this._closeModal.bind(this)} className={styles.closeButton}>
                No thanks, I don't want the free white papers. I'll let my competition read them instead.
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
