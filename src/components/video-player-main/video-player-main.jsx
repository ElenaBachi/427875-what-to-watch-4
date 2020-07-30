import React, {Fragment} from "react";

import withVideoPlayerMain from "../../hocs/with-video-player-main/with-video-player-main.jsx";

import {connect} from "react-redux";

const VideoPlayerMain = () => {
  return (
    <Fragment>
      <Fragment>
        <div className="player">

        </div>
      </Fragment>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeFullVideo: state.activeFullVideo,
});

export {VideoPlayerMain};
export default connect(mapStateToProps)(withVideoPlayerMain(VideoPlayerMain));
