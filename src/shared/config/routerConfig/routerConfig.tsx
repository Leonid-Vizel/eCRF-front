import AdminMain from 'pages/admin/adminMain/AdminMain';
import AnamnesisDocument from 'pages/documentData/anamnesisDocument/AnamnesisDocument';
import CriteriaDocument from 'pages/documentData/criteriaDocument/CriteriaDocument';
import MainDocument from 'pages/documentData/mainDocument/MainDocument';
import PhysicalExaminationData from 'pages/documentData/physicalExamination/PhysicalExaminationData';
import ScreeningData from 'pages/documentData/screeningDocument/ScreeningData';
import SyphilisData from 'pages/documentData/syphilisDocument/SyphilisData';
import VisitsData from 'pages/documentData/visitsDocument/VisitsData';
import Documents from 'pages/documents/Documents';
import ExactJournalOther from 'pages/exactJournal/exactJournalOther/ExactJournalOther';
import ExactJournalUpdate from 'pages/exactJournal/exactJournalUpdate/ExactJournalUpdate';
import ExactProtocolPage from 'pages/exactProtocolPage/ExactProtocolPage';
import Journal from 'pages/journal/Journal';
import Login from 'pages/login/Login';
import Main from 'pages/main/Main';
import { RouteProps } from 'react-router-dom';
// todo: НАСТРОИТЬ ПРИВАТНЫЙ РОУТИНГ
// todo: поправить нейминги в ENUM
export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  ADMIN = 'admin',
  JOURNAL = 'journal',
  EXACT_JOURNAL_UPDATE = 'exactJournalUpdate',
  EXACTJOURNALOTHER = 'exactJournalOther',
  EXACTPROTOCOLPAGE = 'exactProtocolPage',
  DOCUMENTS = 'documents',
  MAINDOCUMENT = 'mainDocument',
  SYPHILISDATA = 'syphilisData',
  SCREENINGDATA = 'screeningData',
  ANAMNESISDOCUMENT = 'anamnesisDocument',
  CRITERIADOCUMENT = 'criteriaDocument',
  PHYSICALEXAMINATIONDATA = 'physicalExaminationData',
  // todo: ПОПРАВИТЬ НА visitDate
  VIZIT_DATA = 'visitData',
  NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.ADMIN]: '/admin/panel',
  [AppRoutes.JOURNAL]: '/journal',
  [AppRoutes.EXACT_JOURNAL_UPDATE]: '/journal/update/:id',
  [AppRoutes.EXACTJOURNALOTHER]: '/journal/:id',
  [AppRoutes.EXACTPROTOCOLPAGE]: '/protocol/:protocolId/:subjectId',
  [AppRoutes.DOCUMENTS]: '/protocol/:protocolId/:subjectId',
  [AppRoutes.MAINDOCUMENT]: '/document/data/:id',
  [AppRoutes.SYPHILISDATA]: '/document/data/:protocolId/:id/syphilis',
  [AppRoutes.SCREENINGDATA]: '/document/data/:protocolId/:id/screening',
  [AppRoutes.ANAMNESISDOCUMENT]: '/document/data/:protocolId/:id/anamnesis',
  [AppRoutes.CRITERIADOCUMENT]: '/document/data/:protocolId/:id/criteria',
  [AppRoutes.PHYSICALEXAMINATIONDATA]: '/document/data/:protocolId/:id/physical',
  [AppRoutes.NOT_FOUND]: '/notFound',
  [AppRoutes.VIZIT_DATA]: '/document/data/:protocolId/:id/visit/:dayId',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Main />,
  },
  [AppRoutes.ADMIN]: {
    path: RoutePath.admin,
    element: <AdminMain />,
  },
  [AppRoutes.ANAMNESISDOCUMENT]: {
    path: RoutePath.anamnesisDocument,
    element: <AnamnesisDocument />,
  },
  [AppRoutes.CRITERIADOCUMENT]: {
    path: RoutePath.criteriaDocument,
    element: <CriteriaDocument />,
  },
  [AppRoutes.DOCUMENTS]: {
    path: RoutePath.documents,
    element: <Documents />,
  },
  [AppRoutes.EXACTJOURNALOTHER]: {
    path: RoutePath.exactJournalOther,
    element: <ExactJournalOther />,
  },
  [AppRoutes.EXACT_JOURNAL_UPDATE]: {
    path: RoutePath.exactJournalUpdate,
    element: <ExactJournalUpdate />,
  },
  [AppRoutes.EXACTPROTOCOLPAGE]: {
    path: RoutePath.exactProtocolPage,
    element: <ExactProtocolPage />,
  },
  [AppRoutes.JOURNAL]: {
    path: RoutePath.journal,
    element: <Journal />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <Login />,
  },
  [AppRoutes.MAINDOCUMENT]: {
    path: RoutePath.mainDocument,
    element: <MainDocument />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <div>страница не найдена</div>,
  },
  [AppRoutes.PHYSICALEXAMINATIONDATA]: {
    path: RoutePath.physicalExaminationData,
    element: <PhysicalExaminationData />,
  },
  [AppRoutes.SCREENINGDATA]: {
    path: RoutePath.screeningData,
    element: <ScreeningData />,
  },
  [AppRoutes.SYPHILISDATA]: {
    path: RoutePath.syphilisData,
    element: <SyphilisData />,
  },
  [AppRoutes.VIZIT_DATA]: {
    path: RoutePath.visitData,
    element: <VisitsData />,
  },
};
