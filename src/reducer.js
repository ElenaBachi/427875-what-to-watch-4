import {extend} from "./utils/utils.js";
import films from "./mocks/films.js";

const initialState = {
  currentGenre: `All genres`,
  filmList: films,
};

const ActionType = {
  GET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  FILMS_BY_GENRE: `FILMS_BY_GENRE`,
};

const ActionCreator = {
  getCurrentGenre: (genre) => ({
    type: ActionType.GET_CURRENT_GENRE,
    payload: genre,
  }),

  getFilmsByGenre: (genre) => {
    let filteredFilms = films;

    if (genre !== initialState.currentGenre) {
      filteredFilms = films.filter((film) => film.genre);
    }

    return {
      type: ActionType.FILMS_BY_GENRE,
      payload: filteredFilms,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });

    case ActionType.FILMS_BY_GENRE:
      return extend(state, {
        filmList: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
