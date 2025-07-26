const TOKEN_KEY = 'token';

export const setToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);

export const getToken = () => localStorage.getItem(TOKEN_KEY) ?? '';

export const clearToken = () => localStorage.clear();
