import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import withVideoPlayerMain from "./with-video-player-main.jsx";

const mock = {
  promoFilm: {
    promo: true,
    title: `Some movie`,
    genre: `Family`,
    year: 2020,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
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
      activeFullVideo={mock.promoFilm}
      handleExitButtonClick={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
