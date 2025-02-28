import { API_URL } from "../constants/api/urls";

const useLogout = () => {
  const logout = async () => {
    await fetch(`${API_URL}/auth/logout`, {
      method: "POST",
    });
  };

  return { logout };
};

export { useLogout };
