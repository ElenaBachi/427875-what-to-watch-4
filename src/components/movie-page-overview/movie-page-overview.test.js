import React from "react";
import renderer from "react-test-renderer";
import MoviePageOverview from "./movie-page-overview.jsx";

const film = {
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Enim praesent elementum facilisis leo. In est ante in nibh mauris cursus mattis. Gravida arcu ac tortor dignissim convallis aenean et. Eleifend donec pretium vulputate sapien nec sagittis.`,
  rating: {
    score: `9,9`,
    level: `Awesome`,
    count: `999`,
  },
  director: `Wes Andreson`,
  actorList: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
};

it(`MoviePageOverview should render correctly`, () => {
  const tree = renderer.create(
      <MoviePageOverview
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
