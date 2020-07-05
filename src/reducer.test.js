import {reducer, ActionCreator, ActionType} from "./reducer.js";

import films from "./mocks/films.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentGenre: `All genres`,
    filmList: films,
  });
});

it(`Reducer should set new current genre`, () => {
  expect(reducer({
    currentGenre: `All genres`,
  }, {
    type: ActionType.SET_CURRENT_GENRE,
    payload: `Drama`,
  })).toEqual({
    currentGenre: `Drama`,
  });

  expect(reducer({
    currentGenre: `All genres`,
  }, {
    type: ActionType.SET_CURRENT_GENRE,
    payload: `All genres`,
  })).toEqual({
    currentGenre: `All genres`,
  });
});

it(`Reducer should get film list by genre`, () => {
  expect(reducer({
    filmList: films,
  }, {
    type: ActionType.FILMS_BY_GENRE,
    payload: ActionCreator.getFilmsByGenre(`Drama`),
  })).toEqual({
    filmList: ActionCreator.getFilmsByGenre(`Drama`),
  });

  expect(reducer({
    filmList: films,
  }, {
    type: ActionType.FILMS_BY_GENRE,
    payload: ActionCreator.getFilmsByGenre(`Crime`),
  })).toEqual({
    filmList: ActionCreator.getFilmsByGenre(`Crime`),
  });
});
