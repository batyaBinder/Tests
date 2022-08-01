import { createSelector } from "@ngrx/store";
import { commonReducer, CommonState, selectContacts } from "./state/state.index";

const reducers = {
    common:commonReducer,
};

interface AppState {
    common: CommonState
}

export { reducers, AppState };

export const selectCommon = (state:AppState) => state.common;
export const selectContactsInCommonState = createSelector(selectCommon, selectContacts)
