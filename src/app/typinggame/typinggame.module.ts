import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypinggameComponent} from './typinggame.component';


@NgModule({
  declarations: [
    TypinggameComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [
    TypinggameComponent
  ],
  exports: [
    CommonModule
  ]
})
export class TypinggameModule { }
