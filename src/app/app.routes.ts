import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CanActivateGuard, LayoutsAuthComponent } from 'ngx-admin-lte';
import { CanActivateGuard } from 'ngx-admin-lte/src/services/can-activate-guard.service';
import { LayoutsAuthComponent } from 'ngx-admin-lte/src/layouts/auth/auth';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

// Components
import { AppComponent } from './app.component';

const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: 'home'
      },
    ],
    component: LayoutsAuthComponent,
    path: '',
  },
  // not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
