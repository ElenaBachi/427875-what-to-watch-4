import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getActiveFilmById} from "../../reducer/data/selectors.js";

import history from "../../history.js";

import {getVideoTimeToLeft} from "../../utils/utils.js";

import withVideoPlayerMain from "../../hocs/with-video-player-main/with-video-player-main.jsx";
class VideoPlayerMain extends PureComponent {

  render() {
    const {videoRef, getTooglerProgress, duration, isPlaying, isFullScreen, handlePlayButtonClick, handleFullScreen} = this.props;

    return (
      <div className="player">
        <video
          className="player__video"
          style={{width: `100%`, height: `100%`}}
          ref={videoRef}
        />
        <button
          type="button"
          className="player__exit"
          onClick={() => history.goBack()}
        >
            Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={getTooglerProgress} max="100"></progress>
              <div className="player__toggler" style={{left: `${getTooglerProgress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{getVideoTimeToLeft(duration)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play"
              onClick={handlePlayButtonClick}
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
              onClick={handleFullScreen}
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
      </div>
    );
  }
}
VideoPlayerMain.propTypes = {
  videoRef: PropTypes.object.isRequired, getTooglerProgress: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  handlePlayButtonClick: PropTypes.func.isRequired,
  handleFullScreen: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  getActiveFilm: (filmId) => getActiveFilmById(state, filmId),
});
export {VideoPlayerMain};
export default connect(mapStateToProps)((withVideoPlayerMain(VideoPlayerMain)));
