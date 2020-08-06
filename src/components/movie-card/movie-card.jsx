import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/data/data.js";

import {Screen} from "../../consts/consts.js";

const MovieCard = (props) => {
  const {
    film,
    handleCardClick,
    renderPlayer,
    handleMouseEnter,
    handleMouseLeave,
    onScreenChange,
  } = props;
  const {previewVideoSrc, img, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(evt) => {
        evt.preventDefault();
        handleCardClick(film);
        onScreenChange(Screen.FILM_PAGE);
      }}
    >
      <div className="small-movie-card__image">
        {renderPlayer(previewVideoSrc, img)}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  onScreenChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleCardClick(film) {
    dispatch(ActionCreator.setActiveFilm(film));
  },
});

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
