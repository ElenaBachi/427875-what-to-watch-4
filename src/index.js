import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FILM_TITLES = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

const FilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
};

ReactDOM.render(
    <App
      filmCardTitles={FILM_TITLES}
      filmTitle={FilmData.TITLE}
      filmGenre={FilmData.GENRE}
      filmReleaseDate={FilmData.RELEASE_DATE}
    />,
    document.querySelector(`#root`)
);
