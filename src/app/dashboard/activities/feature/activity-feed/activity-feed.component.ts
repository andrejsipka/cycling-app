import { Component, inject } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { ActivityListComponent } from '../../ui/activity-list.component';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [
    ActivityListComponent,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
  ],
  template: `
    <div class="flex w-100 space-x-4">
      <div class="flex-grow max-w-[600px]">
        <app-activity-list [activities]="activitiesService.activitiesSignal()"/>
      </div> 
      <div class="space-y-4">
        <section hlmCard>
          <div hlmCardHeader>
            <div>
              <i class="material-symbols-outlined">readiness_score</i>
              <h3 hlmCardTitle>Recovery</h3>
            </div>
            <p hlmCardDescription>Recommended recovery time</p>
          </div>
          <div hlmCardContent>
            <h1>12h left</h1>
          </div>
        </section>

        <section hlmCard>
          <div hlmCardHeader>
            <div>
              <i class="material-symbols-outlined">nutrition</i>
              <h3 hlmCardTitle>Nutritions</h3>
            </div>
            <p hlmCardDescription>Improve your recovery process</p>
          </div>
          <div hlmCardContent>
            <div>Vegetables</div>
            <div>Fruits</div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class ActivityFeedComponent {
  public activitiesService: ActivitiesService = inject(ActivitiesService);

}

