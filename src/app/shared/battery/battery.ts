import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BatteryService } from '@services/battery';

@Component({
  selector: 'app-battery',
  imports: [],
  templateUrl: './battery.html',
  styleUrls: ['./battery.scss'],
})
export class Battery implements OnInit {
  batteryImages: number[] = [];

  constructor(private batteryService: BatteryService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.batteryService.batteryLevel$.subscribe((level) => {
      const imagesCount = Math.max(1, Math.ceil(level * 4));
      this.batteryImages = Array(imagesCount).fill(0);
      this.cd.detectChanges();
    });
  }
}
