import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["chips", ...args].filter(Boolean)

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {

  @Input() hasIcon: boolean = false;
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() hasButton: boolean = false;
  @Input() iconButton: string = '';
  @Input() disabled: boolean = false;

  public get classes(): string[] {
    return getStyles()
  }
}
