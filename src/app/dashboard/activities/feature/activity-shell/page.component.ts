import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {ActivityListComponent} from "../../ui/activity-list.component";
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective, HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";

@Component({
  selector: 'app-dashboard-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    ActivityListComponent,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
  ],
  template: `
    <div class="flex justify-center px-2 lx:px-0">
      <div class="min-h-full flex w-full max-w-[1240px]">
        <nav class="md:w-[230px] sticky top-0 h-dvh py-6 flex-shrink-0">
          <a routerLink="/">Dashboard</a>
          <ul>
            <li><a routerLink="/activities">Activities</a></li>
          </ul>
        </nav>
        <div class="md:w-[calc(100%-300px)] grow my-6">
          <router-outlet />
        </div>
      </div>
    </div>
  `
})
export class PageComponent {}