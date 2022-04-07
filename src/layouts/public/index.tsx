import { memo } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '@hooks';

const PublicRoutes = () => {
  const user = useUser();
  const location = useLocation();

  return user?.hasToken() ?
    location.pathname === '/login' ? 
      process.env.REACT_APP_REDIRECT_ON_LOGIN_TO ? 
        <Navigate to={process.env.REACT_APP_REDIRECT_ON_LOGIN_TO} state={{ from: location }} replace />
        : <Outlet />
      : <Outlet />
    : <Outlet />;
};

export default memo(PublicRoutes);
