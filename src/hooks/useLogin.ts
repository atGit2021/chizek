import { useState } from 'react';
import client from '../constants/api/apollo-client';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../constants/errors';
import { snackVar } from '../constants/snack';

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    const res = await fetch(`/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      if (res.status === 401) {
        setError('Credentials are not valid.');
      } else {
        snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
      }
      return;
    }
    setError('');
    await client.refetchQueries({ include: 'active' });
  };

  return { login, error };
};

export { useLogin };
