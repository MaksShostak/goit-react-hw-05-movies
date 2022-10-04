import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import Spiner from 'components/Spiner/Spiner';
import { getSearchMovies } from 'services/ApiRequests';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

// import PropTypes from 'prop-types';

const Movies = props => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFaund, setNotFaund] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (query) {
      (async () => {
        try {
          setLoading(true);
          const result = await getSearchMovies(query);
          if (!result.length) {
            setSearchMovie([]);
            setNotFaund(true);
          } else {
            setSearchMovie(result);
          }
        } catch (error) {
          setError(true);
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [query]);

  const handleSubmit = movieRequest => {
    if (query === movieRequest) {
      return;
    }
    setSearchParams(movieRequest !== '' ? { query: movieRequest.trim() } : {});
    setNotFaund(false);
  };

  if (!searchMovie) {
    return;
  }

  return (
    <div>
      <SearchMovies loading={loading} onSubmit={handleSubmit} />
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      {searchMovie?.length ? (
        <ul>
          {searchMovie?.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : notFaund ? (
        <p
          style={{
            textAlign: 'center',
            color: 'red',
            fontSize: '30px',
          }}
        >
          Nothing was found for your query : "{searchParams}", please try
          another search term
        </p>
      ) : null}
    </div>
  );
};

// Movies.propTypes = {};

export default Movies;
