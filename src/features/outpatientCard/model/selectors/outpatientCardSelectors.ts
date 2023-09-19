import { RootState } from 'app/providers/StoreProvider';

export const cardTabPaneSelector = (state: RootState) => state.outpatientCards.outpatientCard.tabPane;
