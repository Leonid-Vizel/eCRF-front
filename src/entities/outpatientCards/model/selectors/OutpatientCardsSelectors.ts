import { RootState } from 'app/providers/StoreProvider';
import { Status } from 'shared/api';

export const outpatientCardsSelector = (state:RootState) => state.outpatientCards.outpatientCards;
export const documentLoadingSelector = (state:RootState) => state.outpatientCards.status === Status.Loading;
