import { authenticatedVar } from '../constants/authenticated';

export const setAuthenticated = (isAuthenticated: boolean) => {
  authenticatedVar(isAuthenticated);
  if (isAuthenticated) {
    sessionStorage.setItem('authenticated', 'true');
  } else {
    sessionStorage.removeItem('authenticated');
  }
};
