import {extend} from "../../utils/utils.js";
import {Filter} from "../../consts.js";

const initialState = {
  currentFilter: Filter.ALL_GENRES,
};

const ActionType = {
  SET_CURRENT_FILTER: `SET_CURRENT_FILTER`,
};

const ActionCreator = {
  changeFilter: (currentFilter) => ({
    type: ActionType.SET_CURRENT_FILTER,
    payload: currentFilter,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_FILTER:
      return extend(state, {
        currentFilter: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
