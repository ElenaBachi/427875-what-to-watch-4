import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerMain from "../video-player-main/video-player-main.jsx";

import {PAGES} from "../../consts/consts.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilm: null,
      activePage: PAGES.MAIN,
    };

    this.handleFilmImgClick = this.handleFilmImgClick.bind(this);
    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
  }

  _renderApp() {
    switch (this.state.activePage) {
      case PAGES.MAIN:
        return this._renderMain();
      case PAGES.FILM_PAGE:
        return this._renderFilmPage();
      case PAGES.VIDEO_PLAYER:
        return <VideoPlayerMain/>;
      default:
        return this._renderMain();
    }
  }

  _renderMain() {
    return (
      <Main
        onFilmImgClick={this.handleFilmImgClick}
        onPlayButtonClick={this.handlePlayButtonClick}
      />
    );
  }

  _renderFilmPage() {
    return (
      <MoviePage
        onPlayButtonClick={this.handlePlayButtonClick}
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
          <Route exact path="/dev-player">
            <VideoPlayerMain
            />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  handleFilmImgClick(film) {
    this.setState({
      selectedFilm: film,
      activePage: PAGES.FILM_PAGE,
    });
  }

  handlePlayButtonClick() {
    this.setState({
      activePage: PAGES.VIDEO_PLAYER,
    });
  }
}

export default App;
