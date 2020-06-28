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
  const handleMouseEnter = () => movieCard.setState({isPlaying: true});
  const handleMouseLeave = () => movieCard.setState({isPlaying: false});

  const movieCard = mount(
      <MovieCard
        film={mock}
        onFilmImgClick={onFilmImgClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isPlaying={false}
      />
  );

  const card = movieCard.find(`.small-movie-card`);

  it(`Testing on image click function`, () => {
    card.simulate(`click`);

    expect(onFilmImgClick.mock.calls.length).toBe(1);
  });

  it(`Mouse entering should change the state`, () => {
    card.simulate(`mouseenter`);

    expect(movieCard.state()).toStrictEqual({isPlaying: true});
  });

  it(`Mouse leaving should change the state`, () => {
    card.simulate(`mouseleave`);

    expect(movieCard.state()).toStrictEqual({isPlaying: false});
  });
});
