import { Component, inject, input } from '@angular/core';
import { ActivityObject } from 'src/app/shared/types/activities';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { Router } from '@angular/router';
import { MapComponent } from 'src/app/shared/ui /map/map.component';
import { MetricsWidgetComponent } from './metric-widget.component';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmButtonDirective,
    HlmBadgeDirective,
    MapComponent,
    MetricsWidgetComponent
  ],
  template:  `
    <div class="space-y-4">
      @for(activity of list(); track activity.id) {
        <article hlmCard>
          <div hlmCardHeader>
            <div class="flex space-x-2 items-center">
              <p hlmCardDescription>{{activity.start_date}}</p>
              <div hlmBadge variant="default" size="default">Latest</div>
            </div>
            <div>
              <h3 hlmCardTitle>{{activity.name}}</h3>
            </div>
          </div>
          <div hlmCardContent>
            <div class="flex justify-between mb-4">
              <app-metrics-widget googleIcon="distance" label="Distance">{{activity.distance}}</app-metrics-widget>
              <app-metrics-widget googleIcon="timer" label="Duration">{{activity.moving_time}}</app-metrics-widget>
              <app-metrics-widget googleIcon="elevation" label="Elevation">{{activity.total_elevation_gain}}</app-metrics-widget>
              <app-metrics-widget googleIcon="speed" label="Avg. speed">{{activity.average_speed}}</app-metrics-widget>
            </div>
            
            <div class="bg-muted h-[300px]">
              <app-map />
            </div>
          </div>
          <p hlmCardFooter>
            <button hlmBtn variant="outline" size="default" (click)="navigate(activity.id)">Details</button>
          </p>
        </article>
      }
    </div>
  `
})
export class ActivityListComponent {
  public list = input<ActivityObject[]>([], { alias: 'activities' });

  private router: Router = inject(Router);

  public navigate(id: number) :void {
    this.router.navigate(['activities', id]);
  }
}