import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const film = {
  title: `Shutter Island`,
  img: `img/shutter-island.jpg`,
};
const onFilmImgClick = () => {};
const onMouseEnter = () => {};
const onMouseLeave = () => {};

it(`MovieCard should render correctly`, () => {
  const tree = renderer.create(
      <MovieCard
        film={film}
        onFilmImgClick={onFilmImgClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});