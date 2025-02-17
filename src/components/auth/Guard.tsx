import excludedRoutes from "../../constants/excluded-routes";
import { useGetCurrentUser } from "../../hooks/useGetStoredUser";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const isExcluded = excludedRoutes.includes(window.location.pathname);
  
  const { data: user } = useGetCurrentUser({ skip: isExcluded });
  return (
    <>
      {isExcluded
        ? children
        : user && children}
    </>
  );
};

export default Guard;
