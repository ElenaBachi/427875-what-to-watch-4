import {reducer, ActionType} from "./video-player.js";

const filmToPlay = {
  id: 1,
  title: `title1`,
  genre: `genre1`,
  year: 2020,
  img: `img-1.jpg`,
  poster: `poster-1.jpg`,
  cover: `cover-1.jpg`,
  videoSrc: `video-link-1`,
  previewVideoSrc: `preview-video-link-1`,
  description: `description1`,
  score: 9,
  count: 200,
  director: `director1`,
  actorList: [`Actor1`, `Actor2`, `Actor3`],
  runTime: 100,
};

it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeFullVideo: null,
  });
});

it(`Reducer should set film to play`, () => {
  expect(reducer({
    activeFullVideo: null,
  }, {
    type: ActionType.OPEN_FULL_VIDEO,
    payload: filmToPlay,
  })).toEqual({
    activeFullVideo: filmToPlay,
  });
});
