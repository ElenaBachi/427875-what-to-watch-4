import {extend} from "./utils/utils.js";
import films from "./mocks/films.js";

const initialState = {
  currentGenre: `All genres`,
  filmList: films,
};

const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  FILMS_BY_GENRE: `FILMS_BY_GENRE`,
};

const ActionCreator = {
  setCurrentGenre: (genre) => ({
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  }),

  getFilmsByGenre: (genre = `All genres`) => {
    let filteredFilms = films;

    if (genre !== `All genres`) {
      filteredFilms = films.filter((film) => film.genre === genre);
    }

    return {
      type: ActionType.FILMS_BY_GENRE,
      payload: filteredFilms,
    };
  },
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
