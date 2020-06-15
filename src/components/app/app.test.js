import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const title = `Some movie`;
const genre = `Family`;
const releaseDate = 2020;
const cardTitles = [`Movie 1`, `Movie 2`, `Movie 3`, `Movie 4`, `Movie 5`];

describe(`Render App`, () => {
  it(`Should render App correctly`, () => {
    const tree = renderer
      .create(<App
        filmCardTitles={cardTitles}
        filmTitle={title}
        filmGenre={genre}
        filmReleaseDate={releaseDate}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
