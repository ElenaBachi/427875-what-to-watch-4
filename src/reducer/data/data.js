import {extend} from "../../utils/utils.js";
import {adaptFilm} from "../../adapters/film.js";

const initialState = {
  films: [],
  promoFilm: {},
  favoriteFilms: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  ADD_FILM_TO_LIST: `ADD_FILM_TO_LIST`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    };
  },
  loadFavoriteFilms: (films) => {
    return {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };
  },
  addFilmToList: (film) => {
    return {
      type: ActionType.ADD_FILM_TO_LIST,
      payload: film,
    };
  },
  setActiveFilm: (film) => ({
    type: ActionType.SET_ACTIVE_FILM,
    payload: film,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = response.data.map((it) => adaptFilm(it));
        dispatch(ActionCreator.loadFilms(films));
      })
      .catch((err) => {
        throw err;
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = Object.assign({}, adaptFilm(response.data), {isPromoFilm: true});
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const films = response.data.map((it) => adaptFilm(it));
        dispatch(ActionCreator.loadFavoriteFilms(films));
      })
      .catch((err) => {
        throw err;
      });
  },
  addFilmToList: (filmId, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${filmId}/${isFavorite}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.ADD_FILM_TO_LIST:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
