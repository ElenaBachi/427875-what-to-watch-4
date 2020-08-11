import React from "react";
import PropTypes from "prop-types";

import {getRatingLevel} from "../../utils/utils.js";

const MoviePageOverview = (props) => {
  const {activeFilm} = props;
  const {description, score, count, director, actorList} = activeFilm;

  const level = getRatingLevel(score);

  const starring = actorList.join(`, `);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </React.Fragment>
  );
};

MoviePageOverview.propTypes = {
  activeFilm: PropTypes.shape({
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.array.isRequired,
  }).isRequired,
};

export default MoviePageOverview;
