import client from '../constants/api/apollo-client';
import router from '../routes/Routes';
import { commonFetch } from './commonFetch';
import { setAuthenticated } from './setAuthenticatedVar';
import { clearToken, getToken } from './token';

export const onLogout = async () => {
  try {
    const hasToken = !!getToken();
    if (hasToken) {
      await commonFetch(`/auth/logout`, {
        method: 'POST',
      });
    }
  } catch {
    throw new Error('Error logging out.');
  }

  clearToken();
  setAuthenticated(false);
  await client.clearStore();
  if (window.location.pathname !== '/login') {
    router.navigate('/login');
  }
};
