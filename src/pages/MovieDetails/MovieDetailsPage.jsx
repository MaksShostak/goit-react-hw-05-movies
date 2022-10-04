import { useState, useEffect, Suspense } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import Spiner from 'components/Spiner/Spiner';

// import PropTypes from 'prop-types';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getAllInfoMovies } from 'services/ApiRequests';

import {
  Container,
  Button,
  ButtonLink,
  Tittle,
  ContainerMovie,
  MovieItem,
  MovieInfo,
  Link,
} from './MovieDetailsPage.styled';

const MovieDetails = () => {
  const [selectMovie, setSelectMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      (async () => {
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
    poster_path,
    first_air_date,
    genres,
  } = selectMovie;

  let imageUrl = 'https://image.tmdb.org/t/p/w300/' + poster_path;
  if (!poster_path) {
    imageUrl = 'https://www.drupal.org/files/project-images/broken-image.jpg';
  }

  return (
    <Container>
      {loading && <Spiner />}
      {error && (
        <p>Something went wrong, please reload the page and try again</p>
      )}
      <ButtonLink to={location.state?.from ?? `/movies`}>
        <Button type="button">
          <IoArrowBackSharp /> Go back
        </Button>
      </ButtonLink>
      {selectMovie && (
        <ContainerMovie>
          <img src={imageUrl} alt={`${title || name} movie poster `} />
          <ul>
            <Tittle>{title || name}</Tittle>
            <MovieItem>
              User score:
              <MovieInfo>
                {Math.round((vote_average / 10) * 100)}&#37;
              </MovieInfo>
            </MovieItem>
            <MovieItem>
              Overview :<MovieInfo> {overview} </MovieInfo>
            </MovieItem>

            <MovieItem>
              Relize date:
              <MovieInfo> {release_date || first_air_date}</MovieInfo>
            </MovieItem>

            <MovieItem>
              Genres :
              <MovieInfo>
                {' '}
                {genres.map(genre => genre.name).join(',')}
              </MovieInfo>
            </MovieItem>
          </ul>
        </ContainerMovie>
      )}
      <Container>
        <Tittle>Additional Information</Tittle>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </Container>
    </Container>
  );
};

// MovieDetails.propTypes = {};

export default MovieDetails;
