import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["button-icon", ...args].filter(Boolean)

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css'
})
export class ButtonIconComponent {
  @Input()
  type: "primary" | "secondary" | "tertiary" = "primary";

  @Input()
  size: "large" | "medium" | "small" = "large";

  @Input() icon: string = '';

  @Input() state: "active" | "disabled" = "active";

  public get classes(): string[] {
    return getStyles(this.type, this.size, this.state)

  }
}
