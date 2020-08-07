import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import App from "./app.jsx";

import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

import {Screen} from "../../consts/consts.js";

const mockStore = configureStore([]);

const mock = {
  films: [
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
      isFavorite: false,
      bgColor: `fff`,
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
      isFavorite: false,
      bgColor: `fff`,
    }, {
      id: 3,
      title: `title3`,
      genre: `genre3`,
      year: 2018,
      img: `img-3.jpg`,
      poster: `poster-3.jpg`,
      cover: `cover-3.jpg`,
      videoSrc: `video-link-3`,
      previewVideoSrc: `preview-video-link-3`,
      description: `description3`,
      score: 9,
      count: 200,
      director: `director3`,
      actorList: [`Actor1`, `Actor2`, `Actor3`],
      runTime: 100,
      isFavorite: false,
      bgColor: `fff`,
    },
  ],
  promoFilm: {
    id: 99,
    title: `title`,
    genre: `genre`,
    year: 2020,
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
  },
  genre: `All genres`,
  reviews: [
    {
      reviewId: 1,
      userId: 10,
      userName: `Name1`,
      rating: 8.0,
      comment: `Comment 1`,
      date: `2019-05-08T14:13:56.569Z`,
    }, {
      reviewId: 2,
      userId: 20,
      userName: `Name2`,
      rating: 9.0,
      comment: `Comment 2`,
      date: `2019-05-08T14:13:56.569Z`,
    }, {
      reviewId: 3,
      userId: 30,
      userName: `Name3`,
      rating: 10.0,
      comment: `Comment 3`,
      date: `2019-05-08T14:13:56.569Z`,
    }
  ],
};

describe(`Render App`, () => {
  it(`Should render App correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films: mock.films,
        promoFilm: mock.promoFilm,
        activeFilm: mock.films[0],
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationErrorMessage: ``,
      },
      [NameSpace.FILTER]: {
        currentFilter: mock.genre,
      },
      [NameSpace.VIDEO_PLAYER]: {
        activeFullVideo: mock.films[1],
      },
      [NameSpace.FILMS_LOAD_BTN]: {
        filmCount: 10,
      },
      [NameSpace.SCREENS]: {
        currentScreen: Screen.MAIN,
      },
      [NameSpace.REVIEWS]: {
        reviews: mock.reviews,
        errorInPostingReview: false,
        errorStatus: ``,
      }
    });
    const tree = renderer.create(
        <Provider store={store}>
          <App
            login={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
