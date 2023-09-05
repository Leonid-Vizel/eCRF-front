import ExactJournalOther from 'pages/exactJournal/exactJournalOther/ExactJournalOther';
import ExactJournalUpdate from 'pages/exactJournal/exactJournalUpdate/ExactJournalUpdate';
import Journal from 'pages/journal/Journal';
import { RouteProps } from 'react-router-dom';

export enum JurnalRoutesList {
  JOURNAL_INDEXED = 'journalIndexed',
  JOURNAL_ITEM = 'journalItem',
  JOURNAL_UPDATE = 'journalUpdate',
}

export const journalPaths = {
  [JurnalRoutesList.JOURNAL_ITEM]: 'journal/:id',
  [JurnalRoutesList.JOURNAL_UPDATE]: 'journal/update/:id',
};

export const journalRoute: Record<JurnalRoutesList, RouteProps> = {
  [JurnalRoutesList.JOURNAL_INDEXED]: {
    index: true,
    element: <Journal />,
  },
  [JurnalRoutesList.JOURNAL_ITEM]: {
    path: journalPaths.journalItem,
    element: <ExactJournalOther />,
  },
  [JurnalRoutesList.JOURNAL_UPDATE]: {
    path: journalPaths.journalItem,
    element: <ExactJournalUpdate />,
  },
};
