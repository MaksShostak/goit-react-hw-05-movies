import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from 'components/Spiner/Spiner';
const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
