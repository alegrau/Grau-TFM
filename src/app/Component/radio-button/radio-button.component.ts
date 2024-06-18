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

  @Input() label: string = '';
  @Input() isInvalid: boolean = false;
  @Input() isDisabled: boolean = false;

  public get classes(): string[] {
    return getStyles()
  }


}
