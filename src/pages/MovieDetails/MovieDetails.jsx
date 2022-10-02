import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = props => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <h1>MovieDetails</h1>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

// MovieDetails.propTypes = {};

export default MovieDetails;
