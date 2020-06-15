import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const title = `Some movie`;
const genre = `Family`;
const releaseDate = 2020;
const cardTitles = [`Movie 1`, `Movie 2`, `Movie 3`, `Movie 4`, `Movie 5`];

describe(`Render Main component`, () => {
  it(`Should render Main correctly`, () => {
    const tree = renderer
      .create(<Main
        filmCardTitles={cardTitles}
        filmTitle={title}
        filmGenre={genre}
        filmReleaseDate={releaseDate}
        onFilmTitleClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
