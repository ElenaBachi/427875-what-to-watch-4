import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import NameSpace from "../../reducer/name-space.js";

const AddReview = (props) => {
  const {activeFilm} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeFilm.cover} alt={activeFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href={`/`} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href={`/dev-film`} className="breadcrumbs__link">{activeFilm.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={activeFilm.poster} alt={activeFilm.title `poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action=""
          className="add-review__form"
          onSubmit={() => {}}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" checked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  activeFilm: PropTypes.shape({
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
  }).isRequired,
};

const mapStateToProps = (state) => ({
  activeFilm: state[NameSpace.DATA].activeFilm,
});

/* const mapDispatchToProps = (dispatch) => ({

});*/

export {AddReview};
export default connect(mapStateToProps)(AddReview);
