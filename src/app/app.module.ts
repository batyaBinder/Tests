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
import { PhoneFormatPipe } from './phone-format.pipe';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {reducers} from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    ClaimProcessComponent,
    ProcessDetailsComponent,
    ContectsSummaryComponent,
    ContectsComponent,
    InsuredDetailsComponent,
    ClaimDetailsComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
