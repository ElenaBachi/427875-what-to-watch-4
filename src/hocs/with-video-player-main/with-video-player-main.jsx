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

    getTooglerProgress() {
      return String((this.state.currentTime / this.state.duration) * 100);
    }

    componentDidMount() {
      const {getActiveFilm, filmId} = this.props;
      const activeFilm = getActiveFilm(filmId);
      const video = this._videoRef.current;

      video.src = activeFilm.videoSrc;
      video.poster = activeFilm.poster;

      video.ontimeupdate = () => {
        this.setState({
          duration: Math.floor(video.duration - video.currentTime),
          currentTime: video.currentTime,
        });
      };
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

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
