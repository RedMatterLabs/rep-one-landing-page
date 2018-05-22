import React, {Component} from 'react';
import styles from './styles.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 1,
      height: -1,
      scrolling: false,
    };
  };

  render() {

    let style = (this.props.open) ? {display: 'flex'} : {display: 'none'};
    
    return (
      <div onClick={this.props.closeModal} className={styles.modalcontainer} style={style} >
        <div className={styles.modal}>
          <a className={`${styles.closebutton} ${styles.button}`} onClick={this.props.closeModal}>X</a>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
