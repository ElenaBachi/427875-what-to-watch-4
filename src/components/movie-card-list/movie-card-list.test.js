import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MovieCardList from "./movie-card-list.jsx";

import NameSpace from "../../reducer/name-space.js";

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
  filmCount: 8,
};

it(`MovieCardList should render correctly`, () => {
  const store = mockStore({
    [NameSpace.FILMS_LOAD_BTN]: {
      filmCount: mock.filmCount,
    },
  });
  const onFilmImgClick = () => {};
  const onScreenChange = () => {};

  const tree = renderer.create(
      <Provider store={store}>
        <MovieCardList
          films={mock.films}
          onFilmImgClick={onFilmImgClick}
          onScreenChange={onScreenChange}
        />
      </Provider>, {
        createNodeMock: ()=>{
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
