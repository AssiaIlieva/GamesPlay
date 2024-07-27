import { useContext } from 'react';

import { login } from '../api/auth-api';
import { AuthContex } from '../contexts/AuthContext';

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContex);

  const loginHandler = async (email, password) => {
    const result = await login(email, password);
    changeAuthState(result);
  };

  return loginHandler;
};
