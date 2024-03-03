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
    <div class="flex justify-center px-2 lx:px-0">
      <div class="min-h-full flex w-full max-w-[1240px]">
        <nav class="md:w-[300px] sticky top-0 h-dvh py-6">
          <a routerLink="/">Dashboard</a>
          <ul>
            <li><a routerLink="/activities">Activities</a></li>
          </ul>
        </nav>
        <div class="grow my-6">
          <router-outlet />
        </div>
      </div>
    </div>
  `
})
export class PageComponent {}