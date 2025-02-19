import { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";

const LogoutListener = () => {
  const { logout } = useAuth();

  useEffect(() => {
    const handleLogout = () => {
      logout();
    };

    window.addEventListener("logout", handleLogout);
    return () => {
      window.removeEventListener("logout", handleLogout);
    };
  }, [logout]);

  return null;
};

export default LogoutListener;
