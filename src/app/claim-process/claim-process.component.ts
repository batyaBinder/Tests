import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setContacts } from '../state/actions/contacts.action';
import { Process } from './models/process';
import {AppState} from '../app.state';

@Component({
  selector: 'claim-process',
  templateUrl: './claim-process.component.html',
  styleUrls: ['./claim-process.component.scss']
})
export class ClaimProcessComponent implements OnInit {

  @ViewChild('processForm') processForm!: NgForm;
  process: Process = new Process();

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(setContacts({contacts:this.process.contactPersons}));
  }

  refreshProcess() {
    this.processForm.resetForm();
  }

  onSubmit() {
    console.log(this.process);
  }

}
