import { UNKNOWN_ERROR_MESSAGE } from '../constants/errors';

const useLogout = () => {
  const logout = async () => {
    try {
      const res = await fetch(`/auth/logout`, {
        method: 'POST',
      });
      if (!res.ok) {
        throw new Error('Error logging out.');
      }
    } catch {
      throw new Error(UNKNOWN_ERROR_MESSAGE);
    }
  };

  return { logout };
};

export { useLogout };
