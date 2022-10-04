import { useState, useEffect } from 'react';
import Spiner from 'components/Spiner/Spiner';
import { getMoviesReview } from 'services/ApiRequests';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Container, Tittle, List, Item, CastInfo, Span } from './Review.styled';

const Reviews = () => {
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
    <Container>
      <Tittle>Reviews</Tittle>
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      {reviews?.length ? (
        <List>
          {reviews &&
            reviews?.map(rev => (
              <Item key={rev.id}>
                <CastInfo>Aurhor: {rev.author.toUpperCase()}</CastInfo>
                <CastInfo>
                  {' '}
                  <Span>Review:</Span>
                  {rev.content}
                </CastInfo>
                <CastInfo>
                  Date of raview:{' '}
                  {new Date(rev.created_at).toLocaleDateString()}
                </CastInfo>
              </Item>
            ))}
        </List>
      ) : (
        <p>We don't have any reviws for this movie</p>
      )}
    </Container>
  );
};

// Reviews.propTypes = {};

export default Reviews;
