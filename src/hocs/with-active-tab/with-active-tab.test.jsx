import React from "react";
import renderer from "react-test-renderer";

import withActiveTab from "./with-active-tab.jsx";

const MockComponent = () => <div />;

const MockComponentWrapped = withActiveTab(MockComponent);

const mock = {
  film: {
    id: 99,
    title: `title`,
    genre: `genre`,
    year: 2020,
    img: `img.jpg`,
    poster: `poster.jpg`,
    cover: `cover.jpg`,
    videoSrc: `video-link`,
    previewVideoSrc: `preview-video-link`,
    description: `description`,
    score: 9,
    count: 200,
    director: `director`,
    actorList: [`Actor1`, `Actor2`, `Actor3`],
    runTime: 100,
  },
};

it(`withActiveTab should render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      activeFilm={mock.film}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
