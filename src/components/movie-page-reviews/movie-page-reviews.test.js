import React from "react";
import renderer from "react-test-renderer";
import MoviePageReviews from "./movie-page-reviews.jsx";

it(`MoviePageReviews should render correctly`, () => {
  const tree = renderer.create(
      <MoviePageReviews />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
