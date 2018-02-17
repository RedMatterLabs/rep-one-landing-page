import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      duration: 0,
      playbacktime: 0,
      timeremaing: 0,
      height: 0,
      width: 0,
      scrollable: props.scrollable,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  update() {
    const box = this.node.getBoundingClientRect();
    const videoupdate = {
        duration: this.node.getDuration(),
    }

    this.setState({
      top: box.top,
      height: box.height,
      timeremaing:  videoupdate.timeremaing,
      duration: videoupdate.duration,
      playing: videoupdate.playing,
    });


    }
  }

  seekvideo() {
    const scrolltop = this.props.parallax.top;
    const height = this.state.height;
    const thistop = this.state.top;
    const duration = this.state.duration;
    let seekto = duration * ((scrolltop - ))
    this.node.video.seek(seekto);
  }

  render() {
    update();
    if (this.props.parallax && this.state.scrollable) {
        seekvideo(;)
    }
    return (
      <video
        ref={node => {
          this.node = node;
        }}
      >
        {this.props.sources.map(source =>
          <source className={styles.teamlogo} src={source} alt="logo" />
        )}
      </video>
    );
  }
}

Video.propTypes = {
  sources: PropTypes.video.isRequired,
  scrollable: PropTypes.bool.isRequired,
};
export default Video;
