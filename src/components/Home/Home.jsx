import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Home.module.css';

const Home = () => {
  const [trending, setTrending] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/trending/movie/day?api_key=8dcc6c3444f0b089c2f82be63d0dc0e1&language=en-US&page=1',
      });
      setTrending(response.data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className={css.mainTitle}>Trending today</h1>
      {error !== null && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {trending !== null && !isLoading && (
        <ul className={css.moviesList}>
          {trending.map(movie => (
            <li key={movie.id} className={css.moviesListList}>
              <Link
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
    </div>
  );
};

export default Home;
