import React from "react";
import PropTypes from "prop-types";

const MoviePageDetails = (props) => {
  const {film} = props;
  const {genre, year, director, fullActorList, runTime} = film;
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {fullActorList.join(`\n`)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{runTime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{year}</span>
          </p>
        </div>
      </div>


    </React.Fragment>
  );
};

MoviePageDetails.propTypes = {
  film: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    fullActorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.string.isRequired,
  }).isRequired,
};


export default MoviePageDetails;
