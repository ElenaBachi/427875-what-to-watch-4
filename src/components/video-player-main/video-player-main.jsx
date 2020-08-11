import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getActiveFilmById} from "../../reducer/data/selectors.js";

import history from "../../history.js";

import withVideoPlayerMain from "../../hocs/with-video-player-main/with-video-player-main.jsx";
class VideoPlayerMain extends PureComponent {
  constructor(props) {
    super(props);

    this.handleFullScreen = this.handleFullScreen.bind(this);
  }

  handleFullScreen(evt) {
    let elem = evt.target;

    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  render() {
    const {getActiveFilm, filmId} = this.props;
    const activeFilm = getActiveFilm(filmId);

    return (
      <>
        <video
          className="player__video"
          src={activeFilm.videoSrc}
          poster={activeFilm.poster}
        />

        <button
          type="button"
          className="player__exit"
          onClick={() => history.goBack()}
        >
          Exit
        </button>
      </>
    );
  }
}

VideoPlayerMain.propTypes = {
  getActiveFilm: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  getActiveFilm: (filmId) => getActiveFilmById(state, filmId),
});

export {VideoPlayerMain};
export default connect(mapStateToProps)((withVideoPlayerMain(VideoPlayerMain)));
