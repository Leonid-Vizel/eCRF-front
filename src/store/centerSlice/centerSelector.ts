import {RootState} from "../store";

export const centerSelector = (state: RootState) => {
    return state.center;
};