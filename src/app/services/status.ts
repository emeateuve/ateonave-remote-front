import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ConnectionStatus = 'disconnected' | 'connected' | 'offline' | 'loading';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private statusSubject = new BehaviorSubject<ConnectionStatus>('connected');
  status$: Observable<ConnectionStatus> = this.statusSubject.asObservable();

  constructor() {}

  setStatus(status: ConnectionStatus): void {
    this.statusSubject.next(status);
  }

  getStatus(): ConnectionStatus {
    return this.statusSubject.getValue();
  }
}
