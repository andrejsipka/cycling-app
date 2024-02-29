import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
  ],
  template: `
  <div class="min-h-full flex">
    <nav class="md:w-[300px] sticky top-0 h-dvh">
      <a routerLink="/">Dashboard</a>
      <ul>
        <li><a routerLink="/activities">Activities</a></li>
      </ul>
    </nav>
    <div class="grow">
      <router-outlet />
    </div>
  </div>
  `
})
export class PageComponent {}