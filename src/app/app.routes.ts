import { Route } from '@angular/router';
import { isAuthenticated } from './shared/guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes)
  },
  {
    path: '',
    canActivate: [isAuthenticated()],
    loadChildren: () => import('./dashboard/dashboard.routes').then((m) => m.dashboardRoutes)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  }
];
