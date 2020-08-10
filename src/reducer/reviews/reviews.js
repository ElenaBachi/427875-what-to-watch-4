import {extend} from "../../utils/utils.js";
import {adaptReview} from "../../adapters/reviews.js";

const PostStatus = {
  FAIL: false,
  SUCCESS: true,
};

const initialState = {
  reviews: [],
  postStatus: PostStatus.FAIL,
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
  changePostingStatus: (payload) => {
    return {
      type: ActionType.CHANGE_POSTING_STATUS,
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
      .then(() => {
        dispatch(ActionCreator.changePostingStatus(PostStatus.SUCCESS));
      })
      .catch(() => {
        dispatch(ActionCreator.changePostingStatus(PostStatus.FAIL));
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
