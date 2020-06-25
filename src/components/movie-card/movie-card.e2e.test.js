import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

configure({adapter: new Adapter()});

const mock = {title: `Film 1`, img: `img/img-1.jpg`};

describe(`MovieCard E2E test`, () => {
  it(``, () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const onFilmImgClick = jest.fn();

    const movieCard = shallow(
        <MovieCard
          film={mock}
          onFilmImgClick={onFilmImgClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
    );

    const card = movieCard.find(`.small-movie-card`);

    card.simulate(`click`);
    expect(onFilmImgClick.mock.calls.length).toBe(1);

    card.simulate(`mouseenter`);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);

    card.simulate(`mouseleave`);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
