import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {CardsComponent} from './cards.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [
    CardsComponent
  ]
})
export class CardsModule { }
