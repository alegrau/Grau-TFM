import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  searchText: string = '';

  onInput() {
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
      clearButton.style.display = this.searchText ? 'block' : 'none';
    }
  }

  clearSearch() {
    this.searchText = '';
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const clearButton = document.getElementById('clear-button');
    if (clearButton) {
      clearButton.style.display = 'none';
    }
    if (searchInput) {
      searchInput.focus();
    }
  }
}
