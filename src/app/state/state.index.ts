import { ActionReducer, combineReducers, createSelector } from "@ngrx/store";
import { ContactsReducer, ContactsState } from "./reducers/contacts.reducer";


const reducers = {
    contactsState: ContactsReducer,
};

interface CommonState {
    contactsState: ContactsState;
}

const reducer: ActionReducer<CommonState> = combineReducers(reducers);

function commonReducer(state: any, action: any) {
    return reducer(state, action);
}

export { commonReducer, CommonState };



// export selectors
export const selectContacts = (state: CommonState) => state.contactsState.contacts;


