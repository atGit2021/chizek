import { API_URL } from '../constants/api/urls';
import { getToken } from './token';

export const commonFetch = async (
  input: RequestInfo,
  init: RequestInit = {},
) => {
  const url = `${API_URL}${input}`;

  return fetch(url, {
    ...init,
    headers: {
      ...(init.headers || {}),
      authorization: getToken(),
      'Content-Type': 'application/json',
    },
  });
};
