export const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const ALL_GENRES = `All genres`;

export const ErrorMessages = {
  LOGIN: `Please enter a valid email address`,
  PASSWORD: `Please enter a validdata password`,
  UNRECOGNIZED_DATA: `We can’t recognize this email
   and password combination. Please try again.`,
  INCOMPLETE_DATA: `You have not complete all the fields. Please try again.`
};

export const ReviewLength = {
  MIN: 5,
  MAX: 400,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FILM: `/films/:id`,
  PLAYER: `/player/:id`,
  REVIEW: `/films/:id/review`,
  MY_LIST: `my-list`,
};
