import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ForsideComponent } from './forside/forside.component';
import { ProjekterComponent } from './projekter/projekter.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    ForsideComponent,
    ProjekterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
