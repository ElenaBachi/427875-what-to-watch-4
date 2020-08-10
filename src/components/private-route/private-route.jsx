import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../consts.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(componentProps) => {
        if (authorizationStatus === AuthorizationStatus.AUTH) {
          return render(componentProps);
        }

        return <Redirect to={AppRoute.LOGIN} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  componentProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);

