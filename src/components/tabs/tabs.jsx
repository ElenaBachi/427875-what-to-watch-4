import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const {tabList, onTabChange, activeTab} = props;
  const tabs = Object.values(tabList);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, i) => {
          return (
            <li key={tab + i}
              className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}
              onClick={(evt) => {
                evt.preventDefault();
                onTabChange(tab);
              }}>
              <a href="#" className="movie-nav__link">{tab}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Tabs.propTypes = {
  tabList: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tabs;
