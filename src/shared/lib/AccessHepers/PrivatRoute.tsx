import { useAuth } from 'app/providers/AccessProviders/lib/AuthContext';
import { FC, ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

interface PrivatRouteProps {
  children: ReactNode
}

export const PrivatRoute:FC<PrivatRouteProps> = ({ children }) => {
  const location = useLocation();
  const { getInSystem } = useAuth();

  if (!getInSystem) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
