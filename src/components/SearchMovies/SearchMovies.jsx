import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { Tittle, Container, Input, Form, Button } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit, loading }) => {
  const [movieRequest, setMovieRequest] = useState('');
  const handleAddQuery = ({ target: { value } }) => {
    setMovieRequest(value.toLowerCase());
  };

  const resetInput = () => {
    setMovieRequest('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (movieRequest.trim() === '') {
      return Notify.warning(`Please enter a search query`, {
        backOverlay: true,
        timeout: 1500,
        position: 'center-center',
        fontSize: '34px',
        width: '500px',
        clickToClose: true,
      });
    }
    onSubmit(movieRequest);
    resetInput();
  };

  return (
    <Container>
      <Tittle>Search Films</Tittle>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="">
          <Input
            type="text"
            placeholder="movie request"
            name="movieRequest"
            value={movieRequest}
            onChange={handleAddQuery}
          />
        </label>
        <Button type="submit" disabled={loading}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

SearchMovies.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
