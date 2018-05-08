import React from 'react';
import styles from './styles.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      top: 1,
      height: -1,
      scrolling: false,
    };
  };

  render() {
    return (
      <div className={styles.modalcontainer}>
      <div className={styles.modal}>
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default Modal;
