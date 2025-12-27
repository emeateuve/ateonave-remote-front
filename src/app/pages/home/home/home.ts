import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ateonave } from '@services/ateonave';
import { StatusService } from '@services/status';
import { PowerButton } from 'app/shared/power-button/power-button';
import { AteonaveStatus, getLocaleName } from 'app/types/AteonaveStatus';
import { BehaviorSubject, merge, Observable, Subject, timer } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  imports: [PowerButton, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  get status$() {
    return this.statusService.status$;
  }

  get localeStatus$() {
    return this.status$.pipe(map((s: AteonaveStatus) => getLocaleName(s)));
  }

  private partyTrigger$ = new Subject<void>();
  private errorTrigger$ = new Subject<void>();
  party$: Observable<boolean> = this.partyTrigger$.pipe(
    switchMap(() =>
      timer(0, 2000).pipe(
        map((i) => i === 0),
        take(2)
      )
    )
  );
  error$: Observable<boolean> = this.errorTrigger$.pipe(
    switchMap(() =>
      timer(0, 2000).pipe(
        map((i) => i === 0),
        take(2)
      )
    )
  );

  constructor(private ateoService: Ateonave, public statusService: StatusService) {}

  callApi(connect: boolean) {
    this.statusService.setStatus('loading');
    setTimeout(() => {
      this.ateoService.post(connect ? 'wake' : 'shutdown').subscribe({
        next: () => {
          this.statusService.setStatus(connect ? 'connected' : 'disconnected');
          this.partyTrigger$.next();
        },
        error: () => {
          this.statusService.setStatus('offline');
          this.errorTrigger$.next();
        },
      });
    }, 2619);
  }
}
