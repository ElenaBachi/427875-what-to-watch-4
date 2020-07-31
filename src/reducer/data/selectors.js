import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {ALL_GENRES} from "../../consts/consts.js";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getActiveFilter = (state) => {
  return state[NameSpace.FILTER].currentFilter;
};

export const getFilmsByGenre = createSelector(
    getFilms,
    getActiveFilter,
    (films, filter) => {
      if (filter !== ALL_GENRES) {
        return films.filter((film) => film.genre === filter);
      }

      return films;
    }
);


