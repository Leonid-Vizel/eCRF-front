import { RootState } from 'app/providers/StoreProvider';
import { Status } from 'shared/api';

export const outpatientCardsSelector = (state:RootState) => state.document.outpatientCards;
export const documentLoadingSelector = (state:RootState) => state.document.status === Status.Loading;
