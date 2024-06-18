import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-indicator.component.html',
  styleUrl: './progress-indicator.component.css'
})
export class ProgressIndicatorComponent {
  @Input() progressWidth: string = '50%';

}

