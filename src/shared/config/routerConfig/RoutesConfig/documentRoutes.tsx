import AnamnesisDocument from 'pages/documentData/anamnesisDocument/AnamnesisDocument';
import CriteriaDocument from 'pages/documentData/criteriaDocument/CriteriaDocument';
import MainDocument from 'pages/documentData/mainDocument/MainDocument';
import PhysicalExaminationData from 'pages/documentData/physicalExamination/PhysicalExaminationData';
import ScreeningData from 'pages/documentData/screeningDocument/ScreeningData';
import SyphilisData from 'pages/documentData/syphilisDocument/SyphilisData';
import VisitsData from 'pages/documentData/visitsDocument/VisitsData';
import Documents from 'pages/documents/Documents';
import { RouteProps } from 'react-router-dom';

export enum DocumentRoutesList {
  DOCUMENT = 'document',
  DOCUMENT_DATA_ID = 'documentDataId',
  PROTOCOL_ID_SYPHILIS = 'protocolIdSyphilis',
  PROTOCOL_ID_SCREENING = 'protocolIdScreening',
  PROTOCOL_ID_ANAMNESIS = 'protocolIdAnamnesis',
  PROTOCOL_ID_CRITERIA = 'protocolIdCriteria',
  PROTOCOL_ID_PHYSICAL = 'protocolIdPhysical',
  PROTOCOL_VISIT_DAY = 'protocolVisitDay',
  EDIT_PROTOCOL_ID = 'editProtocolId',
  EDIT_PROTOCOL_ID_SYPHILIS = 'editProtocolIdSyphilis',
  EDIT_PROTOCOL_ID_SCREENING = 'editProtocolIdScreening',
  EDIT_PROTOCOL_ID_ANAMNESIS = 'editProtocolIdAnamnesis',
  EDIT_PROTOCOL_ID_CRITERIA = 'editProtocolIdCriteria',
  EDIT_PROTOCOL_ID_PHYSICAL = 'editProtocolIdPhysical',
  EDIT_PROTOCOL_VISIT_DAY = 'editProtocolVisitDay',
}

export const documentRoutePaths: Record<DocumentRoutesList, string> = {
  [DocumentRoutesList.DOCUMENT]: ':id',
  [DocumentRoutesList.DOCUMENT_DATA_ID]: 'data/:id',
  [DocumentRoutesList.PROTOCOL_ID_SYPHILIS]: 'data/:protocolId/:id/syphilis',
  [DocumentRoutesList.PROTOCOL_ID_SCREENING]: 'data/:protocolId/:id/screening',
  [DocumentRoutesList.PROTOCOL_ID_ANAMNESIS]: 'data/:protocolId/:id/syphilis',
  [DocumentRoutesList.PROTOCOL_ID_CRITERIA]: 'data/:protocolId/:id/anamnesis',
  [DocumentRoutesList.PROTOCOL_ID_PHYSICAL]: 'data/:protocolId/:id/criteria',
  [DocumentRoutesList.PROTOCOL_VISIT_DAY]:
        'data/:protocolId/:id/visit/:dayId',
  [DocumentRoutesList.EDIT_PROTOCOL_ID]: 'edit/:protocolId/:id',
  [DocumentRoutesList.EDIT_PROTOCOL_ID_SYPHILIS]:
        'data/edit/:protocolId/:id/syphilis',
  [DocumentRoutesList.EDIT_PROTOCOL_ID_SCREENING]:
        'data/edit/:protocolId/:id/screening',
  [DocumentRoutesList.EDIT_PROTOCOL_ID_ANAMNESIS]:
        'data/edit/:protocolId/:id/syphilis',
  [DocumentRoutesList.EDIT_PROTOCOL_ID_CRITERIA]:
        'data/edit/:protocolId/:id/anamnesis',
  [DocumentRoutesList.EDIT_PROTOCOL_ID_PHYSICAL]:
        'data/edit/:protocolId/:id/criteria',
  [DocumentRoutesList.EDIT_PROTOCOL_VISIT_DAY]:
        'data/edit/:protocolId/:id/visit/:dayId',
};

export const documentRoute: Record<DocumentRoutesList, RouteProps> = {
  [DocumentRoutesList.DOCUMENT]: {
    path: documentRoutePaths.document,
    element: <Documents />,
  },
  [DocumentRoutesList.DOCUMENT_DATA_ID]: {
    path: documentRoutePaths.documentDataId,
    element: <MainDocument />,
  },
  [DocumentRoutesList.PROTOCOL_ID_SYPHILIS]: {
    path: documentRoutePaths.protocolIdSyphilis,
    element: <SyphilisData />,
  },
  [DocumentRoutesList.PROTOCOL_ID_SCREENING]: {
    path: documentRoutePaths.protocolIdScreening,
    element: <ScreeningData />,
  },
  [DocumentRoutesList.PROTOCOL_ID_ANAMNESIS]: {
    path: documentRoutePaths.protocolIdAnamnesis,
    element: <AnamnesisDocument />,
  },
  [DocumentRoutesList.PROTOCOL_ID_CRITERIA]: {
    path: documentRoutePaths.protocolIdCriteria,
    element: <CriteriaDocument />,
  },
  [DocumentRoutesList.PROTOCOL_ID_PHYSICAL]: {
    path: documentRoutePaths.protocolIdPhysical,
    element: <PhysicalExaminationData />,
  },
  [DocumentRoutesList.PROTOCOL_VISIT_DAY]: {
    path: documentRoutePaths.protocolVisitDay,
    element: <VisitsData />,
  },
  [DocumentRoutesList.EDIT_PROTOCOL_ID]: {
    path: documentRoutePaths.editProtocolId,
    element: <MainDocument />,
  },
  [DocumentRoutesList.EDIT_PROTOCOL_ID_SYPHILIS]: {
    path: documentRoutePaths.editProtocolIdSyphilis,
    element: <SyphilisData />,
  },
  [DocumentRoutesList.EDIT_PROTOCOL_ID_SCREENING]: {
    path: documentRoutePaths.editProtocolIdScreening,
    element: <ScreeningData />,
  },
  [DocumentRoutesList.EDIT_PROTOCOL_ID_ANAMNESIS]: {
    path: documentRoutePaths.editProtocolIdAnamnesis,
    element: <AnamnesisDocument />,
  },
  [DocumentRoutesList.EDIT_PROTOCOL_ID_CRITERIA]: {
    path: documentRoutePaths.editProtocolIdCriteria,
    element: <CriteriaDocument />,
  },
  [DocumentRoutesList.EDIT_PROTOCOL_ID_PHYSICAL]: {
    path: documentRoutePaths.editProtocolIdPhysical,
    element: <PhysicalExaminationData />,
  },
  [DocumentRoutesList.EDIT_PROTOCOL_VISIT_DAY]: {
    path: documentRoutePaths.editProtocolVisitDay,
    element: <VisitsData />,
  },
};
