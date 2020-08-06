import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import moment from "moment";

import {getReviews} from "../../reducer/reviews/selectors.js";

const createColumn = (reviews) => {
  return (
    <div className="movie-card__reviews-col">
      {reviews.map((review, i) => {
        const reviewDate = new Date(review.date);

        return (
          <div className="review" key={i}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.userName}</cite>
                <time
                  className="review__date"
                  dateTime={reviewDate}>
                  {moment(reviewDate).format(`MMMM DD YYYY`)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        );
      })}
    </div>
  );
};

const MoviePageReviews = (props) => {
  const {reviews} = props;

  const halfOfReviews = Math.ceil(reviews.length / 2);
  const firstQuantityOfReviews = reviews.slice(0, halfOfReviews);
  const secondQuantityOfReviews = reviews.slice(halfOfReviews);
  const firstColumn = createColumn(firstQuantityOfReviews);
  const secondColumn = createColumn(secondQuantityOfReviews);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {firstColumn}
        {secondColumn}
      </div>
    </React.Fragment>
  );
};

MoviePageReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

export {MoviePageReviews};
export default connect(mapStateToProps)(MoviePageReviews);
