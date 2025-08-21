import { getMovies, getMoviesGenres } from "../api/movie";

export const getImageFromData = async () => {
  let result: { genre: string; imageUrl: string }[] = [];
  const moviesData = await getMovies();
  const genresData = await getMoviesGenres();

  genresData.forEach((genre) => {
    moviesData.forEach((movie) => {
      if (!movie.posterUrl || movie.posterUrl === null) {
        return;
      }

      movie.genres.forEach((movieGenre) => {
        if (genre === movieGenre) {
          result.push({ genre, imageUrl: movie.posterUrl! });
        }
      });
    });
  });

  const resultMap = [
    ...new Map(result.map((item) => [item.genre, item.imageUrl])),
  ].map((item) => {
    return { genre: item[0], posterUrl: item[1] };
  });

  return resultMap;
};
