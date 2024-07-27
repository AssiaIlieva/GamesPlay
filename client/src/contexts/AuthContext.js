import { createContext } from 'react';

export const AuthContex = createContext({
  userId: '',
  email: '',
  accessToken: '',
  isAuthenticated: false,
  changeAuthState: (authState = {}) => null,
});
