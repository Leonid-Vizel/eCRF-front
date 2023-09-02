import { RootState } from '../store';

export const documentSelector = (state: RootState) => {
    return state.document;
};
