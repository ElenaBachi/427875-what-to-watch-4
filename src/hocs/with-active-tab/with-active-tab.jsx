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
      const {film} = this.props;
      const {activeTab} = this.state;

      switch (activeTab) {
        case TABS.OVERVIEW:
          return (<MoviePageOverview
            film={film}
          />);
        case TABS.DETAILS:
          return <MoviePageDetails
            film={film}
          />;
        case TABS.REVIEWS:
          return <MoviePageReviews/>;
        default:
          return (<MoviePageOverview
            film={film}
          />);
      }
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          tabList={TABS}
          onTabChange={this.handleTabChange}
          onTabClickRender={this.handleTabRender}
          activeTab={activeTab}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
    film: PropTypes.shape({
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
