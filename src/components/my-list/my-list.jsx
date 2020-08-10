import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import UserLogo from "../user-logo/user-logo.js";
import MovieCardList from "../movie-card-list/movie-card-list.js";

import {getFavoriteFilms} from "../../reducer/data/selectors.js";

import {AppRoute} from "../../consts.js";

const MyList = (props) => {
  const {favoriteFilms} = props;
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <UserLogo />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MovieCardList films={favoriteFilms}/>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        videoSrc: PropTypes.string.isRequired,
        previewVideoSrc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        actorList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        runTime: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        bgColor: PropTypes.string.isRequired,
      })).isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

export {MyList};
export default connect(mapStateToProps)(MyList);
