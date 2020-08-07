import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ReviewLength} from "../../consts/consts.js";

import NameSpace from "../../reducer/name-space.js";
import {Operation as ReviewOperation} from "../../reducer/reviews/reviews.js";
import {getActiveFilm} from "../../reducer/data/selectors.js";

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
    const {activeFilm, postReview, errorInPostingReview} = this.props;

    const form = evt.target;
    const formElements = form.elements;
    const reviewText = form.querySelector(`.add-review__textarea`).value;
    const formData = new FormData(form);

    const isValidText = reviewText.length >= ReviewLength.MIN && reviewText.length <= ReviewLength.MAX;

    const review = {
      rating: formData.get(`rating`),
      comment: formData.get(`review-text`),
    };

    if (!isValidText || errorInPostingReview) {
      this.disableElements(formElements);

      return false;
    }

    this.disableElements(formElements);
    postReview(activeFilm.id, review);
    form.querySelector(`.review__submit--success`).classList.remove(`visually-hidden`);
    form.reset();

    return true;
  }

  render() {
    const {activeFilm, errorInPostingReview} = this.props;
    const ratingStars = [1, 2, 3, 4, 5];

    const isError = errorInPostingReview === true;

    return (
      <section
        className="movie-card movie-card--full"
      >

        {isError &&
          <React.Fragment>
            <div style={{color: `red`, textAlign: `center`, backgroundColor: `grey`}}> An error occured. Please try again later.</div>
          </React.Fragment>
        }

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

            <React.Fragment>
              <div className="review__submit--success visually-hidden">
                <p>Thanks for your feedback!</p>
              </div>
            </React.Fragment>

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
  errorInPostingReview: PropTypes.bool.isRequired,
  postReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeFilm: getActiveFilm(state),
  errorInPostingReview: state[NameSpace.REVIEWS].errorInPostingReview,
});

const mapDispatchToProps = (dispatch) => ({
  postReview: (film, review) => {
    dispatch(ReviewOperation.postReview(film.id, review));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
