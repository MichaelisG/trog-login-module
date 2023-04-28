import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrogLoginRoutingModule } from './trog-login-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TrogLoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class TrogLoginModule { }
