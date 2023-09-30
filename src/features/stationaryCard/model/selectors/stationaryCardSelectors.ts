import { RootState } from 'app/providers/StoreProvider';

export const cardTabPaneSelector = (state: RootState) => state.stationaryCards.stationaryCard.tabPane;
export const getCardId = (state: RootState) => state.stationaryCards.stationaryCard.cardId;
export const getStationaryCardFormData = (
  formName: string,
) => (state: RootState) => state.stationaryCards.stationaryCard[formName];
