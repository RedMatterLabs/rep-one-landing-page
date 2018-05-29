import React, {Component} from 'react';
import styles from './styles.scss';
import onClickOutside from "react-onclickoutside";

class Modal extends Component {

  render() {
    let style = (this.props.open) ? {display: 'flex'} : {display: 'none'};
    let InnerModalWrapped = onClickOutside(InnerModal)

    return (
      <div className={styles.modalcontainer} style={style} >
        <InnerModalWrapped onClickOutside={this.props.closeModal} closeModal={this.props.closeModal}>
          {this.props.children}
        </InnerModalWrapped>
      </div>
    );
  }

}

class InnerModal extends Component {
  handleClickOutside = evt => {
    this.props.onClickOutside()
  }

  render() {
    return (
      <div className={styles.modal}>
        <a className={`${styles.closebutton} ${styles.button}`} onClick={this.props.closeModal}>X</a>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;
