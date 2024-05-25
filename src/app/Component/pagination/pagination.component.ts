import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() type: 'page' | 'arrow' = 'page';
  @Input() pageNumber: number = 1;
  @Input() isActive: boolean = true;
  @Output() pageClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.type === 'page') {
      this.pageClicked.emit(this.pageNumber);
    }
  }

  get isPage(): boolean {
    return this.type === 'page';
  }

  get isArrow(): boolean {
    return this.type === 'arrow';
  }
}

