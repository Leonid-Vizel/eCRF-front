import { Layout } from 'antd';
import AdminMain from 'pages/admin/adminMain/AdminMain';
import Journal from 'pages/journal/Journal';
// import AnamnesisDocument from 'pages/documentData/anamnesisDocument/AnamnesisDocument';
// import CriteriaDocument from 'pages/documentData/criteriaDocument/CriteriaDocument';
// import MainDocument from 'pages/documentData/mainDocument/MainDocument';
// import PhysicalExaminationData from 'pages/documentData/physicalExamination/PhysicalExaminationData';
// import ScreeningData from 'pages/documentData/screeningDocument/ScreeningData';
// import SyphilisData from 'pages/documentData/syphilisDocument/SyphilisData';
// import VisitsData from 'pages/documentData/visitsDocument/VisitsData';
// import Documents from 'pages/documents/Documents';
// import ExactJournalOther from 'pages/exactJournal/exactJournalOther/ExactJournalOther';
import ExactJournalUpdate from 'pages/exactJournal/exactJournalUpdate/ExactJournalUpdate';
// import ExactProtocolPage from 'pages/exactProtocolPage/ExactProtocolPage';
import Login from 'pages/login/Login';
import Main from 'pages/main/Main';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import ExactJournalOther from 'pages/exactJournal/exactJournalOther/ExactJournalOther';
// todo: НАСТРОИТЬ ПРИВАТНЫЙ РОУТИНГ
// todo: поправить нейминги в ENUM

export enum BaseRoutesList {
  MAIN = 'main',
  ADMIN = 'admin',
  NOT_FOUND = 'notFound',
  LOGIN = 'login',
  DOCUMENTS = 'documents',
  JOURNAL = 'journal',
  NAVIGATE_EMPTY = 'navigateEmpty',
}

// todo: !!! MAIN будет отрефакторен в первую очередь !!!

export enum MainFilterRoutesList {
  FILETER_ZERO = 'filterZero',
  FILETER_FIRST = 'filterFirst',
  FILETER_SECOND = 'filterSecond',
  FILETER_THIRD = 'filterThird',
}
export enum JurnalRoutesList {
  JOURNAL_INDEXED = 'journalIndexed',
  JOURNAL_ITEM = 'journalItem',
  JOURNAL_UPDATE = 'journalUpdate',
}

export const mainFilterPaths: Record<MainFilterRoutesList, string> = {
  [MainFilterRoutesList.FILETER_ZERO]: 'filter=0',
  [MainFilterRoutesList.FILETER_FIRST]: 'filter=1',
  [MainFilterRoutesList.FILETER_SECOND]: 'filter=2',
  [MainFilterRoutesList.FILETER_THIRD]: 'filter=3',
};

export const journalPaths = {
  // [JurnalRoutesList.JOURNAL_INDEXED]: '',
  [JurnalRoutesList.JOURNAL_ITEM]: 'journal/:id',
  [JurnalRoutesList.JOURNAL_UPDATE]: 'journal/update/:id',
};

export const baseRoutePaths: Record<BaseRoutesList, string> = {
  [BaseRoutesList.MAIN]: '/main/',
  [BaseRoutesList.LOGIN]: '/login',
  [BaseRoutesList.ADMIN]: '/admin/panel',
  [BaseRoutesList.JOURNAL]: '/journal/',
  [BaseRoutesList.DOCUMENTS]: '/documents/',
  [BaseRoutesList.NOT_FOUND]: '/notFound',
  [BaseRoutesList.NAVIGATE_EMPTY]: '/',
};

//   [MainRoutes.EXACT_JOURNAL_UPDATE]: '/journal/update/:id',
//   [MainRoutes.EXACTJOURNALOTHER]: '/journal/:id',
//   [MainRoutes.EXACTPROTOCOLPAGE]: '/protocol/:protocolId/:subjectId',
//   [MainRoutes.DOCUMENTS]: '/protocol/:protocolId/:subjectId',
//   [MainRoutes.MAINDOCUMENT]: '/document/data/:id',
//   [MainRoutes.SYPHILISDATA]: '/document/data/:protocolId/:id/syphilis',
//   [MainRoutes.SCREENINGDATA]: '/document/data/:protocolId/:id/screening',
//   [MainRoutes.ANAMNESISDOCUMENT]: '/document/data/:protocolId/:id/anamnesis',
//   [MainRoutes.CRITERIADOCUMENT]: '/document/data/:protocolId/:id/criteria',
//   [MainRoutes.PHYSICALEXAMINATIONDATA]: '/document/data/:protocolId/:id/physical',
//   [MainRoutes.VIZIT_DATA]: '/document/data/:protocolId/:id/visit/:dayId',

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
        element={element}
        path={path}
      />
    ))}
  </Route>,
  },
  [BaseRoutesList.DOCUMENTS]: {
    path: baseRoutePaths.documents,
    element: <Layout />,
  },
  [BaseRoutesList.JOURNAL]: {
    path: baseRoutePaths.journal,
    children:
  <Route>
    {Object.values(journalRoute).map(({ element, path, index }) => (
      <Route
        key={path}
        element={element}
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

// const test2 = [  "/",  "/main/filter=0",  "/main/filter=1",  "/main/filter=2",  "/main/filter=3",  "/admin/panel",  "/journal",
// "/journal/update/:id",  "/journal/:id",  "/protocol/:protocolId/:subjectId",  "/documents/:id",
// "/document/data/:id",  "/document/data/:protocolId/:id/syphilis",  "/document/data/:protocolId/:id/screening",
// "/document/data/:protocolId/:id/anamnesis",  "/document/data/:protocolId/:id/criteria",  "/document/data/:protocolId/:id/physical",
// "/document/data/:protocolId/:id/visit/:dayId",  "/document/data/edit/:protocolId/:id",  "/document/data/edit/:protocolId/:id/syphilis",
// "/document/data/edit/:protocolId/:id/screening",  "/document/data/edit/:protocolId/:id/anamnesis",
// "/document/data/edit/:protocolId/:id/criteria",  "/document/data/edit/:protocolId/:id/physical",
// "/document/data/edit/:protocolId/:id/visit/:dayId"]

export enum MainRoutesTest {
  EXACT_JOURNAL_UPDATE = 'exactJournalUpdate',
  EXACT_JOURNAL_OTHER = 'exactJournalOther',
  EXACT_PROTOCOL_PAGE = 'exactProtocolPage',
  DOCUMENTS = 'documents',
  MAIN_DOCUMENT = 'mainDocument',
  SYPHILIS_DATA = 'syphilisData',
  SCREENING_DATA = 'screeningData',
  ANAMNESIS_DOCUMENT = 'anamnesisDocument',
  CRITERIA_DOCUMENT = 'criteriaDocument',
  PHYSICAL_EXAMINATION_DATA = 'physicalExaminationData',
  // todo: ПОПРАВИТЬ НА visitDate
}
