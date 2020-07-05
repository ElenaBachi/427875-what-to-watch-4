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

export {filterFilmsByGenre, extend, getFilmGenres};
