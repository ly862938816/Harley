import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from './login/user-auth/auth-guard.service';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
    // canActivate: [AuthGuardService],
    // pathMatch: 'full'
  },
  /* {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuardService],     // added canActive and AuthGuard service
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]}, */
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
