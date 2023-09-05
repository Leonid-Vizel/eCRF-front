import Main from 'pages/main/Main';
import { RouteProps } from 'react-router-dom';

export enum MainFilterRoutesList {
  FILETER_ZERO = 'filterZero',
  FILETER_FIRST = 'filterFirst',
  FILETER_SECOND = 'filterSecond',
  FILETER_THIRD = 'filterThird',
}

export const mainFilterPaths: Record<MainFilterRoutesList, string> = {
  [MainFilterRoutesList.FILETER_ZERO]: 'filter=0',
  [MainFilterRoutesList.FILETER_FIRST]: 'filter=1',
  [MainFilterRoutesList.FILETER_SECOND]: 'filter=2',
  [MainFilterRoutesList.FILETER_THIRD]: 'filter=3',
};

export const mainFilterRoute: Record<MainFilterRoutesList, RouteProps> = {
  [MainFilterRoutesList.FILETER_ZERO]: {
    path: mainFilterPaths.filterZero,
    element: <Main />,
  },
  [MainFilterRoutesList.FILETER_FIRST]: {
    path: mainFilterPaths.filterFirst,
    element: <Main />,
  },
  [MainFilterRoutesList.FILETER_SECOND]: {
    path: mainFilterPaths.filterSecond,
    element: <Main />,
  },
  [MainFilterRoutesList.FILETER_THIRD]: {
    path: mainFilterPaths.filterThird,
    element: <Main />,
  },
};
