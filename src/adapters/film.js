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
