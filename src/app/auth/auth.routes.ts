import { Route } from '@angular/router';

export const authRoutes :Route[] = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
]