import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer.js";

import MovieCardList from "../movie-card-list/movie-card-list.jsx";
import GenreList from "../genre-list/genre-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

import {getFilmGenres} from "../../utils/utils.js";

const Main = (props) => {
  const {
    promoFilm,
    films,
    onFilmImgClick,
    onFilterCLick,
    currentGenre,
    onShowMoreBtnClick,
    filmCount,
    onPlayButtonClick,
    handleButtonClick,
  } = props;

  const genres = getFilmGenres(films);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onPlayButtonClick();
                    handleButtonClick(promoFilm);
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

          <GenreList
            onFilterCLick={onFilterCLick}
            currentGenre={currentGenre}
            genres={genres}
          />

          <MovieCardList
            films={films}
            currentGenre={currentGenre}
            onFilmImgClick={onFilmImgClick}
            filmCount={filmCount}
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
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })).isRequired,
  onFilmImgClick: PropTypes.func.isRequired,
  onFilterCLick: PropTypes.func.isRequired,
  onShowMoreBtnClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  filmCount: PropTypes.number.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  filmCount: state.filmCount
});

const mapDispatchToProps = (dispatch) => ({
  onFilterCLick(genre) {
    dispatch(ActionCreator.getFilmsByGenre(genre));
    dispatch(ActionCreator.setCurrentGenre(genre));
  },

  onShowMoreBtnClick() {
    dispatch(ActionCreator.downloadFilmCard());
  },

  handleButtonClick(film) {
    dispatch(ActionCreator.setFilmToPlay(film));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
