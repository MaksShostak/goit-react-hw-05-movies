// import React from 'react'
import PropTypes from 'prop-types';
import { MovieItem, MovieLink, MoviesList } from './MovieList.styled';

const MovieList = ({ movies, path }) => {
  // console.log(path);

  return (
    <MoviesList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink
            to={`${path.pathname === '/home' || '/' ? '/movies/' : ''}${
              movie.id
            }`}
            state={{ from: path }}
          >
            {movie.title || movie.name}{' '}
          </MovieLink>
        </MovieItem>
      ))}
    </MoviesList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
