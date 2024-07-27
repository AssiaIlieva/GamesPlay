import { useContext } from 'react';

import { login, register } from '../api/auth-api';
import { AuthContex } from '../contexts/AuthContext';

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContex);

  const loginHandler = async (email, password) => {
    const result = await login(email, password);
    changeAuthState(result);
    return result;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContex);

  const registerHandler = async (email, password) => {
    const result = await register(email, password);
    changeAuthState(result);
    return result;
  };

  return registerHandler;
};
