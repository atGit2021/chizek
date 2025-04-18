import { useState } from 'react';
import client from '../constants/api/apollo-client';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { snackVar } from '../constants/snack';
import { setAuthenticated } from '../utils/setAuthenticatedVar';

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    try {
      const res = await fetch(`/auth/login`, {
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

      setError('');
      setAuthenticated(true);
      await client.refetchQueries({ include: 'active' });
    } catch {
      setAuthenticated(false);
      snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
    }
  };

  return { login, error };
};

export { useLogin };
