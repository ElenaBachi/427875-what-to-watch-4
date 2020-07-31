import {extend} from "../../utils/utils.js";

const initialState = {
  filmCount: 8,
};

const ActionType = {
  INCREASE_FILM_CARD_COUNT: `INCREASE_FILM_CARD_COUNT`,
};

const ActionCreator = {
  downloadFilmCards: () => ({
    type: ActionType.INCREASE_FILM_CARD_COUNT,
    payload: 8,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE_FILM_CARD_COUNT:
      return extend(state, {
        filmCount: state.filmCount + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
