import {reducer, ActionType} from "./films-load-btn.js";

it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    filmCount: 8,
  });
});

it(`Reducer should increase film card count`, () => {
  expect(reducer({
    filmCount: 8,
  }, {
    type: ActionType.INCREASE_FILM_CARD_COUNT,
    payload: 1,
  })).toEqual({
    filmCount: 9,
  });

  expect(reducer({
    filmCount: 8,
  }, {
    type: ActionType.INCREASE_FILM_CARD_COUNT,
    payload: 10,
  })).toEqual({
    filmCount: 18,
  });
});
