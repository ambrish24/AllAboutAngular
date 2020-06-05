import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import { WelcomeComponent } from './products-rxjs/home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {TypinggameComponent} from './typinggame/typinggame.component';
import {PasswordgeneratorComponent} from './passwordgenerator/passwordgenerator.component';
import {PagesdirectivesComponent} from './pagesdirectives/pagesdirectives.component';
import {NgClassNgStyleComponent} from './ngclass-ngstyle/ngclass-ngstyle.component';
import {FitnessComponent} from './fitness/fitness.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./products-rxjs/products/product.module').then(m => m.ProductModule)
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./fitness/fitness.module').then(m => m.FitnessModule)
      },
      { path: 'typinggame', component: TypinggameComponent },
      { path: 'passwordgenerator', component: PasswordgeneratorComponent },
      { path: 'pagesdirectives', component: PagesdirectivesComponent },
      { path: 'ngclassstyle', component: NgClassNgStyleComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
