import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordgeneratorComponent} from './passwordgenerator.component';


@NgModule({
  declarations: [
    PasswordgeneratorComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [
    PasswordgeneratorComponent
  ],
  exports: [
    CommonModule
  ]
})
export class PasswordgeneratorModule { }
