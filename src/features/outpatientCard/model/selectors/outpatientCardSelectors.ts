import { RootState } from 'app/providers/StoreProvider';

export const cardTabPaneSelector = (state: RootState) => state.outpatientCards.outpatientCard.tabPane;
export const outpatientCardMainInfo = (state: RootState) => state.outpatientCards.outpatientCard.outpatientMainInfoForm;
export const getProtocolId = (state: RootState) => state.outpatientCards.outpatientCard.outpatientMainInfoForm.protocolId;
