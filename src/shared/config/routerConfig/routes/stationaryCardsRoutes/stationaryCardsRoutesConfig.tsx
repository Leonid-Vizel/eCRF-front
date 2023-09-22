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
    element: <div>Стационарные карты</div>,
  },
  [StationaryCardsRoutesList.CARD]: {
    path: stationarysRoutePaths.card,
    element: <div>Стационарная карта</div>,
  },
};
