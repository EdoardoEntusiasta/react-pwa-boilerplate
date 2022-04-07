import { memo } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '@hooks';

const PrivateRoutes = () => {
  const user = useUser();
  const location = useLocation();
  console.log("PRIVATE", user);
  return user?.hasToken() ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default memo(PrivateRoutes);