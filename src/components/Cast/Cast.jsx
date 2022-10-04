import { useState, useEffect } from 'react';
import Spiner from 'components/Spiner/Spiner';
import { getMoviesActorsCast } from 'services/ApiRequests';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Container, Tittle, List, Item, ActorInfo, Span } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await getMoviesActorsCast(movieId);
        setCast(result);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <Container>
      <Tittle>Cast</Tittle>
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      {cast?.length ? (
        <List>
          {cast.length &&
            cast?.map(el => (
              <Item key={el.id}>
                <ActorInfo>
                  {' '}
                  <Span> Author:</Span> {el.character.toUpperCase()}
                </ActorInfo>
                <ActorInfo>
                  {' '}
                  <Span>Actor name:</Span> {el.name}
                </ActorInfo>
                <ActorInfo>
                  {el.profile_path ? (
                    <img
                      src={`http://image.tmdb.org/t/p/w185${el.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img
                      src="https://www.drupal.org/files/project-images/broken-image.jpg"
                      alt=""
                      width={185}
                    />
                  )}
                </ActorInfo>
              </Item>
            ))}
        </List>
      ) : (
        <p>We don't have any cast information for this movie</p>
      )}
    </Container>
  );
};

// Cast.propTypes = {};

export default Cast;
