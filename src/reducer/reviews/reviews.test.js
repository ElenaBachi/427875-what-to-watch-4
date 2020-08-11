import {reducer, ActionType, ActionCreator} from "./reviews.js";

const reviews = [
  {
    reviewId: 1,
    userId: 10,
    userName: `Name1`,
    rating: 8.0,
    comment: `Comment 1`,
    date: `2019-05-08T14:13:56.569Z`,
  }, {
    reviewId: 2,
    userId: 20,
    userName: `Name2`,
    rating: 9.0,
    comment: `Comment 2`,
    date: `2019-05-08T14:13:56.569Z`,
  }, {
    reviewId: 3,
    userId: 30,
    userName: `Name3`,
    rating: 10.0,
    comment: `Comment 3`,
    date: `2019-05-08T14:13:56.569Z`,
  }
];

const PostStatus = {
  SUCCESS: `SUCCESS`,
};

it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    reviews: [],
    postStatus: ``,
  });
});

it(`Reducer should update reviews by load reviews`, () => {
  expect(reducer({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  })).toEqual({
    reviews,
  });
});


it(`ActionCreator change posting status`, () => {
  expect(
      ActionCreator.changePostingStatus(PostStatus.SUCCESS))
        .toEqual({
          type: ActionType.CHANGE_POSTING_STATUS,
          payload: PostStatus.SUCCESS,
        });
});
