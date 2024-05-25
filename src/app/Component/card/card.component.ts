import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const getStyles = (...args: string[]) => ["card", ...args].filter(Boolean)


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() orientation: 'vertical' | 'horizontal' = 'horizontal';

  @Input() title: string = ''

  @Input() description: string = ''

  @Input() disabled: boolean = false;

  public get classes(): string[] {
    return getStyles(this.orientation)
  }
}
