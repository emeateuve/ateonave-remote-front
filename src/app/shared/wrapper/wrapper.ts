import { Component, OnInit } from '@angular/core';
import { Status } from '../status/status';
import { StatusService } from '@services/status';
import { Signal } from '../signal/signal';
import { Battery } from '../battery/battery';

@Component({
  selector: 'app-wrapper',
  imports: [Status, Signal, Battery],
  templateUrl: './wrapper.html',
  styleUrl: './wrapper.scss',
})
export class Wrapper implements OnInit {
  constructor(private statusService: StatusService) {}

  currentStatus: any;

  ngOnInit(): void {
    this.statusService.status$.subscribe((res) => {
      this.currentStatus = res;
    });
  }
}
