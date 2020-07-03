const filterFilmsByGenre = (movies) => {
  return movies.reduce((acc, it) => {
    if (!acc[it.genre]) {
      acc[it.genre] = [];
    }

    acc[it.genre].push(it);

    return acc;
  }, {});
};

export {filterFilmsByGenre};
