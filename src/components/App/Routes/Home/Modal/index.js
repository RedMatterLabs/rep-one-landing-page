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
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
        <a href={this.props.link}>{this.props.linktext}</a>
      </div>
      </div>
    );
  }
}

export default Modal;
