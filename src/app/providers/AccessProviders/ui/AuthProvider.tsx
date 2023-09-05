import {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from '../lib/AuthContext';

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [getInSystem, setInSystem] = useState(true);
  const cookieName = Cookies.get('token_name');
  const cookieId = Cookies.get('token_id');
  const cookieRole = Cookies.get('token_role');

  useEffect(() => {
    if (cookieId && cookieRole && cookieName) {
      setInSystem(true);
    } else {
      setInSystem(false);
    }
  }, [getInSystem, cookieRole]);

  const value = useMemo(() => ({ getInSystem, setInSystem }), [getInSystem]);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};
