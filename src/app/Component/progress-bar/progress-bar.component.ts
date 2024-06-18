import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})

export class ProgressBarComponent {
  @Input() hasLabel: boolean = true;
  @Input() label: string = '';
  @Input() hasHelpTextl: boolean = true;
  @Input() helpText: string = '';
  @Input() progress: number = 0;


  ngOnChanges(changes: SimpleChanges): void {
    if ('progress' in changes) {
      this.updateProgress(changes['progress'].currentValue);
    }
  }

  updateProgress(percentage: number): void {
    const progress = document.getElementById('progress');
    const progressLabel = document.getElementById('progressLabel');

    if (progress && progressLabel) {
      progress.style.width = percentage + '%';
      progressLabel.innerHTML = percentage + '%';
    }
  }
}
