import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() tabs: { label: string, selected?: boolean, disabled?: boolean }[] = [];

  tabClick(tab: any) {
    if (!tab.disabled) {
      this.tabs.forEach(t => t.selected = false);
      tab.selected = true;
    }
  }

}
