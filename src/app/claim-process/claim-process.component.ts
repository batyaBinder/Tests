import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Process } from './models/process';

@Component({
  selector: 'claim-process',
  templateUrl: './claim-process.component.html',
  styleUrls: ['./claim-process.component.scss']
})
export class ClaimProcessComponent implements OnInit {

  @ViewChild('processForm') processForm!: NgForm;
  process: Process = new Process();

  constructor() { }

  ngOnInit(): void {
  }

  refreshProcess() {
    this.processForm.resetForm();
  }

  onSubmit() {
    console.log(this.process);
  }

}
