import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["badge", ...args].filter(Boolean)

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  @Input() type: "info" | "success" | "warning" | "error" = "info";
  @Input() icon: string = 'info';
  @Input() title: string = '';
  @Input() message: string = '';

  @Output() close = new EventEmitter<void>(); // Output event for close button

  onClose() {
    this.close.emit();
  }

  public get classes(): string[] {
    return getStyles(this.type)
  }
}
