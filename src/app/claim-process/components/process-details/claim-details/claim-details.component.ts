import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { claimCause, superClaimType } from 'src/app/claim-process/data/data';
import { KeyValue } from 'src/app/claim-process/models/keyValue';
import { SuperClaim } from 'src/app/claim-process/models/super-claim';




@Component({
  selector: 'claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ClaimDetailsComponent implements OnInit {

  @Input() claim!: SuperClaim;

  superClaimTypes = superClaimType;
  claimCauses = claimCause;


  constructor() { }

  ngOnInit(): void {
  }

}
