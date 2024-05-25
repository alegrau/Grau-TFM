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

  @Output() close = new EventEmitter<void>(); // Output event for close button

  onClose() {
    this.isVisible = false; // Oculta el componente
    this.close.emit(); // Emite el evento de cierre
  }

  public get classes(): string[] {
    return getStyles(this.type)

  }
  // private getStyles(type: string): string[] {
  //   switch (type) {
  //     case 'success':
  //       return ['alert-box', 'success'];
  //     case 'warning':
  //       return ['alert-box', 'warning'];
  //     case 'error':
  //       return ['alert-box', 'error'];
  //     default:
  //       return ['alert-box', 'info'];
  //   }
  // }


}
