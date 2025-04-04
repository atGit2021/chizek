import { Navigate, Outlet } from 'react-router-dom';
import { useGetCurrentUser } from '../hooks/useGetCurrentUser';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { useEffect } from 'react';
import { authenticatedVar } from '../constants/authenticated';

const PrivateRoute = () => {
  const { data: user, error, loading } = useGetCurrentUser();

  useEffect(() => {
    if (error?.networkError) {
      sessionStorage.removeItem('authenticated');
      authenticatedVar(false);
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
    }
  }, [error]);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    sessionStorage.removeItem('authenticated');
    authenticatedVar(false);
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
