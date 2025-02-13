import excludedRoutes from "../../constants/excluded-routes";
import { useGetCurrentUser } from "../../hooks/useGetStoredUser";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetCurrentUser();
  return (
    <>
      {excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};

export default Guard;
