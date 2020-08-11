import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

import {AppRoute} from "../../consts.js";

const UserLogo = (props) => {
  const {authorizationStatus} = props;
  return (

    <div className="user-block">

      {authorizationStatus === AuthorizationStatus.NO_AUTH ?
        <Link
          to={AppRoute.LOGIN}
          className="user-block__link">
              Sign in
        </Link> :
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      }

    </div>
  );
};

UserLogo.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {UserLogo};
export default connect(mapStateToProps)(UserLogo);
