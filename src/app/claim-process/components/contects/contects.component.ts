import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState, selectContactsInCommonState } from 'src/app/app.state';
import { claimCause, superClaimType, injuryType, submitionMethod } from 'src/app/claim-process/data/data';
import { submitedBy } from "../../data/data";
import { ContactPerson } from 'src/app/claim-process/models/contactPerson';
import { PhoneFormatPipe } from 'src/app/phone-format.pipe';
import { addContact, updateContact } from 'src/app/state/actions/contacts.action';
import { KeyValue } from '../../models/keyValue';

@Component({
  selector: 'app-contects',
  templateUrl: './contects.component.html',
  styleUrls: ['./contects.component.scss']
})
export class ContectsComponent implements OnInit, OnDestroy {

  contactPersons!: ContactPerson[];

  newPerson?: ContactPerson;
  submitedBy = submitedBy;

  onlyDigits = "^[a-z0-9_-]{10}$";
  onlyHebrewPattern = "^[\u0590-\u05fe]+$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  subscription: Subscription = new Subscription();


  constructor(private store: Store<AppState>) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(this.store.select(selectContactsInCommonState).subscribe(contacts => {
      this.contactPersons = contacts.map(c=>{return {...c};});
    }));
  }

  AddNewRow() {
    this.newPerson = new ContactPerson();
  }
  addToContacts() {
    if (this.newPerson) {
      this.newPerson.deliveryFlag = false;
      this.store.dispatch(addContact({ contact: this.newPerson }));
      this.newPerson = undefined;
    }
  }
  onClickDelivery(contact: ContactPerson) {
    if (contact.deliveryFlag && this.contactPersons.filter(c => c.deliveryFlag).length == 1) {
      alert("חובה לפחות  איש קשר מועדף אחד");
      this.store.dispatch(updateContact({ contact }));
      return;
    }
    const deliveryFlag = !contact.deliveryFlag;
    this.store.dispatch(updateContact({ contact: { ...contact, deliveryFlag } }));
  }

}
