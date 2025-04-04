import { Navigate, Outlet } from 'react-router-dom';
import { useGetCurrentUser } from '../hooks/useGetCurrentUser';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { useEffect } from 'react';
import { setAuthenticated } from '../utils/setAuthenticatedVar';

const PrivateRoute = () => {
  const { data: user, error, loading } = useGetCurrentUser();

  useEffect(() => {
    if (error?.networkError) {
      setAuthenticated(false);
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
    }
  }, [error]);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    setAuthenticated(false);
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
