import {reducer, ActionType, ActionCreator} from "./filter.js";

const genres = {
  ALL_GENRES: `All genres`,
  DRAMA: `Drama`,
  FAMILY: `Family`,
};

it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentFilter: genres.ALL_GENRES,
  });
});

it(`Reducer should set new current genre`, () => {
  expect(reducer({
    currentFilter: `All genres`,
  }, {
    type: ActionType.SET_CURRENT_FILTER,
    payload: genres.DRAMA,
  })).toEqual({
    currentFilter: genres.DRAMA,
  });
});

it(`Action creator should set filter`, () => {
  expect(
      ActionCreator.changeFilter(genres.FAMILY))
      .toEqual({
        type: ActionType.SET_CURRENT_FILTER,
        payload: genres.FAMILY,
      });
});
