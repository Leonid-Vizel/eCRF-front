import { Layout } from 'antd';
import Login from 'pages/login/Login';
import { Route, RouteProps } from 'react-router-dom';
import { outpatientCardsRoute } from '../outpatientCardsRoutes/outpatientCardsRoutesConfig';

export enum BaseRoutesList {
  NOT_FOUND = 'notFound',
  LOGIN = 'login',
  OUTPATIENT_CARDS = 'outpatientCards',
}

export const baseRoutePaths: Record<BaseRoutesList, string> = {
  [BaseRoutesList.LOGIN]: '/login',
  [BaseRoutesList.OUTPATIENT_CARDS]: '/outpatientCards',
  [BaseRoutesList.NOT_FOUND]: '*',
};

export const baseRoute: Record<BaseRoutesList, RouteProps> = {
  [BaseRoutesList.OUTPATIENT_CARDS]: {
    path: baseRoutePaths.outpatientCards,
    children:
  <Route>
    {Object.values(outpatientCardsRoute).map(({ element, path }) => (
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
