import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingProviders, routing } from './app.routing';
import { AppComponent } from './app.component';
import { MockupHeaderComponent } from './mockup-header/mockup-header.component';
import { MockupMainComponent } from './mockup-main/mockup-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MockupHeaderComponent,
    MockupMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
