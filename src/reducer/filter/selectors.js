import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FILTER;

export const getActiveFilter = (state) => {
  return state[NAME_SPACE].currentFilter;
};
