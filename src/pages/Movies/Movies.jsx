import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { Spiner } from 'components/Spiner/Spiner';
import { getSearchMovies } from 'services/ApiRequests';
import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types';

const Movies = props => {
  const [submitRequest, setSubmitRequest] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [notFaund, setNotFaund] = useState(false);

  useEffect(() => {
    if (submitRequest) {
      (async () => {
        try {
          setLoading(true);
          const result = await getSearchMovies(submitRequest);
          setSearchMovie(result);
        } catch (error) {
          setError(true);
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [submitRequest]);

  const handleSubmit = movieRequest => {
    if (submitRequest === movieRequest) {
      return;
    }
    setSubmitRequest(movieRequest.trim());
  };

  return (
    <div>
      <SearchMovies loading={loading} onSubmit={handleSubmit} />
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      {searchMovie.length > 0 ? (
        <ul>
          {searchMovie.map((movie, id) => (
            <li key={id}>
              <NavLink to="/movies">{movie.title || movie.name} </NavLink>
            </li>
          ))}
        </ul>
      ) : searchMovie.length === 0 ? (
        submitRequest && (
          <p
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: '30px',
            }}
          >
            Nothing was found for your query : "{submitRequest}", please try
            another search term
          </p>
        )
      ) : null}
    </div>
  );
};

// Movies.propTypes = {};

export default Movies;
