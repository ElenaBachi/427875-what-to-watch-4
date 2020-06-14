import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const filmTitleClickHandler = () => {};

const App = (props) => {
  const {filmTitle, filmGenre, filmReleaseDate, filmCardTitles} = props;

  return (
    <Main
      filmCardTitles={filmCardTitles}
      filmTitle={filmTitle}
      filmGenre={filmGenre}
      filmReleaseDate={filmReleaseDate}
      onFilmTitleClick={filmTitleClickHandler}
    />
  );
};

App.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmReleaseDate: PropTypes.number.isRequired,
  filmCardTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
