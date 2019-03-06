import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from './login.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [
    LoginComponent,
    UserAuthComponent
  ],
  exports: [
    LoginComponent,
    UserAuthComponent
  ]
})
export class PagesModule { }
