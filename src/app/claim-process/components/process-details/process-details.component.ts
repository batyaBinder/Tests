import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Insured } from '../../models/insured';
import { SuperClaim } from '../../models/super-claim';
import { ContactPerson } from 'src/app/claim-process/models/contactPerson';


@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]

})
export class ProcessDetailsComponent implements OnInit {

  @Input() insured!: Insured;
  @Input() superClaim!: SuperClaim;
  @Input() contactPersons!: ContactPerson[];


  constructor() { }

  ngOnInit(): void {
  }

}
