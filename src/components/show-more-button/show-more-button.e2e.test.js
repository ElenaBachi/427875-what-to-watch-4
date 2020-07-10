import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ShowMoreButton from "./show-more-button.jsx";

configure({adapter: new Adapter()});

it(`Testing onShowMoreBtnClick function`, () => {
  const onShowMoreBtnClick = jest.fn();

  const showMoreButton = shallow(
      <ShowMoreButton
        onShowMoreBtnClick={onShowMoreBtnClick}
      />
  );

  const button = showMoreButton.find(`button.catalog__button`);

  button.simulate(`click`);

  expect(onShowMoreBtnClick.mock.calls.length).toBe(1);
});
