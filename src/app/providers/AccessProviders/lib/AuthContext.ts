import { createContext, useContext } from 'react';

interface AuthContextTypes {
  isAuth: boolean;
}
export const AuthContext = createContext<AuthContextTypes>({
  isAuth: false,
});

export const useAuth = () => useContext(AuthContext);
