import { Component, Input, OnInit } from '@angular/core';
import { Insured } from 'src/app/claim-process/models/insured';

@Component({
  selector: 'insured-details',
  templateUrl: './insured-details.component.html',
  styleUrls: ['./insured-details.component.scss']
})
export class InsuredDetailsComponent implements OnInit {

  @Input() insured!: Insured;

  constructor() { }

  ngOnInit(): void {
  }

}
