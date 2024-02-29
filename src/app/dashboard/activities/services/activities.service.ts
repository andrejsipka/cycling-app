import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../../../shared/types/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private readonly http: HttpClient = inject(HttpClient);

  public activitiesSignal = signal<Activity[]>([]);

  constructor() {
    this.getActivities().subscribe({
      next: (data) => {
        this.activitiesSignal.set(data);
      }
    })
  }
  
  private getActivities() :Observable<Activity[]> {
    return this.http.get<Activity[]>('/assets/data/activities.json');
  }
}

