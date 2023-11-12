import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  const getMovieCast = async movId => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movId}/credits?api_key=8dcc6c3444f0b089c2f82be63d0dc0e1&language=en-US`,
      });
      setCast(response.data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(cast => (
          <li key={cast.id}>
            <img
              width="100"
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt=""
            />
            <p>{cast.name}</p>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
