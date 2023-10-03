import { StationaryCardPage } from 'pages/StationaryCardPage';
import { RouteProps } from 'react-router-dom';

export enum StationaryCardsRoutesList {
  CARD = 'card',
}

export const stationarysRoutePaths: Record<StationaryCardsRoutesList, string> = {
  [StationaryCardsRoutesList.CARD]: 'card/:id',
};

export const stationaryCardsRoute: Record<StationaryCardsRoutesList, RouteProps> = {
  [StationaryCardsRoutesList.CARD]: {
    path: stationarysRoutePaths.card,
    element: <StationaryCardPage />,
  },
};
