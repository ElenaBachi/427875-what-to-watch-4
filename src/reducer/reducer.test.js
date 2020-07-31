import {reducer, ActionCreator, ActionType} from "./reducer.js";

import films from "../mocks/films.js";
import promoFilm from "../mocks/promo-film.js";
import film from "../mocks/film.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentGenre: `All genres`,
    filmList: films,
    filmCount: 8,
    activeFullVideo: null,
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

it(`Reducer should set activeFullVideo`, () => {
  expect(reducer({
    activeFullVideo: null,
  }, {
    type: ActionType.OPEN_FULL_VIDEO,
    payload: promoFilm,
  })).toEqual({
    activeFullVideo: promoFilm,
  });

  expect(reducer({
    activeFullVideo: null,
  }, {
    type: ActionType.OPEN_FULL_VIDEO, payload: film,
  })).toEqual({
    activeFullVideo: film,
  });
});
