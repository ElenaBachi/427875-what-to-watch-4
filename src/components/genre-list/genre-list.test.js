import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list.jsx";

const mock = {
  genres: [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`]
};

it(`GenreList should render correctly`, () => {
  const tree = renderer.create(
      <GenreList
        genres={mock.genres}
        onFilterCLick={() => {}}
        currentGenre={mock.genres[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
