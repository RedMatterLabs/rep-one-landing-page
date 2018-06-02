import React, {Component} from 'react';
import styles from './styles.scss';

class Modal extends Component {

  render() {
    let style = (this.props.open) ? {display: 'flex'} : {display: 'none'};

    return (
      <div className={styles.modalcontainer} style={style} >
        <div className={styles.modal}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Modal;
