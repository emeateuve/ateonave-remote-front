import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  // counter of active requests
  private _count = signal(0);
  public readonly isLoading = this._count.asReadonly();

  // avoid flicker: ensure overlay is visible at least this many ms
  private minVisibleMs = 120;
  private firstShownAt = 0; // timestamp when count went from 0 -> 1

  start() {
    const prev = this._count();
    this._count.update((n) => n + 1);
    if (prev === 0) {
      this.firstShownAt = Date.now();
    }
  }

  stop() {
    const next = Math.max(0, this._count() - 1);
    const now = Date.now();
    const elapsed = now - this.firstShownAt;
    if (next === 0 && this.firstShownAt && elapsed < this.minVisibleMs) {
      // schedule the final decrement after remaining time
      const wait = this.minVisibleMs - elapsed;
      setTimeout(() => {
        this._count.set(0);
        this.firstShownAt = 0;
      }, wait);
    } else {
      this._count.set(next);
      if (next === 0) this.firstShownAt = 0;
    }
  }

  reset() {
    this._count.set(0);
    this.firstShownAt = 0;
  }
}
