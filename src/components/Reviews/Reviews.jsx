import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId);
  }, [movieId]);

  const getMovieReviews = async movId => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movId}/reviews?api_key=8dcc6c3444f0b089c2f82be63d0dc0e1&language=en-US`,
      });
      setReviews(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
