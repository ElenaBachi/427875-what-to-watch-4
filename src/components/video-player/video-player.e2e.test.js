import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  img: `img/img-1.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`VideoPlayer E2E test`, () => {
  it(`Video player has play state`, () => {
    const isPlaying = false;

    const videoPlayer = mount(
        <VideoPlayer
          src={mock.src}
          poster={mock.img}
          isPlaying={isPlaying}
        />
    );

    expect(videoPlayer.props().isPlaying).toBe(isPlaying);
  });

  it(`Video player has pause state`, () => {
    const isPlaying = true;

    const videoPlayer = mount(
        <VideoPlayer
          src={mock.src}
          poster={mock.img}
          isPlaying={isPlaying}
        />
    );

    expect(videoPlayer.props().isPlaying).toBe(isPlaying);
  });
});