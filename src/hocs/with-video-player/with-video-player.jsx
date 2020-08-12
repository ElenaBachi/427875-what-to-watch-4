import React, {PureComponent} from "react";
import VideoPlayer from "../../components/video-player/video-player.jsx";

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
      this.setState({isPlaying: true});
    }

    handleMouseLeave() {
      this.setState({isPlaying: false});
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}

          renderPlayer={(src, img) => {
            return (
              <VideoPlayer
                src={src}
                img={img}
                isPlaying={isPlaying}
              />
            );
          }}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
