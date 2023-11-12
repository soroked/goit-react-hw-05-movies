import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      // delete movies array by clicking on movies button
      setMovies(null);
      return;
    }
    getMovies(query);
  }, [query]);

  const handleFormSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query });

    getMovies(query);
    e.currentTarget.elements.searchKey.value = '';
  };

  const getMovies = async query => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie?api_key=8dcc6c3444f0b089c2f82be63d0dc0e1&query=${query}&language=en-US`,
      });
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.movieSearch}>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <input type="text" name="searchKey" placeholder="Search" required />
        <button type="submit">Search</button>
      </form>
      {error !== null && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {movies !== null && !isLoading && (
        <ul className={css.moviesList}>
          {movies.map(movie => (
            <li key={movie.id} className={css.moviesListList}>
              <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}
                className={css.moviesListItemLink}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className={css.moviesListItemImage}
                />
                <p className={css.moviesListItemTitle}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {movies?.length === 0 && !isLoading && <p>No movies found for {query}</p>}
    </div>
  );
};

export default Movies;
