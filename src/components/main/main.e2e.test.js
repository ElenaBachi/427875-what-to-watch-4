import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../main/main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const title = `Some movie`;
const genre = `Family`;
const releaseDate = 2020;
const cardTitles = [`Movie 1`, `Movie 2`, `Movie 3`, `Movie 4`, `Movie 5`];

describe(`Main E2E test`, () => {
  it(`Should film card titles be clicked`, () => {
    const onFilmTitleClick = jest.fn();

    const main = shallow(
        <Main
          filmCardTitles={cardTitles}
          filmTitle={title}
          filmGenre={genre}
          filmReleaseDate={releaseDate}
          onFilmTitleClick={onFilmTitleClick}
        />
    );

    const movieCardTitles = main.find(`small-movie-card__title`);
    movieCardTitles.forEach((movieCardTitle) => {
      movieCardTitle.simulate(`click`);
      expect(onFilmTitleClick.mock.calls.length).toBe(1);
    });
  });
});
