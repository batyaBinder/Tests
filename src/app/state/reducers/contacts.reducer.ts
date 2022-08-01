

import { CurrencyPipe } from '@angular/common';
import { createReducer, on, Action } from '@ngrx/store';
import { ContactPerson } from 'src/app/claim-process/models/contactPerson';
import { addContact, clearContacts, clearNotDeliveryContacts, setContacts, updateContact } from '../actions/contacts.action';

export interface ContactsState {
    contacts: ContactPerson[];
}
let initialState: ContactsState = {
    contacts: [],
}

const createContactsReducer = createReducer(
    initialState,
    on(setContacts, (state, { contacts }) => {
        console.log('setContacts reducer')
        return {
            ...state, contacts
        };
    }),
    on(addContact, (state, { contact }) => {
        let contacts = [...state.contacts, contact];
        return {
            ...state, contacts
        };
    }),
    on(clearNotDeliveryContacts, (state) => {
        let contacts = state.contacts.filter(c => c.deliveryFlag);
        return {
            ...state, contacts
        };
    }),
    on(clearContacts, (state) => {
        let contacts: ContactPerson[] = [];
        return {
            ...state, contacts
        };
    }),

    on(updateContact, (state, { contact }) => {

        let contacts = [...state.contacts];

        let contactIndex = contacts.findIndex(object =>  object.id === contact.id);
        let startOfArray: ContactPerson[] = contactIndex >0? contacts.splice(0, contactIndex):[];

        let endOfArray: ContactPerson[] =contactIndex<contacts.length-1?contacts.splice(contactIndex+1, contacts.length):[];
        contacts = [...startOfArray ,contact,...endOfArray]

        return {
            ...state, contacts
        };
    }),
);

export function ContactsReducer(state: ContactsState | undefined, action: Action) {
    return createContactsReducer(state, action);
}

