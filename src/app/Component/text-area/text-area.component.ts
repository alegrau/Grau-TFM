import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["text-area", ...args].filter(Boolean)

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})

export class TextAreaComponent {

  @Input() hasCounter: boolean = true;
  @Input() hasLabel: boolean = true;
  @Input() label: string = '';

  @Input() placeholder: string = '';
  @Input() hasHelpText: boolean = true;
  @Input() helpText: string = '';
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;

  @Input() maxLength: number = 100;
  @Input() currentLength: number = 0;


  public get classes(): string[] {
    return getStyles()
  }

}
