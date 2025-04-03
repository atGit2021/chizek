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

  useEffect(() => {
    if (!user && !loading) {
      sessionStorage.removeItem('authenticated');
      authenticatedVar(false);
    }
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
