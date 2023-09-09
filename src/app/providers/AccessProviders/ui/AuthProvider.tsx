import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../lib/AuthContext';

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (cookies.token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      navigate('/login');
    }
  }, [cookies, navigate]);

  const value = useMemo(() => ({ isAuth }), [isAuth]);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
