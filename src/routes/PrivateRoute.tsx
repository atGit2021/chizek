import { Navigate, Outlet } from 'react-router-dom';
import { useGetCurrentUser } from '../hooks/useGetCurrentUser';
import excludedRoutes from '../constants/excluded-routes';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { useEffect } from 'react';

const PrivateRoute = () => {
  const isExcluded = excludedRoutes.includes(window.location.pathname);
  const {
    data: user,
    error,
    loading,
  } = useGetCurrentUser({ skip: isExcluded });

  useEffect(() => {
    if (error?.networkError) {
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
    }
  }, [error]);

  if (loading) return <p>Loading...</p>;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
