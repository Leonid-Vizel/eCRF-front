import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from '../lib/AuthContext';
import { useAppDispatch, useAppSelector } from 'store/redux-hook';
import { authSelector, setIsAuth } from 'entities/user';

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const isAuth = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    const cookieName = Cookies.get('token_name');
  const cookieId = Cookies.get('token_id');
  const cookieRole = Cookies.get('token_role');
    if (cookieId && cookieRole && cookieName) {
      dispatch(setIsAuth());
    }
  }, []);

  const value = useMemo(() => ({ isAuth }), [isAuth]);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
