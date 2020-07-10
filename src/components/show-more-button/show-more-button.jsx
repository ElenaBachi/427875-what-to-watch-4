import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onShowMoreBtnClick} = props;
  return (
    <button className="catalog__button" type="button"
      onClick={() => {
        onShowMoreBtnClick();
      }}
    >Show more</button>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreBtnClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
