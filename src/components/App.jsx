import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
