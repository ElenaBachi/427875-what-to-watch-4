import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerMain from "../video-player-main/video-player-main.jsx";
import SignInScreen from "../sign-in-screen/sign-in-screen.jsx";

import {Screen} from "../../consts/consts.js";

import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus, Operation as UserOperation} from "../../reducer/user/user.js";
import {ActionCreator as ScreenActionCreator} from "../../reducer/screens/screens.js";
import {getActiveScreen} from "../../reducer/screens/selectors.js";

class App extends PureComponent {
  _renderApp() {
    const {login, authorizationStatus, currentScreen, onScreenChange} = this.props;

    if (currentScreen === Screen.MAIN) {
      return <Main onScreenChange={onScreenChange} />;
    } else if (currentScreen === Screen.FILM_PAGE) {
      return <MoviePage onScreenChange={onScreenChange} />;
    } else if (currentScreen === Screen.VIDEO_PLAYER) {
      return <VideoPlayerMain onScreenChange={onScreenChange} />;
    } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return <Redirect to={`/`} />;
      }

      return <SignInScreen onSubmit={login} />;
    }

    return <Main/>;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>

          <Route exact path="/dev-film">
            <MoviePage/>;
          </Route>

          <Route exact path="/dev-player">
            <VideoPlayerMain/>;
          </Route>

          <Route exact path="/dev-sign-in">
            <SignInScreen/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  currentScreen: PropTypes.string.isRequired,
  onScreenChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  currentScreen: getActiveScreen(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onScreenChange(screen) {
    dispatch(ScreenActionCreator.setActiveScreen(screen));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
