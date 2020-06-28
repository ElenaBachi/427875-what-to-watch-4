import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

const MovieCardList = (props) => {
  const {films, onFilmImgClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <MovieCard
          key={film.title}
          film={film}
          onFilmImgClick={onFilmImgClick}
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
        src: PropTypes.string.isRequired,
      })).isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
};

export default MovieCardList;
