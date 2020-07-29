import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Main from "./main.jsx";

configure({adapter: new Adapter()});

const mockStore = configureStore([]);

const mock = {
  promoFilm: {
    promo: true,
    title: `Some movie`,
    genre: `Family`,
    year: 2020,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  films: [
    {
      genre: `Genre`,
      title: `Film1`,
      img: `img/img-1.jpg`,
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
  selectedFilm: {
    genre: `Genre`,
    title: `Film1`,
    img: `img/img-1.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
};

describe(`Main E2E test`, () => {
  const store = mockStore({
    currentGenre: `All genres`,
    filmList: mock.films,
    filmCount: 8,
  });

  const onFilmImgClick = jest.fn();
  const onFilterCLick = jest.fn();
  const onPlayButtonClick = jest.fn();

  const mainPage = mount(
      <Provider store={store}>
        <Main
          promoFilm={mock.promoFilm}
          onFilmImgClick={onFilmImgClick}
          onFilterCLick={onFilterCLick}
          onPlayButtonClick={onPlayButtonClick}
          films={mock.films}
          filmList={mock.films}
          currentGenre={`All genres`}
          filmCount={8}
        />
      </Provider>
  );

  it(`Click on film card image should open film page`, () => {
    const filmImages = mainPage.find(`div.small-movie-card__image`);

    filmImages.forEach((img) => img.simulate(`click`));

    expect(onFilmImgClick.mock.calls.length).toBe(mock.films.length);
  });

  it(`Data of clicked film should match whith first film`, () => {
    const firstFilmImg = mainPage.find(`div.small-movie-card__image`).at(0);
    firstFilmImg.simulate(`click`);

    expect(onFilmImgClick.mock.calls[0][0]).toMatchObject(mock.selectedFilm);
  });

  it(`Click on play button should open video player`, () => {
    const playBtn = mainPage.find(`button.btn--play`);

    playBtn.simulate(`click`);

    expect(onPlayButtonClick.mock.calls.length).toBe(1);
  });
});
