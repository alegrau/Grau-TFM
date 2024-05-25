import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["text-input", ...args].filter(Boolean)

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})


export class TextInputComponent {
  @Input() size: 'large' | 'small' = 'large';
  @Input() hasLabel: boolean = true;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hasHelpText: boolean = true;
  @Input() helpText: string = '';
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;

  @Output() onClick = new EventEmitter<Event>();
  @Output() onChange = new EventEmitter<Event>();

  public get classes(): string[] {
    return getStyles(this.size)

  }

  handleInputClick(event: Event) {
    this.onClick.emit(event);
  }

  handleInputChange(event: Event) {
    this.onChange.emit(event);
  }
}
