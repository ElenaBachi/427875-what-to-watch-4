import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute} from "../../consts.js";
import history from "../../history.js";

import {ActionCreator as LoadBtnActionCreator} from "../../reducer/films-load-btn/films-load-btn.js";
import {getPromoFilm, getFilmsByGenre} from "../../reducer/data/selectors.js";
import {getFilmCount} from "../../reducer/films-load-btn/selectors.js";

import UserLogo from "../user-logo/user-logo.jsx";
import MovieCardList from "../movie-card-list/movie-card-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

const Main = (props) => {
  const {
    promoFilm,
    films,
    onShowMoreBtnClick,
    filmCount,
  } = props;

  const {title, genre, year, poster, cover} = promoFilm;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={cover} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <UserLogo/>

        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    history.push(`/player/${promoFilm.id}`);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList/>

          <MovieCardList
            films={films}
          />

          <div className="catalog__more">
            {filmCount < films.length &&
              <ShowMoreButton
                onShowMoreBtnClick={onShowMoreBtnClick}
              />
            }
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
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
  onShowMoreBtnClick: PropTypes.func.isRequired,
  filmCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  promoFilm: getPromoFilm(state),
  filmCount: getFilmCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreBtnClick() {
    dispatch(LoadBtnActionCreator.downloadFilmCards());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
