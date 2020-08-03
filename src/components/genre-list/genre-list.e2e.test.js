import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import GenreList from "./genre-list.jsx";

import NameSpace from "../../reducer/name-space.js";

configure({adapter: new Adapter()});

const mockStore = configureStore([]);

const mockFilms = [
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
];
const genre = `genre1`;

describe(`GenreList E2E test`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
    },
    [NameSpace.FILTER]: {
      currentFilter: genre,
    },
  });
  const onFilterCLick = jest.fn();

  const genreList = mount(
      <Provider store={store}>
        <GenreList
          onFilterCLick={onFilterCLick}
        />
      </Provider>
  );

  it(`Click on filter item should call function`, () => {
    const filters = genreList.find(`li.catalog__genres-item`);

    filters.forEach((filter) => filter.simulate(`click`));

    expect(onFilterCLick.mock.calls.length).toBe(0);
  });
});
