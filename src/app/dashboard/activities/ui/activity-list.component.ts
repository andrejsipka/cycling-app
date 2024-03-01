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
    HlmBadgeDirective
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
              <div hlmCard>
                <div class="p-4">
                  <div class="flex justify-center items-center space-x-2">
                    <i class="material-symbols-outlined text-lg">distance</i>
                    <p class="text-muted-foreground text-sm">Distance</p>
                  </div>

                  {{activity.distance}}
                </div>
              </div>
              <div hlmCard>
                <div class="p-4">
                  <div class="flex justify-center items-center space-x-2">
                    <i class="material-symbols-outlined text-lg">timer</i>
                    <p class="text-muted-foreground text-sm">Duration</p>
                  </div>

                  {{activity.moving_time}}
                </div>
              </div>
              <div hlmCard>
                <div class="p-4">
                  <div class="flex justify-center items-center space-x-2">
                    <i class="material-symbols-outlined text-lg">elevation</i>
                    <p class="text-muted-foreground text-sm">Elevation</p>
                  </div>

                  {{activity.total_elevation_gain}}
                </div>
              </div>
              <div hlmCard>
                <div class="p-4">
                  <div class="flex justify-center items-center space-x-2">
                    <i class="material-symbols-outlined text-lg">speed</i>
                    <p class="text-muted-foreground text-sm">Avg. speed</p>
                  </div>

                  {{activity.average_speed}}
                </div>
              </div>
            </div>
            
            <div class="bg-muted h-[300px]">

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