import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieCard from "../movie-card/movie-card.jsx";

import {getFilmCount} from "../../reducer/films-load-btn/selectors.js";
import {ActionCreator} from "../../reducer/data/data.js";

import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";

const MovieCardWrapped = withVideoPlayer(MovieCard);

const MovieCardList = (props) => {
  const {films, filmCount, onScreenChange} = props;

  return (
    <div className="catalog__movies-list">
      {films.slice(0, filmCount).map((film, i) =>
        <MovieCardWrapped
          key={film.title + i}
          film={film}
          onScreenChange={onScreenChange}
        />
      )}
    </div>
  );
};

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        videoSrc: PropTypes.string.isRequired,
        previewVideoSrc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        actorList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        runTime: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        bgColor: PropTypes.string.isRequired,
      })).isRequired,
  filmCount: PropTypes.number.isRequired,
  onScreenChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmCount: getFilmCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleCardClick(film) {
    dispatch(ActionCreator.setActiveFilm(film));
  },
});

export {MovieCardList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);
