import React from "react";
import renderer from "react-test-renderer";

import Tabs from "./tabs.jsx";

const mock = {
  tabList: {
    FIRST: `First Tab`,
    SECOND: `Second Tab`,
    THIRD: `Third Tab`,
  },
};

it(`Tabs should render correctly`, () => {
  const activeTab = Object.keys(mock.tabList)[0];

  const tree = renderer.create(
      <Tabs
        tabList={mock.tabList}
        onTabChange={() => {}}
        activeTab={activeTab}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
