import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';

const getStyles = (...args: string[]) => ["radio-button", ...args].filter(Boolean)

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {

  @Input() label: string = 'Option 1';
  @Input() isDisabled: boolean = false;
  @Input() hasError: boolean = false;

  @Output() change: EventEmitter<Event> = new EventEmitter<Event>();

  onRadioChange(event: Event): void {
    this.change.emit(event);
  };

  public get classes(): string[] {
    return getStyles()

  }
}
