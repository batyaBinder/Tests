import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimProcessComponent } from './claim-process/claim-process.component';

import { ContectsSummaryComponent } from './claim-process/components/contects-summary/contects-summary.component';
import { ContectsComponent } from './claim-process/components/contects/contects.component';
import { ProcessDetailsComponent } from './claim-process/components/process-details/process-details.component';
import { InsuredDetailsComponent } from './claim-process/components/process-details/insured-details/insured-details.component';
import { ClaimDetailsComponent } from './claim-process/components/process-details/claim-details/claim-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClaimProcessComponent,
    ProcessDetailsComponent,
    ContectsSummaryComponent,
    ContectsComponent,
    InsuredDetailsComponent,
    ClaimDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
