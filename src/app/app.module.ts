import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PasswordgeneratorModule } from './passwordgenerator/passwordgenerator.module';
import { CardsModule } from './cards/cards.module';
import { TypinggameModule } from './typinggame/typinggame.module';
import { PagesdirectivesModule } from './pagesdirectives/pagesdirectives.module';
import { ClassDirective } from './pagesdirective/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective
  ],
  imports: [
    BrowserModule,
    PasswordgeneratorModule,
    CardsModule,
    TypinggameModule,
    PagesdirectivesModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
