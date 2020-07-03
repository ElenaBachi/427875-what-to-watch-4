import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details.jsx";

const film = {
  genre: `Comedy`,
  year: 2020,
  director: `Wes Andreson`,
  fullActorList: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
  runTime: `2h 20m`,
};

it(`MoviePageDetails should render correctly`, () => {
  const tree = renderer.create(
      <MoviePageDetails
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
