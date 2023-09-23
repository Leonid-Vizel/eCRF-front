import { StationaryCardPage } from 'pages/StationaryCardPage';
import { StationaryCardsPage } from 'pages/StationaryCardsPage';
import { RouteProps } from 'react-router-dom';

export enum StationaryCardsRoutesList {
  CARDS = 'cards',
  CARD = 'card',
}

export const stationarysRoutePaths: Record<StationaryCardsRoutesList, string> = {
  [StationaryCardsRoutesList.CARDS]: ':id',
  [StationaryCardsRoutesList.CARD]: 'card/:id',
};

export const stationaryCardsRoute: Record<StationaryCardsRoutesList, RouteProps> = {
  [StationaryCardsRoutesList.CARDS]: {
    path: stationarysRoutePaths.cards,
    element: <StationaryCardsPage />,
  },
  [StationaryCardsRoutesList.CARD]: {
    path: stationarysRoutePaths.card,
    element: <StationaryCardPage />,
  },
};
