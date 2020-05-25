import {NgModule} from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppData} from './../app-data';

import {AppRoutingModule} from './../app-routing.module';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './../page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    AppRoutingModule
  ],
  declarations: [
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: []
})

export class ProductsRxjsModule { }
