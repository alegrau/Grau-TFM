import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["alert-box", ...args].filter(Boolean)

@Component({
  selector: 'app-alert-box',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './alert-box.component.html',
  styleUrl: './alert-box.component.css'
})
export class AlertBoxComponent {

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
