import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["badge", ...args].filter(Boolean)

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  @Input() type: "info" | "success" | "warning" | "error" = "info";
  @Input() icon: string = 'info';
  @Input() title: string = '';
  @Input() message: string = '';

  isVisible: boolean = true;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.isVisible = false;
    this.close.emit();
  }

  public get classes(): string[] {
    return getStyles(this.type)
  }
}
