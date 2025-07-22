import client from '../constants/api/apollo-client';
import router from '../routes/Routes';
import { setAuthenticated } from './setAuthenticatedVar';
import { clearToken } from './token';

export const onLogout = async () => {
  setAuthenticated(false);
  clearToken();
  await client.clearStore();
  router.navigate('/login');
};
