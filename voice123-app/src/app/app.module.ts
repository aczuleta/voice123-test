import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 


import {routes} from './app.routing';

import{HighlightSearch} from './pipes/highlight.pipe';
import { VoiceActorCardComponent } from './components/voice-actor-card/voice-actor-card.component';
import { ActorsSummaryComponent } from './components/actors-summary/actors-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    VoiceActorCardComponent,
    ActorsSummaryComponent,
    HighlightSearch
  ],
  imports: [
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers:[HighlightSearch],
  bootstrap: [AppComponent]
})
export class AppModule { }
