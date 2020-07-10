import {extend} from "./utils/utils.js";
import {ALL_GENRES} from "./consts/consts.js";
import films from "./mocks/films.js";

const initialState = {
  currentGenre: ALL_GENRES,
  filmList: films,
  filmCount: 8,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  FILMS_BY_GENRE: `FILMS_BY_GENRE`,
  INCREASE_FILM_CARD_COUNT: `INCREASE_FILM_CARD_COUNT`,
};

const ActionCreator = {
  setCurrentGenre: (genre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  }),

  getFilmsByGenre: (genre = ALL_GENRES) => {
    let filteredFilms = films;

    if (genre !== ALL_GENRES) {
      filteredFilms = films.filter((film) => film.genre === genre);
    }

    return {
      type: ActionType.FILMS_BY_GENRE,
      payload: filteredFilms,
    };
  },

  downloadFilmCard: () => ({
    type: ActionType.INCREASE_FILM_CARD_COUNT,
    payload: 8,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });

    case ActionType.FILMS_BY_GENRE:
      return extend(state, {
        filmList: action.payload,
      });

    case ActionType.INCREASE_FILM_CARD_COUNT:
      return extend(state, {
        filmCount: state.filmCount + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
