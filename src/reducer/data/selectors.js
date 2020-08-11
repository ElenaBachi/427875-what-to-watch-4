import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {Filter} from "../../consts.js";

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

export const getFavoriteFilms = (state) => {
  return state[NameSpace.DATA].favoriteFilms;
};

const getActiveFilter = (state) => {
  return state[NameSpace.FILTER].currentFilter;
};

export const getFilmsByGenre = createSelector(
    getFilms,
    getActiveFilter,
    (films, filter) => {
      if (filter !== Filter.ALL_GENRES) {
        return films.filter((film) => film.genre === filter);
      }

      return films;
    }
);

const getFilmId = (state, filmId) => {
  return parseInt(filmId, 10);
};

export const getActiveFilmById = createSelector(
    getFilmId,
    getFilms,
    (filmId, films) => {
      return films.find((film) => film.id === filmId);
    }
);


