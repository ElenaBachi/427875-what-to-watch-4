import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.VIDEO_PLAYER;

export const getActiveFullVideo = (state) => {
  return state[NAME_SPACE].activeFullVideo;
};
