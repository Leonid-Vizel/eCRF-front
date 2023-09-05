import { createContext, useContext } from 'react';

interface AuthContextTypes {
  getInSystem: boolean;
  setInSystem(param: boolean): void;
}
export const AuthContext = createContext<AuthContextTypes>({
  getInSystem: false,
  setInSystem: () => null,
});

export const useAuth = () => useContext(AuthContext);
