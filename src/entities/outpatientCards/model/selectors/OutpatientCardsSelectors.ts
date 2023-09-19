import { RootState } from 'app/providers/StoreProvider';
import { Status } from 'shared/api';

export const outpatientCardsSelector = (state:RootState) => state.outpatientCards.outpatientCardslist.cardslist;
export const documentLoadingSelector = (state:RootState) => (
  state.outpatientCards.outpatientCardslist.status === Status.Loading
);
