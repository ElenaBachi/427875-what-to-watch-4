import {reducer, ActionType} from "./data.js";

const films = [
  {
    id: 1,
    title: `title1`,
    genre: `genre1`,
    year: 2020,
    img: `img-1.jpg`,
    poster: `poster-1.jpg`,
    cover: `cover-1.jpg`,
    videoSrc: `video-link-1`,
    previewVideoSrc: `preview-video-link-1`,
    description: `description1`,
    score: 9,
    count: 200,
    director: `director1`,
    actorList: [`Actor1`, `Actor2`, `Actor3`],
    runTime: 100,
  }, {
    id: 2,
    title: `title2`,
    genre: `genre2`,
    year: 2019,
    img: `img-2.jpg`,
    poster: `poster-2.jpg`,
    cover: `cover-2.jpg`,
    videoSrc: `video-link-2`,
    previewVideoSrc: `preview-video-link-2`,
    description: `description2`,
    score: 9,
    count: 200,
    director: `director2`,
    actorList: [`Actor1`, `Actor2`, `Actor3`],
    runTime: 100,
  },
];

const promoFilm = {
  id: 99,
  title: `title`,
  genre: `genre`,
  year: 2014,
  img: `img.jpg`,
  poster: `poster.jpg`,
  cover: `cover.jpg`,
  videoSrc: `video-link`,
  previewVideoSrc: `preview-video-link`,
  description: `description`,
  score: 9,
  count: 200,
  director: `director`,
  actorList: [`Actor1`, `Actor2`, `Actor3`],
  runTime: 100,
};

const favoriteFilms = [
  {
    id: 1,
    title: `title1`,
    genre: `genre1`,
    year: 2020,
    img: `img-1.jpg`,
    poster: `poster-1.jpg`,
    cover: `cover-1.jpg`,
    videoSrc: `video-link-1`,
    previewVideoSrc: `preview-video-link-1`,
    description: `description1`,
    score: 9,
    count: 200,
    director: `director1`,
    actorList: [`Actor1`, `Actor2`, `Actor3`],
    runTime: 100,
  }, {
    id: 2,
    title: `title2`,
    genre: `genre2`,
    year: 2019,
    img: `img-2.jpg`,
    poster: `poster-2.jpg`,
    cover: `cover-2.jpg`,
    videoSrc: `video-link-2`,
    previewVideoSrc: `preview-video-link-2`,
    description: `description2`,
    score: 9,
    count: 200,
    director: `director2`,
    actorList: [`Actor1`, `Actor2`, `Actor3`],
    runTime: 100,
  },
];

it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    promoFilm: {},
    favoriteFilms: [],
  });
});

it(`Reducer should update films by load films`, () => {
  expect(reducer({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films,
  })).toEqual({
    films,
  });
});

it(`Reducer should update promoFilm by load promoFilm`, () => {
  expect(reducer({
    promoFilm: {},
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: promoFilm,
  })).toEqual({
    promoFilm,
  });
});

it(`Reducer should update favorite films by load favorite films`, () => {
  expect(reducer({
    favoriteFilms: [],
  }, {
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films,
  })).toEqual({
    favoriteFilms,
  });
});
