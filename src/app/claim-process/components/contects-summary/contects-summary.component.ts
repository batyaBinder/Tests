import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState, selectContactsInCommonState } from 'src/app/app.state';
import { ContactPerson } from 'src/app/claim-process/models/contactPerson';
import { Insured } from 'src/app/claim-process/models/insured';
import { addContact, clearContacts, clearNotDeliveryContacts } from 'src/app/state/actions/contacts.action';
import { selectContacts } from 'src/app/state/state.index';
import { submitedBy } from "../../data/data";


@Component({
  selector: 'app-contects-summary',
  templateUrl: './contects-summary.component.html',
  styleUrls: ['./contects-summary.component.scss']
})
export class ContectsSummaryComponent implements OnInit, OnDestroy {
  acountContacts?: number;

  contactPersons!: ContactPerson[];
  @Input() insured!: Insured;
  insuredAdded:boolean=true;

  subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {
    this.subscription.add(store.select(selectContactsInCommonState).subscribe(contacts => {
      this.contactPersons = contacts;
    }));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }
  DeleteAllContacts() {
    this.store.dispatch(clearContacts());
  }

  DeleteContacts() {
    this.store.dispatch(clearNotDeliveryContacts());
    
  }

  AddInsured() {
    let myNewContact: ContactPerson = new ContactPerson();
    myNewContact.address = this.insured.address;
    myNewContact.deliveryFlag = false;
    //myNewContact.id = this.contactPersons[this.contactPersons.length - 1].id + 1;
    myNewContact.id = this.insured.identity;
    myNewContact.name = this.insured.firstName + " " + this.insured.lastName;
    myNewContact.type = submitedBy[0];
    //this.contactPersons.push(myNewContact);
    this.store.dispatch(addContact({ contact:myNewContact  }));
    this.insuredAdded=false;


  }
}
