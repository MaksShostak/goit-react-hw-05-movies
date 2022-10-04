import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Spiner from 'components/Spiner/Spiner';

import { Header, Navigate, Navlink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Navigate>
          <Navlink to="/home">Home</Navlink>
          <Navlink to="/movies">Movies</Navlink>
        </Navigate>
      </Header>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
