export const adaptFilm = (data) => {
  return {
    id: data.id,
    title: data.name,
    genre: data.genre,
    year: data.released,
    img: data.preview_image,
    poster: data.poster_image,
    cover: data.background_image,
    videoSrc: data.video_link,
    previewVideoSrc: data.preview_video_link,
    description: data.description,
    score: data.rating,
    count: data.scores_count,
    director: data.director,
    actorList: data.starring,
    runTime: data.run_time,
    isFavorite: data.is_favorite,
    bgColor: data.background_color,
  };
};

/*
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
*/
