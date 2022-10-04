import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { getTrendingMedia } from 'services/ApiRequests';
import { useLocation } from 'react-router-dom';
import Spiner from 'components/Spiner/Spiner';
import MovieList from 'components/MovieList/MovieList';

import {
  HomeContainer,
  Tittle,
  // MoviesList,
  // MovieItem,
  // MovieLink,
} from './HomePage.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  // console.log(location.pathname);

  useEffect(() => {
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
  }, []);

  return (
    <HomeContainer>
      <Tittle>Trending this week</Tittle>
      {loading && <Spiner />}
      {movies.length > 0 && (
        <MovieList movies={movies} path={location} />
        // <MoviesList>
        //   {movies.map(movie => (
        //     <MovieItem key={movie.id}>
        //       <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
        //         {movie.title || movie.name}{' '}
        //       </MovieLink>
        //     </MovieItem>
        //   ))}
        // </MoviesList>
      )}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
    </HomeContainer>
  );
};

// Home.propTypes = {};

export default Home;
