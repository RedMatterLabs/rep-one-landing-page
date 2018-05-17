import React from 'react';
import styles from './styles.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 1,
      height: -1,
      scrolling: false,
    };
  };

  render() {
    let open = {display: 'none'};
    if (this.props.open) open['display'] = 'flex';
    
    return (
      <div onClick={this.props.closeModal} className={styles.modalcontainer} style={open} >
        <div className={styles.modal}>
          <a className={`${styles.closebutton} ${styles.button}`} onClick={this.props.closeModal}>X</a>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
