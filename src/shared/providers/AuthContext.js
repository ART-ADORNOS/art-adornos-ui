import React, {createContext, useEffect, useMemo, useState} from 'react';
import {BASE_URLS_USER} from '../../modules/auth/constants/urlsUser';
import accountsApi from '../../core/api/accountsApi';
import {getCurrentUser, loginRequest,} from '../../modules/auth/services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem('token') || null
  );

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }
    loadUser();
  }, [token]);

  const loadUser = async () => {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
    } catch (error) {
      if (error.response?.status === 401) {
        logout();
      }
    }
  };

  const login = async (username, password, typeUser) => {
    try {
      const access = await loginRequest(username, password);
      if (!access) return false;

      localStorage.setItem('token', access);
      setToken(access);

      const userData = await getCurrentUser();

      if (typeUser === 'seller' && !userData.is_seller) {
        throw new Error('NOT_SELLER');
      }

      setUser(userData);
      return true;
    } catch (error) {
      if (error.message === 'NOT_SELLER') throw error;
      return false;
    }
  };

  const logout = (redirectTo = '/login') => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    window.location.href = redirectTo;
  };

  const updateUser = async (userData) => {
    try {
      const payload = { ...userData };

      if (!payload.password) {
        delete payload.password;
        delete payload.confirm_password;
      }

      const { data } = await accountsApi.put(
        BASE_URLS_USER.UPDATE_USER,
        payload
      );

      setUser(data);
      return true;
    } catch {
      return false;
    }
  };

   const value = useMemo(
    () => ({ user, token, login, logout, updateUser }),
    [user, token, login, logout, updateUser]
  );

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
