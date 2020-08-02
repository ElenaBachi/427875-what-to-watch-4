import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getActiveFullVideo} from "../../reducer/video-player/selectors.js";

import withVideoPlayerMain from "../../hocs/with-video-player-main/with-video-player-main.jsx";

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
  activeFullVideo: getActiveFullVideo(state),
});

export {VideoPlayerMain};
export default connect(mapStateToProps)(withVideoPlayerMain(VideoPlayerMain));
