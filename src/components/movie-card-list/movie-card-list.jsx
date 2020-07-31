import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

import {getFilmListByGenre} from "../../utils/utils.js";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";

const MovieCardWrapped = withVideoPlayer(MovieCard);

const MovieCardList = (props) => {
  const {films, currentGenre, onFilmImgClick, filmCount} = props;

  const filmList = getFilmListByGenre(films, currentGenre);

  return (
    <div className="catalog__movies-list">
      {filmList.slice(0, filmCount).map((film, i) =>
        <MovieCardWrapped
          key={film.title + i}
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
  currentGenre: PropTypes.string.isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
  filmCount: PropTypes.number.isRequired,
};

export default MovieCardList;
