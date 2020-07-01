import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

configure({adapter: new Adapter()});

const mock = {
  title: `Film 1`,
  img: `img/img-1.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`MovieCard E2E test`, () => {
  const onFilmImgClick = jest.fn();
  const handleMouseEnter = jest.fn(() => true);
  const handleMouseLeave = jest.fn(() => false);
  const renderPlayer = jest.fn();

  const movieCard = mount(
      <MovieCard
        film={mock}
        onFilmImgClick={onFilmImgClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isPlaying={false}
        renderPlayer={renderPlayer}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  it(`Testing on image click function`, () => {
    card.simulate(`click`);

    expect(onFilmImgClick.mock.calls.length).toBe(1);
  });

  it(`Mouse entering should call function`, () => {
    card.simulate(`mouseenter`);

    expect(handleMouseEnter.mock.calls.length).toBe(1);
  });

  it(`Mouse leaving should call function`, () => {
    card.simulate(`mouseleave`);

    expect(handleMouseLeave.mock.calls.length).toBe(1);
  });
});
