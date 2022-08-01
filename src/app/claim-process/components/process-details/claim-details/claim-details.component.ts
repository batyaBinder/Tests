import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { claimCause, superClaimType, submitedBy, injuryType, submitionMethod } from 'src/app/claim-process/data/data';
import { KeyValue } from 'src/app/claim-process/models/keyValue';
import { SuperClaim } from 'src/app/claim-process/models/super-claim';
import { ContactPerson } from 'src/app/claim-process/models/contactPerson';





@Component({
  selector: 'claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ClaimDetailsComponent implements OnInit {

  @Input() claim!: SuperClaim;
  @Input() contactPersons!: ContactPerson[];
  superClaimTypes = superClaimType;
  claimCauses = claimCause;
  submitedBy = submitedBy;
  injuryType = injuryType;
  submitionMethod = submitionMethod;


  constructor() { 

  }

  ngOnInit(): void {
  }

  onClickSubmitedBy() {
    let isSameType = false;
    if (this.contactPersons.filter(contact => contact.type?.code == this.claim.submitedBy).length == 0) {
      alert("חייב להיות איש קשר מאותו סוג");
      setTimeout(() => {
        this.claim.submitedBy=undefined;
      }, 100);
      
    }

  }

}
