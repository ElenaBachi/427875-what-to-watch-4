import {extend} from "../../utils/utils.js";
import {adaptFilm} from "../../adapters/film.js";

const initialState = {
  films: [],
  promoFilm: {},
  activeFilm: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
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
    case ActionType.SET_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
