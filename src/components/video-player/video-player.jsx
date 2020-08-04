import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this._playerTimer = null;
  }

  componentDidMount() {
    const {previewVideoSrc} = this.props;
    const video = this._videoRef.current;

    video.src = previewVideoSrc;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    const onPlay = () => {
      video.play();
    };

    if (this.props.isPlaying) {
      this._playerTimer = setTimeout(() => onPlay(), 1000);
    } else {
      clearTimeout(this._playerTimer);
      video.load();
    }
  }

  render() {
    const {poster} = this.props;

    return (
      <video
        width="280"
        height="175"
        poster={poster}
        autoPlay={false}
        loop={true}
        ref={this._videoRef}
      />
    );
  }
}

VideoPlayer.propTypes = {
  previewVideoSrc: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
