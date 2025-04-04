import client from '../constants/api/apollo-client';
import router from '../routes/Routes';
import { setAuthenticated } from './setAuthenticatedVar';

export const onLogout = async () => {
  setAuthenticated(false);
  await client.clearStore();
  router.navigate('/login');
};
