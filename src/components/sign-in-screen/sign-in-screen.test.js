import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import configureStore from 'redux-mock-store';
import history from "../../history.js";

import SignInScreen from "./sign-in-screen.jsx";

import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

it(`SignInScreen should render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationErrorMessage: ``,
    },
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <SignInScreen
            login={() => {}}
          />
        </Provider>
      </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
