import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration,
      playing: false,
      playbacktime: 0,
      timeremaing: 0,
      top: 0,
      width: 0,
      scrollable: props.scrollable,
    };
  }

  componentDidMount() {
    this.node.play();

    window.onscroll = () => {
      this.node.pause();
    };

    if (this.props.scrollable) {
      this.updatetop();
      this.checkInterval = setInterval(() => {
        this.updatetop();
        this.scrubvideo();
      }, 40);
    }
  }

  componentWillUnmount() {
    clearInterval(this.checkInterval);
  }

  updatetop() {
    const noderect = this.node.getBoundingClientRect();
    const parentrect = this.node.parentElement.getBoundingClientRect();
    const nodetop = noderect.top;
    const parenttop = parentrect.top;
    const relativetop = nodetop - parenttop;
    this.setState({
      top: relativetop,
    });
  }

  scrubvideo() {
    const duration = this.state.duration;
    const nodetop = this.state.top;
    const scrubtime = (duration - nodetop) / 25;
    console.log(duration, nodetop);
    this.node.currentTime = scrubtime;
  }

  render() {
    return (
      <div className={styles.videocontainer}>
        <div className={styles.videoscrollbuffer}>
          <video
            ref={node => {
              this.node = node;
            }}
          >
            <source src={this.props.src} />
          </video>
        </div>
      </div>
    );
  }
}

Video.propTypes = {
  scrollable: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
export default Video;
