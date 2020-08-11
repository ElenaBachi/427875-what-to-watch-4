export const Tab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const Filter = {
  ALL_GENRES: `All genres`,
};

export const ErrorMessage = {
  LOGIN: `Please enter a valid email address`,
  PASSWORD: `Please enter a validdata password`,
  UNRECOGNIZED_DATA: `We can’t recognize this email
   and password combination. Please try again.`,
  INCOMPLETE_DATA: `You have not complete all the fields. Please try again.`
};

export const Review = {
  length: {
    MIN: 5,
    MAX: 400,
  },
  rating: {
    MIN: 1,
    MAX: 5,
    DEFAULT: 3,
  },
};

export const MyListButtonOption = {
  FAVORITE: `1`,
  NOT_FAVORITE: `0`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FILM: `/films/:id`,
  PLAYER: `/films/:id/player`,
  REVIEW: `/films/:id/review`,
  MY_LIST: `/mylist`,
};
