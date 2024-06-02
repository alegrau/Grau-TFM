import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  @Input() tabs: { label: string, content: string, disabled?: boolean }[] = [];
  selectedIndex: number = 0;

  showTabContent(index: number): void {
    if (!this.tabs[index].disabled) {
      this.selectedIndex = index;
    }
  }

}
