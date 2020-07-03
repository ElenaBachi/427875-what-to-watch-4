import {extend} from "./utils/utils.js";
import films from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  filmList: films,
};

const ActionType = {
  GET_CURRENT_GENRE: `GET_CURRENT_GENRE`,
  FILMS_BY_GENRE: `FILMS_BY_GENRE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CURRENT_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.FILMS_BY_GENRE:
      return extend(state, {
        filmList: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType};
