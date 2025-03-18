import { Navigate, Outlet } from 'react-router-dom';
import { useGetCurrentUser } from '../hooks/useGetCurrentUser';
import excludedRoutes from '../constants/excluded-routes';
import { snackVar } from '../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';

const PrivateRoute = () => {
  const isExcluded = excludedRoutes.includes(window.location.pathname);
  const {
    data: user,
    error,
    loading,
  } = useGetCurrentUser({ skip: isExcluded });

  if (loading) return <p>Loading...</p>;
  if (error?.networkError) {
    snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
