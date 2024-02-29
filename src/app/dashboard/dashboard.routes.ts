import { PageComponent } from './page.component';
import { Route } from '@angular/router';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: PageComponent,
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