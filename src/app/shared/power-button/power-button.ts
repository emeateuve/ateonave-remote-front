import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-power-button',
  imports: [CommonModule],
  templateUrl: './power-button.html',
  styleUrl: './power-button.scss',
})
export class PowerButton {
  @Input() isConnected!: boolean;
  @Input() disabled: boolean = false;
  @Output() event = new EventEmitter<boolean>();

  toggleAteonave(status: boolean) {
    this.event.emit(status);
  }

  get mode(): 'connect' | 'disconnect' | 'disabled' {
    if (this.disabled) return 'disabled';
    return this.isConnected ? 'disconnect' : 'connect';
  }
}
