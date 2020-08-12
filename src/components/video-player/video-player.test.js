import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const mock = {
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

it(`VideoPlayer should render correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        src={mock.previewVideoSrc}
        img={mock.img}
        isPlaying={false}
      >
        <video/>
      </VideoPlayer>, {
        createNodeMock: (element) => {
          if (element.type === `video`) {
            return {
              load: () => {
                return true;
              }
            };
          }

          return null;
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
