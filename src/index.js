import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";

import films from "./mocks/films.js";
import film from "./mocks/film.js";

import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const FilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014,
};

ReactDOM.render(
    <Provider store={store}>
      <App
        filmTitle={FilmData.TITLE}
        filmGenre={FilmData.GENRE}
        filmReleaseDate={FilmData.RELEASE_DATE}
        films={films}
        film={film}
      />
    </Provider>,
    document.querySelector(`#root`)
);
