import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
};

ReactDOM.render(
    <App
      filmTitle={FilmData.TITLE}
      filmGenre={FilmData.GENRE}
      filmReleaseDate={FilmData.RELEASE_DATE}
    />,
    document.querySelector(`#root`)
);
