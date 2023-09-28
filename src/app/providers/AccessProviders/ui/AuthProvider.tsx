import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { clearUserData } from 'entities/user';
import { AuthContext } from '../lib/AuthContext';

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cookies.token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      dispatch(clearUserData());
      navigate('/login');
    }
  }, [cookies, navigate, dispatch]);

  const value = useMemo(() => ({ isAuth }), [isAuth]);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
