import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'environments/env';
import { NetworkStatus } from 'app/types/NetworkStatus';

@Injectable({ providedIn: 'root' })
export class Network {
  private bars = new BehaviorSubject<NetworkStatus>('full');
  bars$ = this.bars.asObservable();

  constructor() {
    this.check();
    setInterval(() => this.check(), 10619);
  }

  private async check() {
    const start = performance.now();
    try {
      await fetch(environment.apiUrl, { cache: 'no-store' });
      const rtt = performance.now() - start;
      this.bars.next(this.mapRttToBars(rtt));
    } catch {
      this.bars.next(''); // sin conexión
    }
  }

  private mapRttToBars(rtt: number): NetworkStatus {
    if (rtt < 100) return 'full';
    if (rtt < 300) return 'med';
    if (rtt < 800) return 'low';
    return '';
  }
}
