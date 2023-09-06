import { Layout } from 'antd';
import AdminMain from 'pages/admin/adminMain/AdminMain';
import Login from 'pages/login/Login';
import { RouteProps, Navigate, Route } from 'react-router-dom';
import { PrivatRoute } from '../../../lib/AccessHepers/PrivatRoute';
import { journalRoute } from './journalRoutes';
import { mainFilterPaths, mainFilterRoute } from './mainRoutes';
import { protocolRoute } from './protocolRoutes';
import { documentRoute } from './documentRoutes';

export enum BaseRoutesList {
  MAIN = 'main',
  ADMIN = 'admin',
  NOT_FOUND = 'notFound',
  LOGIN = 'login',
  DOCUMENTS = 'documents',
  JOURNAL = 'journal',
  PROTOCOL = 'protocol',
  NAVIGATE_EMPTY = 'navigateEmpty',
}

export const baseRoutePaths: Record<BaseRoutesList, string> = {
  [BaseRoutesList.MAIN]: '/main/',
  [BaseRoutesList.LOGIN]: '/login',
  [BaseRoutesList.ADMIN]: '/admin/panel',
  [BaseRoutesList.JOURNAL]: '/journal/',
  [BaseRoutesList.DOCUMENTS]: '/documents/',
  [BaseRoutesList.NOT_FOUND]: '/notFound',
  [BaseRoutesList.NAVIGATE_EMPTY]: '/',
  [BaseRoutesList.PROTOCOL]: '/protocol/',
};

export const baseRoute: Record<BaseRoutesList, RouteProps> = {
  [BaseRoutesList.NAVIGATE_EMPTY]: {
    path: baseRoutePaths.navigateEmpty,
    element: <Navigate to={`${baseRoutePaths.main}${mainFilterPaths.filterZero}`} replace />,
  },
  [BaseRoutesList.ADMIN]: {
    path: baseRoutePaths.admin,
    element: <AdminMain />,
  },
  [BaseRoutesList.MAIN]: {
    path: baseRoutePaths.main,
    children:
  <Route>
    {Object.values(mainFilterRoute).map(({ element, path }) => (
      <Route
        key={path}
        element={<PrivatRoute>{element}</PrivatRoute>}
        path={path}
      />
    ))}
  </Route>,
  },
  [BaseRoutesList.DOCUMENTS]: {
    path: baseRoutePaths.documents,
    element:
  <Route>
    {Object.values(documentRoute).map(({ element, path, index }) => (
      <Route
        key={path}
        element={<PrivatRoute>{element}</PrivatRoute>}
        path={path}
        index={index}
      />
    ))}
  </Route>,
  },
  [BaseRoutesList.JOURNAL]: {
    path: baseRoutePaths.journal,
    children:
  <Route>
    {Object.values(journalRoute).map(({ element, path, index }) => (
      <Route
        key={path}
        element={<PrivatRoute>{element}</PrivatRoute>}
        path={path}
        index={index}
      />
    ))}
  </Route>,
  },
  [BaseRoutesList.PROTOCOL]: {
    path: baseRoutePaths.protocol,
    children:
  <Route>
    {Object.values(protocolRoute).map(({ element, path, index }) => (
      <Route
        key={path}
        element={<PrivatRoute>{element}</PrivatRoute>}
        path={path}
        index={index}
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
