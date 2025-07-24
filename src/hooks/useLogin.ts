import { useState } from 'react';
import client from '../constants/api/apollo-client';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { snackVar } from '../constants/snack';
import { setAuthenticated } from '../utils/setAuthenticatedVar';
import { setToken } from '../utils/token';
import { commonFetch } from '../utils/commonFetch';

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    try {
      const res = await commonFetch(`/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!res.ok) {
        setAuthenticated(false);
        if (res.status === 401) {
          setError('Credentials are not valid.');
        } else {
          snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
        }
        return;
      }

      const data = await res.json();
      console.log('Response data: ', data);
      if (!data.token) {
        setAuthenticated(false);
        setError('Token not found in response.');
        return;
      }

      setToken(data.token);
      setAuthenticated(true);
      setError('');
      await client.refetchQueries({ include: 'active' });
    } catch (error) {
      console.log('Login Error', error);
      setAuthenticated(false);
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
    }
  };

  return { login, error };
};

export { useLogin };
