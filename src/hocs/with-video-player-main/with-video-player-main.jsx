import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withVideoPlayerMain = (Component) => {
  class WithVideoPlayerMain extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isfullScreen: false,
        duration: 0,
        currentTime: 0,
      };

      this._videoRef = createRef();

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
      this.handleMiniScreenEsc = this.handleMiniScreenEsc.bind(this);
    }

    handlePlayButtonClick(evt) {
      evt.preventDefault();
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handleFullScreenClick(evt) {
      evt.preventDefault();
      this.setState({isfullScreen: !this.state.isfullScreen});
    }

    handleMiniScreenEsc(evt) {
      if (evt.key === `Escape`) {
        this.setState({isfullScreen: false});
      }
    }

    componentDidMount() {
      const {activeFullVideo} = this.props;
      const video = this._videoRef.current;

      video.src = activeFullVideo.src;
      video.poster = activeFullVideo.img;

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
      const {onExitButtonClick} = this.props;
      const {isfullScreen} = this.state;

      return (
        <Component>
          <video className="player__video" ref={this._videoRef} />

          <button type="button" className="player__exit"
            onClick={onExitButtonClick}
          >Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={this.getTooglerProgress()} max="100"></progress>
                <div className="player__toggler" style={{left: `${this.getTooglerProgress()}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{this.state.duration}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play"
                onClick={this.handlePlayButtonClick}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">Transpotting</div>

              <button type="button" className="player__full-screen"
                onClick={this.handleFullScreenClick}
                onKeyDown={this.handleMiniScreenEsc}
              >

                {isfullScreen ? `` :
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
    onExitButtonClick: PropTypes.func.isRequired,
  };

  return WithVideoPlayerMain;
};

export default withVideoPlayerMain;
