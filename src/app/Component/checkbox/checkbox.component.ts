import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

const getStyles = (...args: string[]) => ["checkbox", ...args].filter(Boolean)

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})

export class CheckboxComponent {

  @Input() label: string = '';

  @Input() checked: boolean = false;


  @Input() state: 'valid' | 'invalid' | 'disabled' = 'valid';



  public get classes(): string[] {
    return getStyles(this.state)

  }

}

