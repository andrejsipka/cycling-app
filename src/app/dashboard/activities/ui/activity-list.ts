import { Component, inject, input } from '@angular/core';
import { Activity } from 'src/app/shared/types/activities';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
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
    HlmButtonDirective
  ],
  template:  `
    <div class="space-y-4">
      @for(activity of list(); track activity.id) {
        <article hlmCard>
          <div hlmCardHeader>
            <div>
              <p hlmCardDescription>{{activity.time}}</p>
            </div>
            <div>
              <h3 hlmCardTitle>{{activity.title}}</h3>
            </div>
          </div>
          <div hlmCardContent>
            <div class="flex justify-between">
              <div hlmCard>
                <div class="p-4">{{activity.duration}}</div>
              </div>
              <div hlmCard>
                <div class="p-4">{{activity.distance}}</div>
              </div>
              <div hlmCard>
                <div class="p-4">{{activity.elevation}}</div>
              </div>
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
  public list = input<Activity[]>([], { alias: 'activities' });

  private router: Router = inject(Router);

  public navigate(id: number) :void {
    this.router.navigate(['activities', id]);
  }
}