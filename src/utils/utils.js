import moment from "moment";
import momentDurationFormat from "moment-duration-format";
momentDurationFormat(moment);

const filterFilmsByGenre = (movies) => {
  return movies.reduce((acc, it) => {
    if (!acc[it.genre]) {
      acc[it.genre] = [];
    }

    acc[it.genre].push(it);

    return acc;
  }, {});
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getFilmGenres = (films) => {
  const filmGenres = films.map((it) => it.genre);
  let set = new Set(filmGenres);

  return [`All genres`, ...set];
};

const getRatingLevel = (rating) => {
  if (rating <= 3) {
    return `Bad`;
  } else if (rating <= 5) {
    return `Normal`;
  } else if (rating <= 8) {
    return `Good`;
  } else if (rating <= 10) {
    return `Very good`;
  }

  return `Awesome`;
};

const getVideoTimeToLeft = (time) => {
  return moment.duration(time, `seconds`).format(`hh:mm:ss`);
};

export {filterFilmsByGenre, extend, getFilmGenres, getRatingLevel, getVideoTimeToLeft};

