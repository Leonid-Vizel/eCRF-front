import {RootState} from "../store";

export const journalSelector = (state: RootState) => {
    return state.journal;
};