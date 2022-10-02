import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { getTrendingMedia } from 'services/ApiRequests';
import { NavLink } from 'react-router-dom';
import { Spiner } from 'components/Spiner/Spiner';

const Home = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movies.length < 0) {
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const result = await getTrendingMedia();
        setMovies(result);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [movies.length]);

  return (
    <div>
      <h1>Trending this week</h1>
      {loading && <Spiner />}
      {movies.length > 0 && (
        <ul>
          {movies.map((movie, id) => (
            <li key={id}>
              <NavLink to="/movies">{movie.title || movie.name} </NavLink>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
    </div>
  );
};

// Home.propTypes = {};

export default Home;
