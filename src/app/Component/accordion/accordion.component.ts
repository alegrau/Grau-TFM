import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  toggleAccordion(item: AccordionItem) {
    item.isOpen = !item.isOpen;
  }
}
