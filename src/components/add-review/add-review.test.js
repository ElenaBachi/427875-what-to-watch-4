import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import AddReview from "./add-review.jsx";

import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const mock = {
  activeFilm: {
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
  }
};

it(`Should render Main correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      activeFilm: mock.activeFilm,
    },
    [NameSpace.REVIEWS]: {
      errorInPostingReview: false,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <AddReview />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
