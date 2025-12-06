import { Injectable } from '@angular/core';
import { AteonaveStatus } from 'app/types/AteonaveStatus';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private statusSubject = new BehaviorSubject<AteonaveStatus>('connected');
  status$: Observable<AteonaveStatus> = this.statusSubject.asObservable();

  constructor() {}

  setStatus(status: AteonaveStatus): void {
    this.statusSubject.next(status);
  }

  getStatus(): AteonaveStatus {
    return this.statusSubject.getValue();
  }
}
