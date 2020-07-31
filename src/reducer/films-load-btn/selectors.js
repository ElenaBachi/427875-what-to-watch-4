import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FILMS_LOAD_BTN;

export const getFilmCount = (state) => {
  return state[NAME_SPACE].filmCount;
};
