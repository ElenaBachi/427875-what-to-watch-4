import {reducer, ActionType, ActionCreator} from "./filter.js";

const Filter = {
  ALL_GENRES: `All genres`,
  DRAMA: `Drama`,
  FAMILY: `Family`,
};

it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentFilter: Filter.ALL_GENRES,
  });
});

it(`Reducer should set new current genre`, () => {
  expect(reducer({
    currentFilter: `All genres`,
  }, {
    type: ActionType.SET_CURRENT_FILTER,
    payload: Filter.DRAMA,
  })).toEqual({
    currentFilter: Filter.DRAMA,
  });
});

it(`Action creator should set filter`, () => {
  expect(
      ActionCreator.changeFilter(Filter.FAMILY))
      .toEqual({
        type: ActionType.SET_CURRENT_FILTER,
        payload: Filter.FAMILY,
      });
});
