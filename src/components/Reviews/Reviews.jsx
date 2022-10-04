import { useState, useEffect } from 'react';
import Spiner from 'components/Spiner/Spiner';
import { getMoviesReview } from 'services/ApiRequests';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Reviews = props => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await getMoviesReview(movieId);
        setReviews(result);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  return (
    <div>
      <h2>Reviews</h2>
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      {reviews?.length ? (
        <div>
          <ul>
            {reviews &&
              reviews?.map(rev => (
                <li key={rev.id}>
                  <p> Aurhor: {rev.author.toUpperCase()}</p>
                  <p>Review:</p>
                  <p> {rev.content}</p>
                  <p>
                    Date of raview:{' '}
                    {new Date(rev.created_at).toLocaleDateString()}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <p>We don't have any reviws for this movie</p>
      )}
    </div>
  );
};

// Reviews.propTypes = {};

export default Reviews;
