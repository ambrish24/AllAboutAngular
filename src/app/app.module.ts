import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {ProductsRxjsModule} from './products-rxjs/products-rxjs.module';
import {AppRoutingModule} from './app-routing.module';
import {TypinggameModule} from './typinggame/typinggame.module';
import {PagesdirectivesModule} from './pagesdirectives/pagesdirectives.module';
import {PasswordgeneratorModule} from './passwordgenerator/passwordgenerator.module';
import {NgClassNgStyleComponent} from './ngclass-ngstyle/ngclass-ngstyle.component';

@NgModule({
  declarations: [AppComponent, NgClassNgStyleComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsRxjsModule,
    AppRoutingModule,
    TypinggameModule,
    PagesdirectivesModule,
    PasswordgeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
