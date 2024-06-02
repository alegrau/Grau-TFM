import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  dropdownOpen = false;
  selectedOption = 'Select an option';
  options = ['Option 1', 'Option 2', 'Option 3'];

  @Input() hasLabel: boolean = true;
  @Input() label: string = '';
  @Input() hasHelpText: boolean = true;
  @Input() helpText: string = '';
  @Input() isInvalid: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.dropdownOpen = false;
  }
}
