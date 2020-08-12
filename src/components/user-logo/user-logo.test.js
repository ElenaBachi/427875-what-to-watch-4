import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import configureStore from 'redux-mock-store';

import history from "../../history.js";

import UserLogo from "./user-logo.jsx";

import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const mockStore = configureStore([]);

it(`UserLogo should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <UserLogo />
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
