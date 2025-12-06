import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Network } from '@services/network';
import { getNetworkStatusImage, NetworkStatus } from 'app/types/NetworkStatus';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.scss',
})
export class Signal implements OnInit {
  constructor(private networkService: Network, private cd: ChangeDetectorRef) {}

  status: NetworkStatus = '';
  imgUrl: string = getNetworkStatusImage(this.status);
  private animating: boolean = false;
  private animationStates: NetworkStatus[] = ['', 'low', 'med', 'full'];

  ngOnInit(): void {
    this.networkService.bars$.subscribe((networkStatus: NetworkStatus) => {
      if (!this.animating) {
        this.status = networkStatus;
        this.imgUrl = getNetworkStatusImage(networkStatus);
        this.cd.detectChanges();
      }
    });
    this.togglePartyEffect();
  }

  async togglePartyEffect() {
    if (this.animating) return;
    this.animating = true;
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    const cycles = 5;

    for (let c = 0; c < cycles; c++) {
      for (const state of this.animationStates) {
        this.status = state;
        this.imgUrl = getNetworkStatusImage(state);
        this.cd.detectChanges();
        await delay(100);
      }
    }
    this.animating = false;
    this.imgUrl = getNetworkStatusImage(this.status);
  }
}
