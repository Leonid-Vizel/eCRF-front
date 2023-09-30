import { Route, RouteProps } from 'react-router-dom';
import Login from 'pages/Login/Login';
import { outpatientCardsRoute } from '../outpatientCardsRoutes/outpatientCardsRoutesConfig';
import { stationaryCardsRoute } from '../stationaryCardsRoutes/stationaryCardsRoutesConfig';

export enum BaseRoutesList {
  NOT_FOUND = 'notFound',
  LOGIN = 'login',
  OUTPATIENT_CARDS = 'outpatientCards',
  STATIONARY_CARDS = 'stationaryCards',
}

export const baseRoutePaths: Record<BaseRoutesList, string> = {
  [BaseRoutesList.LOGIN]: '/login',
  [BaseRoutesList.OUTPATIENT_CARDS]: '/outpatientCards',
  [BaseRoutesList.STATIONARY_CARDS]: '/stationaryCards',
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
  [BaseRoutesList.STATIONARY_CARDS]: {
    path: baseRoutePaths.stationaryCards,
    children:
  <Route>
    {Object.values(stationaryCardsRoute).map(({ element, path }) => (
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
    element: <div />,
  },
};
