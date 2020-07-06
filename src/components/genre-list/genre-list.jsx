import React from "react";
import PropTypes from "prop-types";
import {getFilmGenres} from "../../utils/utils.js";

const GenreList = (props) => {
  const {filmList, onFilterCLick, currentGenre} = props;
  const genres = getFilmGenres(filmList);

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
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })).isRequired,
};

export default GenreList;
