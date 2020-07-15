import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs.jsx";

configure({adapter: new Adapter()});

const mock = {
  tabList: {
    FIRST: `First Tab`,
    SECOND: `Second Tab`,
    THIRD: `Third Tab`,
  },
};

describe(`Tabs E2E test`, () => {
  const onTabChange = jest.fn();
  const activeTab = Object.keys(mock.tabList)[0];

  const tabs = mount(
      <Tabs
        tabList={mock.tabList}
        onTabChange={onTabChange}
        activeTab={activeTab}
      />
  );

  const tabList = tabs.find(`li.movie-nav__item`);

  it(`Should tab be clicked`, () => {
    tabList.forEach((tab) => tab.simulate(`click`));

    const tabListLength = Object.keys(mock.tabList).length;

    expect(onTabChange.mock.calls.length).toBe(tabListLength);
  });
});
