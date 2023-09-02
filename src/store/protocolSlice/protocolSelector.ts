import {RootState} from "../store";

export const protocolSelector = (state: RootState) => {
    return state.protocols;
};