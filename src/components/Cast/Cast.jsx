import { useState, useEffect } from 'react';
import Spiner from 'components/Spiner/Spiner';
import { getMoviesActorsCast } from 'services/ApiRequests';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Cast = props => {
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
    <div>
      <h2>Cast</h2>
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      {cast?.length ? (
        <div>
          <ul>
            {cast.length &&
              cast?.map(el => (
                <li key={el.id}>
                  <p> Aurhor: {el.character.toUpperCase()}</p>
                  <p> {el.name}</p>
                  <p>
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
                  </p>
                </li>
              ))}
          </ul>
          <div></div>
        </div>
      ) : (
        <p>We don't have any cast information for this movie</p>
      )}
    </div>
  );
};

// Cast.propTypes = {};

export default Cast;
