import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  displayModal: boolean = false;

  openModal() {
    this.displayModal = true;
  }

  closeModal(event: Event) {
    this.displayModal = false;
    event.stopPropagation();
  }
}
