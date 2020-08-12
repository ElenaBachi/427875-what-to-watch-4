import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this._playerTimer = null;
  }

  componentDidMount() {
    const {src, img} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = img;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
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
    const {img} = this.props;

    return (
      <div className="small-movie-card__image">
        <video
          width="280"
          height="175"
          autoPlay={false}
          loop={true}
          ref={this._videoRef}
          poster={img}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
