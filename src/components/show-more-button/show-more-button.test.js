import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";

it(`ShowMoreButton should render correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onShowMoreBtnClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
