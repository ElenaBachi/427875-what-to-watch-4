import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute, MyListBtn} from "../../consts.js";
import history from "../../history.js";

import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getFilms, getActiveFilmById} from "../../reducer/data/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";


import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab.jsx";

import Tabs from "../tabs/tabs.jsx";
import MovieCard from "../movie-card/movie-card.jsx";
import UserLogo from "../user-logo/user-logo.jsx";

const MovieCardWrapped = withVideoPlayer(MovieCard);
const TabsWrapped = withActiveTab(Tabs);

class MoviePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleAddBtnClick = this.handleAddBtnClick.bind(this);
  }

  getSimilarFilms(currentFilm, filmList) {
    const index = filmList.indexOf(currentFilm);

    filmList.splice(index, 1);

    return filmList
      .filter((film) => film.genre === currentFilm.genre)
      .slice(0, 4);
  }

  handleAddBtnClick(filmId, activeFilm) {
    const {setFavoriteFilm, authorizationStatus} = this.props;

    const isFavorite = activeFilm.isFavorite ? MyListBtn.NOT_FAVORITE : MyListBtn.FAVORITE;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }

    setFavoriteFilm(filmId, isFavorite);
  }

  render() {
    const {
      films,
      getActiveFilm,
      authorizationStatus,
      filmId,
    } = this.props;

    const activeFilm = getActiveFilm(filmId);

    const {title, genre, year, poster, cover} = activeFilm;

    const similarFilms = this.getSimilarFilms(activeFilm, films.slice());

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
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
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">

                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={(evt) => {
                      evt.preventDefault();
                      history.push(`/films/${filmId}/player`);
                    }}
                  >

                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>

                  <button
                    className="btn btn--list movie-card__button"
                    type="button"
                    onClick={() => this.handleAddBtnClick(filmId, activeFilm)}
                  >
                    {activeFilm.isFavorite ?
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use href="#in-list"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                    }
                    <span>My list</span>
                  </button>

                  {authorizationStatus === AuthorizationStatus.AUTH &&
                    <a
                      href="add-review.html"
                      className="btn movie-card__button"
                      onClick={(evt) => {
                        evt.preventDefault();
                        history.push(`/films/${filmId}/review`);
                      }}
                    >Add review
                    </a>
                  }

                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={poster} alt={title} width="218" height="327" />
              </div>

              <TabsWrapped
                activeFilm={activeFilm}
              />

            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            {similarFilms.length > 0 ?
              <React.Fragment>
                <h2 className="catalog__title">More like this</h2>

                <div className="catalog__movies-list">
                  {similarFilms.map((it, i) => {
                    return (
                      <MovieCardWrapped
                        key={it.title + i}
                        film={it}
                      />
                    );
                  })}
                </div>
              </React.Fragment> : ``
            }
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
  }
}

MoviePage.propTypes = {
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
  authorizationStatus: PropTypes.string.isRequired,
  setFavoriteFilm: PropTypes.func.isRequired,
  getActiveFilm: PropTypes.func.isRequired,
  filmId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),

  getActiveFilm: (filmID) => getActiveFilmById(state, filmID),

  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFavoriteFilm(filmId, isFavorite) {
    dispatch(DataOperation.addFilmToList(filmId, isFavorite));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
