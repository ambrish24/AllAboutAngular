import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesdirectivesComponent} from './pagesdirectives.component';
import {BrowserModule} from '@angular/platform-browser';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [
    PagesdirectivesComponent,
    ClassDirective,
    TimesDirective
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [
    PagesdirectivesComponent
], exports: [
    CommonModule
  ]
})
export class PagesdirectivesModule { }
