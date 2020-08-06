import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {TABS} from "../../consts/consts.js";

import MoviePageOverview from "../../components/movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../../components/movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../../components/movie-page-reviews/movie-page-reviews.jsx";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TABS.OVERVIEW,
      };

      this.handleTabChange = this.handleTabChange.bind(this);
      this.handleTabRender = this.handleTabRender.bind(this);
    }

    handleTabChange(tab) {
      this.setState({activeTab: tab});
    }

    handleTabRender() {
      const {activeFilm} = this.props;
      const {activeTab} = this.state;

      switch (activeTab) {
        case TABS.OVERVIEW:
          return (<MoviePageOverview
            activeFilm={activeFilm}
          />);
        case TABS.DETAILS:
          return <MoviePageDetails
            activeFilm={activeFilm}
          />;
        case TABS.REVIEWS:
          return <MoviePageReviews />;
        default:
          return (<MoviePageOverview
            activeFilm={activeFilm}
          />);
      }
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          onTabChange={this.handleTabChange}
          onTabClickRender={this.handleTabRender}
          activeTab={activeTab}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
    activeFilm: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    }).isRequired,
  };

  return WithActiveTab;
};

export default withActiveTab;
