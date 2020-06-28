import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

configure({adapter: new Adapter()});

const mock = {
  filmData: {
    title: `Some movie`,
    genre: `Family`,
    year: 2020,
  },
  filmTitles: [`Movie 1`, `Movie 2`, `Movie 3`, `Movie 4`, `Movie 5`],
  films: [
    {
      title: `Film1`,
      img: `img/img-1.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      title: `Film2`,
      img: `img/img-2.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      title: `Film3`,
      img: `img/img-3.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      title: `Film4`,
      img: `img/img-4.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      title: `Film-5`,
      img: `img/img-5.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      title: `Film6`,
      img: `img/img-6.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      title: `Film7`,
      img: `img/img-7.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }, {
      title: `Film8`,
      img: `img/img-8.jpg`,
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    }
  ],
  selectedFilm: {
    title: `Film1`,
    img: `img/img-1.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
};

describe(`Main E2E test`, () => {
  it(`Click on film card image should open film page`, () => {
    const onFilmImgClick = jest.fn();

    const mainPage = mount(
        <Main
          filmCardTitles={mock.filmTitles}
          filmTitle={mock.filmData.title}
          filmGenre={mock.filmData.genre}
          filmReleaseDate={mock.filmData.year}
          films={mock.films}
          onFilmImgClick={onFilmImgClick}
        />
    );

    const filmImages = mainPage.find(`div.small-movie-card__image`);

    filmImages.forEach((img) => img.simulate(`click`));

    expect(onFilmImgClick.mock.calls.length).toBe(mock.films.length);
  });

  it(`Data of clicked film should match whith first film`, () => {
    const onFilmImgClick = jest.fn();

    const mainPage = mount(
        <Main
          filmCardTitles={mock.filmTitles}
          filmTitle={mock.filmData.title}
          filmGenre={mock.filmData.genre}
          filmReleaseDate={mock.filmData.year}
          films={mock.films}
          onFilmImgClick={onFilmImgClick}
        />
    );

    const firstFilmImg = mainPage.find(`div.small-movie-card__image`).at(0);
    firstFilmImg.simulate(`click`);

    expect(onFilmImgClick.mock.calls[0][0]).toMatchObject(mock.selectedFilm);
  });
});
