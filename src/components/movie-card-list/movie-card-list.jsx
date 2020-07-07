import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";

const MovieCardWrapped = withVideoPlayer(MovieCard);


const MovieCardList = (props) => {
  const {filmList, onFilmImgClick, filmCount} = props;

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
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })).isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
  filmCount: PropTypes.number.isRequired,
};

export default MovieCardList;
