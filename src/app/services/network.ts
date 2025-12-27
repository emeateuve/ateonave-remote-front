import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'environments/env';
import { NetworkStatusResponse, NetworkStatus } from 'app/types/NetworkStatus';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { StatusService } from './status';

@Injectable({ providedIn: 'root' })
export class Network {
  private bars = new BehaviorSubject<NetworkStatus>('full');
  bars$ = this.bars.asObservable();

  constructor(private http: HttpClient, private statusService: StatusService) {
    this.check();
    setInterval(() => this.check(), 10619);
  }

  private async check() {
    try {
      const response = await firstValueFrom(
        this.http.get<NetworkStatusResponse>(`${environment.apiUrl}/live`)
      );
      this.bars.next(this.pingTimeToBars(response.pingTime));
      this.statusService.setStatus(response.pcAlive ? 'connected' : 'disconnected');
    } catch (err) {
      this.statusService.setStatus('offline');
      this.bars.next('');
    }
  }

  private pingTimeToBars(pingTime: number): NetworkStatus {
    if (pingTime < 0) return '';
    if (pingTime < 80) return 'full';
    if (pingTime < 200) return 'med';
    return 'low';
  }
}
