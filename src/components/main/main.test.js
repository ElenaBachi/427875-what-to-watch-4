import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from "./main.jsx";

const mockStore = configureStore([]);

const mock = {
  filmData: {
    title: `Some movie`,
    genre: `Family`,
    year: 2020,
  },
  films: [
    {
      genre: `Drama`,
      title: `Pulp Fiction`,
      img: `img/pulp-fiction.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Drama`,
      title: `No Country for Old Men`,
      img: `img/no-country-for-old-men.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Crime`,
      title: `Snatch`,
      img: `img/snatch.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Crime`,
      title: `Moonrise Kingdom`,
      img: `img/moonrise-kingdom.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Documentary`,
      title: `Seven Years in Tibet`,
      img: `img/seven-years-in-tibet.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Documentary`,
      title: `Midnight Special`,
      img: `img/midnight-special.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Comedie`,
      title: `War of the Worlds`,
      img: `img/war-of-the-worlds.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      genre: `Comedie`,
      title: `Dardjeeling Limited`,
      img: `img/dardjeeling-limited.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }
  ],
};

describe(`Render Main component`, () => {
  it(`Should render Main correctly`, () => {
    const store = mockStore({
      currentGenre: `All genres`,
      filmList: mock.films,
      filmCount: 8,
    });

    const onFilmImgClick = () => {};

    const tree = renderer.create(
        <Provider store={store}>
          <Main
            filmTitle={mock.filmData.title}
            filmGenre={mock.filmData.genre}
            filmReleaseDate={mock.filmData.year}
            films={mock.films}
            onFilmImgClick={onFilmImgClick}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
