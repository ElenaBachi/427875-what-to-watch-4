import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const title = `Some movie`;
const genre = `Family`;
const releaseDate = 2020;
const cardTitles = [`Movie 1`, `Movie 2`, `Movie 3`, `Movie 4`, `Movie 5`];
const films = [
  {
    title: `Pulp Fiction`,
    img: `img/pulp-fiction.jpg`,
  }, {
    title: `No Country for Old Men`,
    img: `img/no-country-for-old-men.jpg`,
  }, {
    title: `Snatch`,
    img: `img/snatch.jpg`,
  }, {
    title: `Moonrise Kingdom`,
    img: `img/moonrise-kingdom.jpg`,
  }, {
    title: `Seven Years in Tibet`,
    img: `img/seven-years-in-tibet.jpg`,
  }, {
    title: `Midnight Special`,
    img: `img/midnight-special.jpg`,
  }, {
    title: `War of the Worlds`,
    img: `img/war-of-the-worlds.jpg`,
  }, {
    title: `Dardjeeling Limited`,
    img: `img/dardjeeling-limited.jpg`,
  }
];

describe(`Render Main component`, () => {
  it(`Should render Main correctly`, () => {
    const onFilmImgClick = () => {};

    const tree = renderer
      .create(<Main
        filmCardTitles={cardTitles}
        filmTitle={title}
        filmGenre={genre}
        filmReleaseDate={releaseDate}
        films={films}
        onFilmImgClick={onFilmImgClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
