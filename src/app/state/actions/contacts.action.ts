import { ElementRef } from '@angular/core';
import { createAction, props } from '@ngrx/store'
import { ContactPerson } from 'src/app/claim-process/models/contactPerson';


export const setContacts = createAction('set Contacts', props<{ contacts: ContactPerson[] }>());
export const addContact = createAction('add Contacts', props<{ contact: ContactPerson }>());
export const updateContact = createAction('update Contacts', props<{ contact: ContactPerson }>());
export const clearContacts = createAction('clear Contacts');
export const clearNotDeliveryContacts = createAction('clear not delivery Contacts');

