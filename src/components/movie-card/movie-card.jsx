import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation as ReviewsOperation} from "../../reducer/reviews/reviews.js";

import history from "../../history.js";

const MovieCard = (props) => {
  const {
    film,
    renderPlayer,
    handleMouseEnter,
    handleMouseLeave,
    loadReviews,
  } = props;
  const {previewVideoSrc, img, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        loadReviews(film);
        history.push(`/films/${film.id}`);
      }}
    >

      {renderPlayer(previewVideoSrc, img)}

      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loadReviews(film) {
    dispatch(ReviewsOperation.loadReviews(film.id));
  }
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
