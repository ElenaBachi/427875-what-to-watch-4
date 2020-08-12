import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withVideoPlayerMain = (Component) => {
  class WithVideoPlayerMain extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isFullScreen: false,
        duration: 0,
        currentTime: 0,
      };

      this._videoRef = createRef();

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreen = this.handleFullScreen.bind(this);
    }

    handlePlayButtonClick(evt) {
      evt.preventDefault();
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handleFullScreen(evt) {
      let elem = evt.target;

      if (!document.fullscreenElement) {
        elem.requestFullscreen();
      } else {
        document.exitFullscreen();
      }

      this.setState({
        isFullScreen: true,
      });
    }

    componentDidMount() {
      const {getActiveFilm, filmId} = this.props;
      const activeFilm = getActiveFilm(filmId);
      const video = this._videoRef.current;

      video.src = activeFilm.videoSrc;
      video.poster = activeFilm.poster;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      video.ontimeupdate = () => {
        this.setState({
          duration: Math.floor(video.duration - video.currentTime),
          currentTime: video.currentTime,
        });
      };

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;

      video.ontimeupdate = () => null;

      this.setState({
        isPlaying: false,
        isFullScreen: false,
        duration: 0,
        currentTime: 0,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          isPlaying={this.state.isPlaying}
          isFullScreen={this.state.isFullScreen}
          handlePlayButtonClick={this.handlePlayButtonClick}
          handleFullScreen={this.handleFullScreen}
          getTooglerProgress={this.getTooglerProgress}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
        />
      );
    }
  }

  WithVideoPlayerMain.propTypes = {
    getActiveFilm: PropTypes.func.isRequired,
    filmId: PropTypes.number.isRequired
  };

  return WithVideoPlayerMain;
};

export default withVideoPlayerMain;
