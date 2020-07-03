import React from "react";
import PropTypes from "prop-types";

const MoviePageOverview = (props) => {
  const {film} = props;
  const {description, rating, director, actorList} = film;
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{rating.level}</span>
          <span className="movie-rating__count">{rating.count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actorList}</strong></p>
      </div>
    </React.Fragment>
  );
};

MoviePageOverview.propTypes = {
  film: PropTypes.shape({
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
    }).isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviePageOverview;
