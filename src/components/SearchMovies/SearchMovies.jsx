// import { toast } from 'react-toastify';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import PropTypes from 'prop-types'

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
      //   return toast.info(`Please enter a search query`, {
      //     position: toast.POSITION.BOTTOM_CENTER,
      //   });
    }
    onSubmit(movieRequest.toLowerCase());
    resetInput();
  };

  return (
    <div>
      <h1>Search Films</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            placeholder="movie request"
            name="movieRequest"
            value={movieRequest}
            onChange={handleAddQuery}
          />
        </label>
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>
    </div>
  );
};

// SearchFilms.propTypes = {}

export default SearchMovies;
