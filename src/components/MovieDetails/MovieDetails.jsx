import axios from 'axios';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';

import css from './MovieDetails.module.css';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [genres, setGenres] = useState('');

  useEffect(() => {
    getMovieDetails(movieId);
  }, [movieId]);

  const getMovieDetails = async movId => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movId}?api_key=8dcc6c3444f0b089c2f82be63d0dc0e1&language=en-US`,
      });
      setMovie(response.data);
      setUserScore(Math.round(response.data.vote_average * 10));
      setGenres(response.data.genres.map(genre => genre.name).join(', '));
    } catch (error) {
      setError(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.movieDetails}>
      <Link to={backLinkRef.current}>
        <button>Go back</button>
      </Link>
      {error !== null && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {movie !== null && !isLoading && (
        <>
          <div className={css.movieMainDetails}>
            <img
              className={css.movieImg}
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt=""
            />
            <div>
              <h1>{movie.title}</h1>
              <p>User Score: {userScore}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{genres}</p>
            </div>
          </div>
          <div>
            <h3>Additional Information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
