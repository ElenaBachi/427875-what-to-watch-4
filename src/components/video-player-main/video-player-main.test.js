import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import VideoPlayerMain from "./video-player-main.jsx";

const mockStore = configureStore([]);

const mock = {
  promoFilm: {
    promo: true,
    title: `Some movie`,
    genre: `Family`,
    year: 2020,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
};

it(`videoPlayerMain should render correctly`, () => {
  const store = mockStore({
    activeFullVideo: mock.promoFilm,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <VideoPlayerMain
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
