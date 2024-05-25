import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

const getStyles = (...args: string[]) => ["checkbox", ...args].filter(Boolean)

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})

export class CheckboxComponent {

  @Input() state: 'valid' | 'invalid' | 'disabled' = 'valid';

  @Input() label: string = '';

  @Output() stateChange = new EventEmitter<string>();

  toggleCheckbox() {
    if (this.state === 'disabled') return;

    if (this.state === 'valid') {
      this.state = 'invalid';
    } else {
      this.state = 'valid';
    }

    this.stateChange.emit(this.state);
  }

  onFocus() {
    if (this.state !== 'disabled') {
      this.state = 'valid';
    }
  }

  onBlur() {
    if (this.state === 'valid') {
      this.state = 'valid';
    }
  }

  public get classes(): string[] {
    return getStyles(this.state)

  }

}

