import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.SCREENS;

export const getActiveScreen = (state) => {
  return state[NAME_SPACE].currentScreen;
};
