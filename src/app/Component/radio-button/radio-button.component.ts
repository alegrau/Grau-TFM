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

  @Input() options: { label: string; checked: boolean; state: 'valid' | 'invalid' | 'disabled' }[] = [];

  public getClasses(state: 'valid' | 'invalid' | 'disabled'): string {
    switch (state) {
      case 'invalid':
        return 'invalid';
      case 'disabled':
        return 'disabled';
      default:
        return 'valid';
    }
  }

  // @Input() label: string = '';

  // @Input() checked: boolean = false;

  //@Input() state: 'valid' | 'invalid' | 'disabled' = 'valid';

  //public get classes(): string[] {
  //return getStyles()

}
