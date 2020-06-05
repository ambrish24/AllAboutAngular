import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FitnessComponent} from './fitness.component';
import {LoginComponent} from './login/login.component';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

// AngularFire modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Services
import {AuthService} from './services/auth/auth.service';


export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyCGCOJb-CHAQYqI53VK9ZD04XwQ-1yL9kI',
  authDomain: 'fitness-app-34ff7.firebaseapp.com',
  databaseURL: 'https://fitness-app-34ff7.firebaseio.com',
  projectId: 'fitness-app-34ff7',
  storageBucket: 'fitness-app-34ff7.appspot.com',
  messagingSenderId: '227821142716',
  appId: '1:227821142716:web:719c146c656b55b89686b9',
  measurementId: 'G-TDNMYCZXWG'
};

@NgModule({
  declarations: [
    FitnessComponent,
    LoginComponent,
    AuthFormComponent,
    RegisterComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  bootstrap: [
    FitnessComponent
  ],
  exports: [
    CommonModule
  ]
})
export class FitnessModule { }
