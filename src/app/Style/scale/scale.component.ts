import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-scale',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './scale.component.html',
  styleUrl: './scale.component.css'
})
export class ScaleComponent {

  scale = [
    { label: '4px', class: 'square-4px' },
    { label: '8px', class: 'square-8px' },
    { label: '12px', class: 'square-12px' },
    { label: '16px', class: 'square-16px' },
    { label: '20px', class: 'square-20px' },
    { label: '24px', class: 'square-24px' },
    { label: '28px', class: 'square-28px' },
    { label: '32px', class: 'square-32px' },
    { label: '36px', class: 'square-36px' },
  ]

}
