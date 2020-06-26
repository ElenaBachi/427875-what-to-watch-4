import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilm: null,
    };

    this.handleFilmImgClick = this.handleFilmImgClick.bind(this);
  }

  _renderApp() {
    if (this.state.selectedFilm === null) {
      return this._renderMain();
    }

    return this._renderFilmPage();
  }

  _renderMain() {
    const {filmTitle, filmGenre, filmReleaseDate, films} = this.props;
    const {film} = this.props;

    return (
      <Main
        filmTitle={filmTitle}
        filmGenre={filmGenre}
        filmReleaseDate={filmReleaseDate}
        films={films}
        onFilmImgClick={() => this.handleFilmImgClick(film)}
      />
    );
  }

  _renderFilmPage() {
    const {film} = this.props;

    return (
      <MoviePage
        film={film}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            {this._renderFilmPage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  handleFilmImgClick(film) {
    this.setState({selectedFilm: film});
  }
}

App.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmReleaseDate: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })).isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
    }).isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.string.isRequired,
  }).isRequired,

};

export default App;
