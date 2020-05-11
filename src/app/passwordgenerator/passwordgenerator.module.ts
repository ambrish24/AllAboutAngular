import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordgeneratorComponent } from './passwordgenerator.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    PasswordgeneratorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [
    PasswordgeneratorComponent
  ]
})
export class PasswordgeneratorModule { }
