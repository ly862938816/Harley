import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from './login/user-auth/auth-guard.service';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    component: PagenotfoundComponent
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
