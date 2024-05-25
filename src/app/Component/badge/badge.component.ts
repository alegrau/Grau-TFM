import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["badge", ...args].filter(Boolean)


@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})

export class BadgeComponent {
  @Input()
  label: string = '';
  @Input() size: 'large' | 'small' = 'large';
  @Input() color: 'blue' | 'grey' | 'green' | 'orange' | 'red' = 'blue';
  @Input() hasLeftIcon: boolean = true;
  @Input() hasRightIcon: boolean = true;
  @Input() leftIcon: string = '';
  @Input() rightIcon: string = '';

  public get classes(): string[] {
    return getStyles(this.size, this.color)
  }
}
