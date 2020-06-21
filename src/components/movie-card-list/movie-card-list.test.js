import React from "react";
import renderer from "react-test-renderer";
import MovieCardList from "./movie-card-list.jsx";

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

it(`MovieCardList should render correctly`, () => {
  const tree = renderer.create(
      <MovieCardList
        films={films}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
