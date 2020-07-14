import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreList from "./genre-list.jsx";

configure({adapter: new Adapter()});

const mock = {
  genres: [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`],
};

describe(`GenreList E2E test`, () => {
  const onFilterCLick = jest.fn();

  const genreList = mount(
    <GenreList
    genres={mock.genres}
    onFilterCLick={onFilterCLick}
    currentGenre={mock.genres[0]}
    />
  );

  const filters = genreList.find(`li.catalog__genres-item`);

  it(`Click on filter item should call function`, () => {
    filters.forEach((filter) => filter.simulate(`click`));

    expect(onFilterCLick.mock.calls.length).toBe(mock.genres.length);
  });
});
