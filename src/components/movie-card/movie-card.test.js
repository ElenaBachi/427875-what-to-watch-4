import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCard from "./movie-card.jsx";

const mock = {
  film: {
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
  },
};

const mockStore = configureStore([]);

const onFilmImgClick = () => {};
const handleMouseEnter = () => {};
const handleMouseLeave = () => {};
const handleCardClick = () => {};
const renderPlayer = () => {};
const loadReviews = () => {};
const onScreenChange = () => {};

it(`MovieCard should render correctly`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store}>
        <MovieCard
          film={mock.film}
          onFilmImgClick={onFilmImgClick}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleCardClick={handleCardClick}
          renderPlayer={renderPlayer}
          loadReviews={loadReviews}
          onScreenChange={onScreenChange}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
