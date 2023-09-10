import { FC } from 'react';
import { Outlet, RouteProps } from 'react-router-dom';

// для ролевой модели
export const PrivateRoute:FC<RouteProps> = () => <Outlet />;
