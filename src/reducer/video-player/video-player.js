import {extend} from "../../utils/utils.js";

const initialState = {
  activeFullVideo: null,
};

const ActionType = {
  OPEN_FULL_VIDEO: `OPEN_FULL_VIDEO`,
};

const ActionCreator = {
  setFilmToPlay: (film) => ({
    type: ActionType.OPEN_FULL_VIDEO,
    payload: film,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_FULL_VIDEO:
      return extend(state, {
        activeFullVideo: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
