import { PageComponent as ActivityPage } from './activities/feature/activity-shell/page.component';
import { Route } from '@angular/router';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: ActivityPage,
    children: [
      {
        path: 'activities',
        loadChildren: () => import('./activities/feature/activity-shell/activity-shell.routes').then((m) => m.activityShellRoutes)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'activities',
      }
    ]
  }
]