import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import VideoPlayerMain from "./video-player-main.jsx";

import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const mock = {
  activeFilm: {
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
};

it(`videoPlayerMain should render correctly`, () => {
  const store = mockStore({
    [NameSpace.VIDEO_PLAYER]: {
      activeFullVideo: mock.activeFilm,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <VideoPlayerMain
          onScreenChange={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
