import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import withVideoPlayerMain from "./with-video-player-main.jsx";

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

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const MockComponentWrapped = withVideoPlayerMain(MockComponent);

it(`withVideoPlayerMain should render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      activeFullVideo={mock.film}
      handleExitButtonClick={() => {}}
      onScreenChange={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
