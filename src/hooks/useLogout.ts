import { UNKNOWN_ERROR_MESSAGE } from '../constants/errors';
import { commonFetch } from '../utils/commonFetch';

const useLogout = () => {
  const logout = async () => {
    try {
      const res = await commonFetch(`/auth/logout`, {
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
