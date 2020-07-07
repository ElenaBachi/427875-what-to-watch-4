import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onShowMoreBtnClick} = props;
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => {
          onShowMoreBtnClick();
        }}
      >Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreBtnClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
