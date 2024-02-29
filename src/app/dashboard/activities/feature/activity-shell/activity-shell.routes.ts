import { Route } from '@angular/router';

export const activityShellRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('../activity-feed/activity-feed.component').then((c) => c.ActivityFeedComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('../activity-detail/activity-detail.component').then((c) => c.ActivityDetailComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  }
]