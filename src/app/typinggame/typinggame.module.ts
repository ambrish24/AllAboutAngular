import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypinggameComponent} from './typinggame.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    TypinggameComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [
    TypinggameComponent
  ]
})
export class TypinggameModule { }
