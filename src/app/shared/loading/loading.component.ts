import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '@services/loading';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  imports: [CommonModule],
})
export class LoadingComponent {
  private svc = inject(LoadingService);

  isLoading = this.svc.isLoading;
}
