import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from "./main.jsx";

const mockStore = configureStore([]);

const title = `Some movie`;
const genre = `Family`;
const releaseDate = 2020;
const films = [
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
];

describe(`Render Main component`, () => {
  it(`Should render Main correctly`, () => {
    const store = mockStore({
      currentGenre: `All genres`,
      filmList: films,
    });

    const onFilmImgClick = () => {};
    const onFilterCLick = () => {};

    const tree = renderer.create(
        <Provider store={store}>
          <Main
            filmTitle={title}
            filmGenre={genre}
            filmReleaseDate={releaseDate}
            onFilmImgClick={onFilmImgClick}
            onFilterCLick={onFilterCLick}
            filmList={films}
            currentGenre={`All genres`}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
