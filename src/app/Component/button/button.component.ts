import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


const getStyles = (...args: string[]) => ["button", ...args].filter(Boolean)

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input()
  label: string = '';

  @Input()
  type: "primary" | "secondary" | "tertiary" = "primary";

  @Input()
  size: "large" | "medium" | "small" = "large";

  @Input() hasLeftIcon: boolean = true;
  @Input() hasRightIcon: boolean = true;
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';
  @Input() state: "active" | "disabled" = "active";

  public get classes(): string[] {
    return getStyles(this.type, this.size, this.state)

  }

}
