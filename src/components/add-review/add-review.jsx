import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {ReviewLength, AppRoute} from "../../consts.js";

import history from "../../history.js";

import NameSpace from "../../reducer/name-space.js";
import {Operation as ReviewOperation} from "../../reducer/reviews/reviews.js";
import {getActiveFilmById} from "../../reducer/data/selectors.js";

import UserLogo from "../user-logo/user-logo.jsx";

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  disableElements(elements) {
    [...elements].forEach((elem) => {
      elem.setAttribute(`disabled`, `disabled`);
    });
  }

  handleFormSubmit(evt) {
    const {postReview, postStatus, filmId} = this.props;

    const form = evt.target;
    const formElements = form.elements;
    const reviewText = form.querySelector(`.add-review__textarea`).value;
    const formData = new FormData(form);

    const isValidText = reviewText.length >= ReviewLength.MIN && reviewText.length <= ReviewLength.MAX;

    const review = {
      rating: formData.get(`rating`),
      comment: formData.get(`review-text`),
    };

    if (!isValidText || postStatus) {
      this.disableElements(formElements);

      return false;
    }

    this.disableElements(formElements);
    postReview(filmId, review);
    form.querySelector(`.review__submit--success`).classList.remove(`visually-hidden`);
    form.reset();

    return true;
  }

  render() {
    const {getActiveFilm, postStatus, filmId} = this.props;

    const activeFilm = getActiveFilm(filmId);

    const ratingStars = [1, 2, 3, 4, 5];

    const isError = postStatus === false;

    return (
      <section className="movie-card movie-card--full">

        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={activeFilm.cover} alt={activeFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a
                    href="movie-page.html"
                    className="breadcrumbs__link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      history.goBack();
                    }}
                  >
                    {activeFilm.title}
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserLogo />
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={activeFilm.poster} alt={activeFilm.title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={(evt) => {
              evt.preventDefault();
              this.handleFormSubmit(evt);
            }}
          >
            <div className="rating">
              <div className="rating__stars">
                {ratingStars
                .map((it, i) => {
                  const num = i + 1;

                  return (
                    <React.Fragment key={`key${num}`}>
                      <input className="rating__input" id={`star-${num}`} type="radio" name="rating" value={num} />
                      <label className="rating__label" htmlFor={`star-${num}`}>Rating {num}</label>
                    </React.Fragment>
                  );
                })}

              </div>
            </div>

            {isError &&
              <React.Fragment>
                <div style={{color: `red`, textAlign: `center`, marginBottom: `10px`}}> An error occured. Please try again later.</div>
              </React.Fragment>
            }

            {!isError && <React.Fragment>
              <div className="review__submit--success visually-hidden">
                <p>Thanks for your feedback!</p>
              </div>
            </React.Fragment>}

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                minLength={ReviewLength.MIN}
                maxLength={ReviewLength.MAX}
                required
              />

              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReview.propTypes = {
  postStatus: PropTypes.bool.isRequired,
  postReview: PropTypes.func.isRequired,
  getActiveFilm: PropTypes.func.isRequired,
  filmId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getActiveFilm: (filmID) => getActiveFilmById(state, filmID),
  postStatus: state[NameSpace.REVIEWS].postStatus,
});

const mapDispatchToProps = (dispatch) => ({
  postReview: (filmID, review) => {
    dispatch(ReviewOperation.postReview(filmID, review));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
