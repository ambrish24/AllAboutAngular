import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {PageListComponent} from './page-list/page-list.component';

import {CommonModule} from '@angular/common';
import { ProductsRxjsModule } from './products-rxjs/products-rxjs.module';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, PageListComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, ProductsRxjsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
