import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {film, onFilmImgClick} = this.props;
    const {src, img, title} = film;
    const {isPlaying} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => this.setState({isPlaying: true})}
        onMouseLeave={() => this.setState({isPlaying: false})}
        onClick={() => onFilmImgClick(film)}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={src}
            poster={img}
            isPlaying={isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

export default MovieCard;
