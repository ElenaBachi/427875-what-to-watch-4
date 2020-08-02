import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilmGenres} from "../../utils/utils.js";

import {getFilms} from "../../reducer/data/selectors.js";
import {getActiveFilter} from "../../reducer/filter/selectors.js";
import {ActionCreator} from "../../reducer/filter/filter.js";


const GenreList = (props) => {
  const {films, onFilterCLick, currentGenre} = props;
  const genres = getFilmGenres(films);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ``}`}
            onClick={(evt) => {
              evt.preventDefault();
              onFilterCLick(genre);
            }}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

//

GenreList.propTypes = {
  onFilterCLick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
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
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  currentGenre: getActiveFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterCLick(genre) {
    dispatch(ActionCreator.changeFilter(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
