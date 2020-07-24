import React, {Fragment} from "react";
import PropTypes from "prop-types";

import withVideoPlayerMain from "../../hocs/with-video-player-main/with-video-player-main.jsx";

import {connect} from "react-redux";

import {ActionCreator} from "../../reducer.js";

const VideoPlayerMain = (props) => {
  const {children} = props;

  return (
    <Fragment>
      <Fragment>
        <div className="player">
          {children}
        </div>
      </Fragment>
    </Fragment>
  );
};

VideoPlayerMain.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const mapStateToProps = (state) => ({
  activeFullVideo: state.activeFullVideo,
});

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick() {
    dispatch(ActionCreator.setFilmToPlay(null));
  },
});

export {VideoPlayerMain};
export default connect(mapStateToProps, mapDispatchToProps)(withVideoPlayerMain(VideoPlayerMain));
