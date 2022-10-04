import { useState, useEffect, Suspense } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import Spiner from 'components/Spiner/Spiner';

// import PropTypes from 'prop-types';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getAllInfoMovies } from 'services/ApiRequests';

const MovieDetails = props => {
  const [selectMovie, setSelectMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (movieId) {
      (async () => {
        setLoading(true);
        try {
          const result = await getAllInfoMovies(movieId);
          setSelectMovie(result);
        } catch (error) {
          setError(true);
          console.error(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [movieId]);

  if (!selectMovie) {
    return null;
  }

  const {
    title,
    name,
    overview,
    vote_average,
    release_date,
    popularity,
    poster_path,
    first_air_date,
    genres,
  } = selectMovie;

  let imageUrl = 'https://image.tmdb.org/t/p/w200/' + poster_path;
  if (!poster_path) {
    imageUrl = 'https://www.drupal.org/files/project-images/broken-image.jpg';
  }

  return (
    <div>
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      <Link to={location.state?.from ?? `/movies`}>
        <button
          type="button"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            backgroundColor: 'rosybrown',
          }}
        >
          <IoArrowBackSharp /> Go back
        </button>
      </Link>
      {selectMovie && (
        <div>
          <h2>{title || name}</h2>
          <img src={imageUrl} alt={`${title || name} movie poster `} />
          <p>Overview : {overview} </p>
          <p>vote average {vote_average}</p>
          <p>{release_date || first_air_date}</p>
          <p>{Math.floor(popularity)}</p>
          <p>Genres : {genres.map(genre => genre.name).join(',')}</p>
          <p>User score:{Math.round((vote_average / 10) * 100)}&#37;</p>
        </div>
      )}
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: location.state?.from }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

// MovieDetails.propTypes = {};

export default MovieDetails;
