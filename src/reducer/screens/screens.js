import {extend} from "../../utils/utils.js";
import {Screen} from "../../consts/consts.js";

const initialState = {
  currentScreen: Screen.MAIN,
};

const ActionType = {
  SET_ACTIVE_SCREEN: `SET_ACTIVE_SCREEN`,
};

const ActionCreator = {
  setActiveScreen: (screen) => ({
    type: ActionType.SET_ACTIVE_SCREEN,
    payload: screen,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_SCREEN:
      return extend(state, {
        currentScreen: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
