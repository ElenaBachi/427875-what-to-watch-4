import {extend} from "../../utils/utils.js";
import {adaptReview} from "../../adapters/reviews.js";

const initialState = {
  reviews: [],
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
