import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {Review, AppRoute} from "../../consts.js";

import history from "../../history.js";

import {Operation as ReviewOperation, PostStatus} from "../../reducer/reviews/reviews.js";
import {getPostStatus} from "../../reducer/reviews/selectors.js";
import {getActiveFilmById} from "../../reducer/data/selectors.js";

import UserLogo from "../user-logo/user-logo.jsx";

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: Review.rating.DEFAULT,
      review: ``,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
  }

  handleRatingChange(evt) {
    this.setState({
      rating: evt.target.value,
    });
  }

  handleReviewChange(evt) {
    this.setState({
      review: evt.target.value,
    });
  }

  handleFormSubmit(evt) {
    const {postReview, filmId} = this.props;

    const form = evt.target;

    const review = {
      rating: this.state.rating,
      comment: this.state.review,
    };

    evt.preventDefault();
    postReview(filmId, review);
    form.reset();
  }

  checkValidity() {
    const isValid = (this.state.review.length >= Review.length.MIN && this.state.review.length <= Review.length.MAX &&
    this.state.rating >= Review.rating.MIN && this.state.rating <= Review.rating.MAX);

    return isValid;
  }

  render() {
    const {getActiveFilm, postStatus, filmId} = this.props;

    const activeFilm = getActiveFilm(filmId);

    const ratingStars = new Array(5).fill(``);

    const isDisabled = this.checkValidity();

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
            onSubmit={this.handleFormSubmit}
          >
            <div className="rating">
              <div className="rating__stars">
                {ratingStars
                .map((it, i) => {
                  const num = i + 1;

                  return (
                    <React.Fragment key={`key${num}`}>
                      <input
                        className="rating__input"
                        id={`star-${num}`}
                        type="radio"
                        name="rating"
                        value={num}
                        onChange={this.handleRatingChange}
                      />
                      <label className="rating__label" htmlFor={`star-${num}`}>Rating {num}</label>
                    </React.Fragment>
                  );
                })}

              </div>
            </div>

            {postStatus === PostStatus.FAIL &&
              <React.Fragment>
                <div style={{color: `red`, textAlign: `center`, marginBottom: `10px`}}> An error occured. Please try again later.</div>
              </React.Fragment>
            }

            {postStatus === PostStatus.SUCCESS &&
            <React.Fragment>
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
                minLength={Review.length.MIN}
                maxLength={Review.length.MAX}
                onChange={this.handleReviewChange}
                required
              />

              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={!isDisabled}
                >Post</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReview.propTypes = {
  postStatus: PropTypes.string.isRequired,
  postReview: PropTypes.func.isRequired,
  getActiveFilm: PropTypes.func.isRequired,
  filmId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getActiveFilm: (filmID) => getActiveFilmById(state, filmID),
  postStatus: getPostStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  postReview: (filmID, review) => {
    dispatch(ReviewOperation.postReview(filmID, review));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
