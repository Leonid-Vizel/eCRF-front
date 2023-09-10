import { Layout } from 'antd';
import Login from 'pages/login/Login';
import { Route, RouteProps } from 'react-router-dom';
import { documentRoute } from '../documentRoutes/documentRoutesConfig';

export enum BaseRoutesList {
  NOT_FOUND = 'notFound',
  LOGIN = 'login',
  DOCUMENTS = 'documents',
}

export const baseRoutePaths: Record<BaseRoutesList, string> = {
  [BaseRoutesList.LOGIN]: '/login',
  [BaseRoutesList.DOCUMENTS]: '/document',
  [BaseRoutesList.NOT_FOUND]: '*',
};

export const baseRoute: Record<BaseRoutesList, RouteProps> = {
  [BaseRoutesList.DOCUMENTS]: {
    path: baseRoutePaths.documents,
    children:
  <Route>
    {Object.values(documentRoute).map(({ element, path }) => (
      <Route
        key={path}
        element={element}
        path={path}
      />
    ))}
  </Route>,
  },
  [BaseRoutesList.LOGIN]: {
    path: baseRoutePaths.login,
    element: <Login />,
  },
  [BaseRoutesList.NOT_FOUND]: {
    path: baseRoutePaths.notFound,
    element: <Layout />,
  },
};
