import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCard from "./movie-card.jsx";

configure({adapter: new Adapter()});

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

describe(`MovieCard E2E test`, () => {
  const handleMouseEnter = jest.fn(() => true);
  const handleMouseLeave = jest.fn(() => false);
  const renderPlayer = jest.fn();
  const loadReviews = jest.fn();
  const onScreenChange = jest.fn();

  const store = mockStore({});

  const movieCard = mount(
      <Provider store={store}>
        <MovieCard
          film={mock.film}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          renderPlayer={renderPlayer}
          loadReviews={loadReviews}
          onScreenChange={onScreenChange}
        />
      </Provider>
  );

  const card = movieCard.find(`.small-movie-card`);
  it(`Mouse entering should call function`, () => {
    card.simulate(`mouseenter`);

    expect(handleMouseEnter.mock.calls.length).toBe(1);
  });

  it(`Mouse leaving should call function`, () => {
    card.simulate(`mouseleave`);

    expect(handleMouseLeave.mock.calls.length).toBe(1);
  });
});
