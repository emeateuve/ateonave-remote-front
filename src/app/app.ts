import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/loading/loading.component';
import { Wrapper } from './shared/wrapper/wrapper';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent, Wrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('ateonave-remote-front');

  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
}
