import {reducer, ActionType, ActionCreator, AuthorizationStatus} from "./user.js";
import {ErrorMessage} from "../../consts.js";

it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authorizationErrorMessage: ``,
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should set error message`, () => {
  expect(reducer({
    authorizationErrorMessage: ErrorMessage.INCOMPLETE_DATA,
  }, {
    type: ActionType.SET_AUTHORIZATION_ERROR_MESSAGE,
    payload: ErrorMessage.LOGIN,
  })).toEqual({
    authorizationErrorMessage: ErrorMessage.LOGIN,
  });

  expect(reducer({
    authorizationErrorMessage: ErrorMessage.LOGIN,
  }, {
    type: ActionType.SET_AUTHORIZATION_ERROR_MESSAGE,
    payload: ErrorMessage.PASSWORD,
  })).toEqual({
    authorizationErrorMessage: ErrorMessage.PASSWORD,
  });
});

describe(`Action Creator work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
    .toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    .toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for setAuthorizationErrorMessage returns correct action`, () => {
    expect(ActionCreator.setAuthorizationErrorMessage(ErrorMessage.UNRECOGNIZED_DATA))
    .toEqual({
      type: ActionType.SET_AUTHORIZATION_ERROR_MESSAGE,
      payload: ErrorMessage.UNRECOGNIZED_DATA,
    });

    expect(ActionCreator.setAuthorizationErrorMessage(ErrorMessage.INCOMPLETE_DATA))
    .toEqual({
      type: ActionType.SET_AUTHORIZATION_ERROR_MESSAGE,
      payload: ErrorMessage.INCOMPLETE_DATA,
    });
  });
});
