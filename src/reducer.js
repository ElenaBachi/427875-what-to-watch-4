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
  DOWNLOAD_MORE_FILM_CARDS: `DOWNLOAD_MORE_FILM_CARDS`,
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
    type: ActionType.DOWNLOAD_MORE_FILM_CARDS,
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

    case ActionType.DOWNLOAD_MORE_FILM_CARDS:
      return extend(state, {
        filmCount: state.filmCount + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
