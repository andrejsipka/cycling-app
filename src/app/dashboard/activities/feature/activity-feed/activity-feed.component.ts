import { Component, inject } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { ActivityListComponent } from '../../ui/activity-list';

@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [
    ActivityListComponent
  ],
  template: `
    <div>
       <app-activity-list [activities]="activitiesService.activitiesSignal()"/>
    </div>
  `
})
export class ActivityFeedComponent {
  public activitiesService: ActivitiesService = inject(ActivitiesService);

}

