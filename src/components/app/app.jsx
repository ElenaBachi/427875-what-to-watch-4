import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerMain from "../video-player-main/video-player-main.jsx";
import SignInScreen from "../sign-in-screen/sign-in-screen.jsx";

import {PAGES} from "../../consts/consts.js";

import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus, Operation as UserOperation} from "../../reducer/user/user.js";

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
    const {authorizationStatus, login} = this.props;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignInScreen
          onSubmit={login}
        />
      );
    } else if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <Main
          onFilmImgClick={this.handleFilmImgClick}
          onPlayButtonClick={this.handlePlayButtonClick}
        />
      );
    }

    return null;
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
          <Route exact path="dev-sign-in">
            <SignInScreen
              onSubmit={() => {}}
            />
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

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
