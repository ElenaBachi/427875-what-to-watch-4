import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

const MovieCardList = (props) => {
  const {films} = props;
  const onFilmTitleClick = () => {};
  const onMouseEnter = () => {};
  const onMouseLeave = () => {};

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <MovieCard
          key={film.title}
          film={film}
          onFilmTitleClick={onFilmTitleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )};
    </div>
  );
};

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })).isRequired,
};

export default MovieCardList;
