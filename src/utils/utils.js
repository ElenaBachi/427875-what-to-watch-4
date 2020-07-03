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

export {filterFilmsByGenre, extend};
