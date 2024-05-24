import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input() checked: boolean = false;
  @Input() focused: boolean = false;
  @Input() disabled: boolean = false;
  @Input() hasLabelLeft: boolean = true;
  @Input() labelLeftText: string = '';
  @Input() hasLabelRight: boolean = true;
  @Input() labelRightText: string = '';


  toggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }
}
