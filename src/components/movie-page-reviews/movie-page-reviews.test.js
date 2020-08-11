import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MoviePageReviews from "./movie-page-reviews.jsx";

import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const mock = {
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

it(`MoviePageReviews should render correctly`, () => {
  const store = mockStore({
    [NameSpace.REVIEWS]: {
      reviews: mock.reviews
    }
  });
  const tree = renderer.create(
      <Provider store={store}>
        <MoviePageReviews />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
