import ExactProtocolPage from 'pages/exactProtocolPage/ExactProtocolPage';
import { RouteProps } from 'react-router-dom';

export enum ProtocolRouteslist {
  PROTOCOL_ITEM = 'protocolItem',
}

export const protocolPaths = {
  [ProtocolRouteslist.PROTOCOL_ITEM]: ':protocolId/:subjectId',
};

export const protocolRoute: Record<ProtocolRouteslist, RouteProps> = {
  [ProtocolRouteslist.PROTOCOL_ITEM]: {
    path: protocolPaths.protocolItem,
    element: <ExactProtocolPage />,
  },
};
