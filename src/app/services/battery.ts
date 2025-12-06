import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BatteryService {
  private batteryLevelSubject = new BehaviorSubject<number>(1); // 0 a 1
  batteryLevel$ = this.batteryLevelSubject.asObservable();

  constructor() {
    this.initBattery();
  }

  private async initBattery() {
    if (navigator.getBattery) {
      const battery = await navigator.getBattery();
      this.updateLevel(battery.level);
      battery.addEventListener('levelchange', () => this.updateLevel(battery.level));
    }
  }

  private updateLevel(level: number) {
    this.batteryLevelSubject.next(level);
  }
}
