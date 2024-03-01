import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityObject } from '../../../shared/types/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private readonly http: HttpClient = inject(HttpClient);

  public activitiesSignal = signal<ActivityObject[]>([]);

  constructor() {
    this.getActivities().subscribe({
      next: (data) => {
        this.activitiesSignal.set(data);
      }
    })
  }
  
  private getActivities() :Observable<ActivityObject[]> {
    return this.http.get<ActivityObject[]>('/assets/data/activities.json');
  }
}

