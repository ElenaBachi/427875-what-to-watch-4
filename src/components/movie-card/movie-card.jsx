import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  render() {
    const {film, onFilmImgClick, renderPlayer, handleMouseEnter, handleMouseLeave} = this.props;
    const {src, img, title} = film;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onFilmImgClick(film)}
      >
        <div className="small-movie-card__image">
          {renderPlayer(src, img)}
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
  renderPlayer: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
