import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {filmTitle, filmGenre, filmReleaseDate, films} = props;

  return (
    <Main
      filmTitle={filmTitle}
      filmGenre={filmGenre}
      filmReleaseDate={filmReleaseDate}
      films={films}
    />
  );
};

App.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmReleaseDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })).isRequired,
};

export default App;
