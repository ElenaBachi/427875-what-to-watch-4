import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import VideoPlayerMain from "../video-player-main/video-player-main.jsx";
import SignInScreen from "../sign-in-screen/sign-in-screen.jsx";
import AddReview from "../add-review/add-review.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

import history from "../../history.js";

import {AppRoute} from "../../consts.js";

import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

class App extends PureComponent {
  render() {
    const {authorizationStatus} = this.props;
    const isAuth = authorizationStatus === AuthorizationStatus.NO_AUTH;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT} component={Main}/>

          <Route exact path={AppRoute.PLAYER}
            render={(componentProps) => {
              const filmId = componentProps.match.params.id;
              return <VideoPlayerMain filmId={filmId} />;
            }}
          />

          <Route exact path={AppRoute.FILM}
            render={(componentProps) => {
              const filmId = componentProps.match.params.id;
              return <MoviePage filmId={filmId} />;
            }}
          />

          <Route exact path={AppRoute.LOGIN} render={() => isAuth ? <SignInScreen /> : <Redirect to={AppRoute.ROOT} />}/>

          <PrivateRoute exact path={AppRoute.REVIEW}
            render={(componentProps) => {
              const filmId = componentProps.match.params.id;
              return <AddReview filmId={filmId} />;
            }}
          />

        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
