import { API_URL } from '../constants/api/urls';
import { getToken } from './token';

export const commonFetch = async (
  input: RequestInfo,
  init: RequestInit = {},
) => {
  const url = `${API_URL}${input}`;
  const token = getToken();
  const isFormData = init.body instanceof FormData;

  const headers = {
    ...(init.headers || {}),
    ...(token ? { authorization: token } : {}),
    ...(!isFormData ? { 'Content-Type': 'application/json' } : {}),
  };
  return fetch(url, {
    ...init,
    headers,
  });
};
