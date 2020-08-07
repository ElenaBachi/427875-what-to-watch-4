import {extend} from "../../utils/utils.js";
import {adaptReview} from "../../adapters/reviews.js";

const initialState = {
  reviews: [],
  errorInPostingReview: false,
  errorStatus: ``,
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  POST_REVIEW: `POST_REVIEW`,
  CHANGE_POSTING_ERROR_FLAG: `CHANGE_POSTING_ERROR_FLAG`,
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  postReview: (errorStatus) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: errorStatus,
    };
  },
  changeErrorFlag: (payload) => {
    return {
      type: ActionType.CHANGE_POSTING_ERROR_FLAG,
      payload,
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
      .then((response) => {
        dispatch(ActionCreator.changeErrorFlag(false));
        dispatch(ActionCreator.postReview(response.status));
      })
      .catch((err) => {
        dispatch(ActionCreator.changeErrorFlag(true));
        dispatch(ActionCreator.postReview(err));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.POST_REVIEW:
      return extend(state, {
        errorStatus: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
