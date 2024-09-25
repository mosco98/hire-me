import Carousel from "./Carousel";

const MoviesPage = async () => {
  // const url = "https://api.themoviedb.org/3/authentication";
  const url = "https://api.themoviedb.org/3/movie/changes?page=1";
  // const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIES_DB_TOKEN}`
    }
  };

  const response = await fetch(url, options);
  const data: { results: { id: string; adult: boolean; data?: any }[] } =
    await response.json();

  const moviesWithDetailsPromise = data.results.map(async (movie) => {
    const url = `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`;

    const response = await fetch(url, options);

    movie.data = await response.json();

    return movie;
  });

  const movies = await Promise.all(moviesWithDetailsPromise);

  const moviesTransformed = movies.map(async (movie) => {
    const response = await fetch(IMAGE_URL + movie.data.poster_path);
    if (response.ok === false) return null;

    return movie;
  });

  const moviesFinal = await Promise.all(moviesTransformed);

  const filteredMovies = moviesFinal.filter((movie) => movie !== null);

  return <Carousel data={filteredMovies} />;
};

export default MoviesPage;
