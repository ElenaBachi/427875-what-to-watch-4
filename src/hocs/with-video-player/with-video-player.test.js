import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";

import withVideoPlayer from "./with-video-player.jsx";

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

const MockComponentWrapped = withVideoPlayer(MockComponent);

it(`withVideoPlayer should render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <video />
    </MockComponentWrapped>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
