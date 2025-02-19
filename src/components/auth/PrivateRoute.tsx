import { Navigate, Outlet } from "react-router-dom";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import excludedRoutes from "../../constants/excluded-routes";

const PrivateRoute = () => {
  const isExcluded = excludedRoutes.includes(window.location.pathname);
  const { data: user, loading } = useGetCurrentUser({ skip: isExcluded });

  if (loading) return <p>Loading...</p>; 

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;