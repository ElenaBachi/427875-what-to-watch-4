import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

import {getVideoTimeToLeft} from "../../utils/utils.js";

import {Screen} from "../../consts/consts.js";

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
    }

    componentDidMount() {
      const {activeFullVideo} = this.props;
      const video = this._videoRef.current;

      video.src = activeFullVideo.videoSrc;
      video.poster = activeFullVideo.poster;

      video.ontimeupdate = () => {
        this.setState({
          duration: Math.floor(video.duration - video.currentTime),
          currentTime: video.currentTime,
        });
      };
    }

    getTooglerProgress() {
      return String((this.state.currentTime / this.state.duration) * 100);
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

    render() {
      const {onScreenChange} = this.props;
      const {isPlaying, isFullScreen} = this.state;
      const duration = getVideoTimeToLeft(this.state.duration);

      return (
        <Component>
          <video className="player__video" ref={this._videoRef} />

          <button type="button" className="player__exit"
            onClick={() => {
              onScreenChange(Screen.MAIN);
            }}
          >Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={this.getTooglerProgress()} max="100"></progress>
                <div className="player__toggler" style={{left: `${this.getTooglerProgress()}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{duration}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play"
                onClick={this.handlePlayButtonClick}
              >

                {isPlaying ?
                <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Play</span>
                </> :
                <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
                </>}

              </button>

              <div className="player__name">Transpotting</div>

              <button type="button" className="player__full-screen"
                onClick={this.handleFullScreen}
              >

                {isFullScreen ? `` :
                <>
                  <svg viewBox="0 0 27 27" width="27" height="27">
                    <use xlinkHref="#full-screen"></use>
                  </svg>
                  <span>Full screen</span>
                </>}
              </button>

            </div>
          </div>
        </Component>
      );
    }
  }

  WithVideoPlayerMain.propTypes = {
    activeFullVideo: PropTypes.object.isRequired,
    onScreenChange: PropTypes.func.isRequired,
  };

  return WithVideoPlayerMain;
};

export default withVideoPlayerMain;
