import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["tooltip", ...args].filter(Boolean)

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {

  @Input() label: string = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top'


  public get classes(): string[] {
    return getStyles(this.position)
  }
}
