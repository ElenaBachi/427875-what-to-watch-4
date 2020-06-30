import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

import withVideoPlayer from "../hocs/with-video-player/with-video-player.jsx";

const MovieCardWrapped = withVideoPlayer(MovieCard);


const MovieCardList = (props) => {
  const {films, onFilmImgClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) =>
        <MovieCardWrapped
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
