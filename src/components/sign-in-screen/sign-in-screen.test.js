import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

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
      <Provider store={store}>
        <SignInScreen
          onSubmit={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
