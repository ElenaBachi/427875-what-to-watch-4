import {extend} from "../../utils/utils.js";
import {isValidEmail, isValidPassword} from "../../utils/validation.js";
import {ErrorMessage} from "../../consts.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationErrorMessage: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_ERROR_MESSAGE: `SET_AUTHORIZATION_ERROR_MESSAGE`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  setAuthorizationErrorMessage: (errorMessage) => {
    return {
      type: ActionType.SET_AUTHORIZATION_ERROR_MESSAGE,
      payload: errorMessage,
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    const validEmail = isValidEmail(authData.login);
    const validPassword = isValidPassword(authData.password);

    if (!validEmail) {
      dispatch(ActionCreator.setAuthorizationErrorMessage(ErrorMessage.LOGIN));
    } else if (!validPassword) {
      dispatch(ActionCreator.setAuthorizationErrorMessage(ErrorMessage.PASSWORD));
    }

    return api.post(`login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthorizationErrorMessage(``));
      })
      .catch((err) => {
        if (err.status === 401) {
          dispatch(ActionCreator.setAuthorizationErrorMessage(ErrorMessage.UNRECOGNIZED_DATA));
        } else if (err.status === 400) {
          dispatch(ActionCreator.setAuthorizationErrorMessage(ErrorMessage.INCOMPLETE_DATA));
        }

        dispatch(ActionCreator.setAuthorizationErrorMessage(err.data.error));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_AUTHORIZATION_ERROR_MESSAGE:
      return extend(state, {
        authorizationErrorMessage: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator, AuthorizationStatus};
