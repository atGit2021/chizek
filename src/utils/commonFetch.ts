import { getToken } from './token';

export const commonFetch = async (
  input: RequestInfo,
  init: RequestInit = {},
) => {
  return fetch(input, {
    ...init,
    headers: {
      ...(init.headers || {}),
      authorization: getToken(),
      'Content-Type': 'application/json',
    },
  });
};
