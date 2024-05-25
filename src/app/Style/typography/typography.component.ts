import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.css'
})
export class TypographyComponent {

  typography = [
    {
      text: [
        { name: 'Display 1 - extrabold 40px', class: 'display-1' },
        { name: 'Display 2 - extrabold 32px', class: 'display-2' },
      ]
    },
    {
      text: [
        { name: 'Heading 1 - bold 27px', class: 'heading-1' },
        { name: 'Heading 2 - bold 22px', class: 'heading-2' },
        { name: 'Heading 3 - bold 18px', class: 'heading-3' },
      ]
    },
    {
      text: [
        { name: 'Body 1 - regular 16px', class: 'body-1' },
        { name: 'Body 2 - regular 14px', class: 'body-2' },
      ]
    },
    {
      text: [
        { name: 'Small text 1 - regular 12px', class: 'small-1' },
        { name: 'Small text 2 - regular 11px', class: 'small-2' },
      ]
    }
  ]
}
