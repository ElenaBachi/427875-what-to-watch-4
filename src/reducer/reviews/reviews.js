import {extend} from "../../utils/utils.js";
import {adaptReview} from "../../adapters/reviews.js";

export const PostStatus = {
  FAIL: `FAIL`,
  SUCCESS: `SUCCESS`,
};

const initialState = {
  reviews: [],
  postStatus: ``,
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CHANGE_POSTING_STATUS: `CHANGE_POSTING_STATUS`,
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  changePostingStatus: (status) => {
    return {
      type: ActionType.CHANGE_POSTING_STATUS,
      payload: status,
    };
  },
};

const Operation = {
  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        const reviews = response.data.map((it) => adaptReview(it));
        dispatch(ActionCreator.loadReviews(reviews));
      })
      .catch((err) => {
        throw err;
      });
  },

  postReview: (filmId, review) => (dispatch, getState, api) => {
    return api.post(`/comments/${filmId}`, {
      rating: review.rating,
      comment: review.comment
    })
      .then(() => {
        dispatch(Operation.loadReviews(filmId));
        dispatch(ActionCreator.changePostingStatus(PostStatus.SUCCESS));
      })
      .catch((err) => {
        dispatch(ActionCreator.changePostingStatus(PostStatus.FAIL));

        throw err.status;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.CHANGE_POSTING_STATUS:
      return extend(state, {
        postStatus: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
