import React from "react";
import PropTypes from "prop-types";

import {Tab} from "../../consts.js";

const Tabs = (props) => {
  const {onTabChange, activeTab, onTabClickRender} = props;
  const tabs = Object.values(Tab);

  return (
    <div className="movie-card__desc">
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

      {onTabClickRender()}

    </div>
  );
};

Tabs.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClickRender: PropTypes.func.isRequired,
};

export default Tabs;
