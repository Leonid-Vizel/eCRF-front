import { OutpatientCardPage } from 'pages/OutpatientCardPage/index';
import { OutpatientCardsPage } from 'pages/OutpatientCardsPage/index';
import { RouteProps } from 'react-router-dom';

export enum OutpatientCardsRoutesList {
  CARDS = 'cards',
  CARD = 'card',
}

export const outpatientsRoutePaths: Record<OutpatientCardsRoutesList, string> = {
  [OutpatientCardsRoutesList.CARDS]: ':id',
  [OutpatientCardsRoutesList.CARD]: 'card/:id',
};

export const outpatientCardsRoute: Record<OutpatientCardsRoutesList, RouteProps> = {
  [OutpatientCardsRoutesList.CARDS]: {
    path: outpatientsRoutePaths.cards,
    element: <OutpatientCardsPage />,
  },
  [OutpatientCardsRoutesList.CARD]: {
    path: outpatientsRoutePaths.card,
    element: <OutpatientCardPage />,
  },
};
