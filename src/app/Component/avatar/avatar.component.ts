import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const getStyles = (...args: string[]) => ["avatar", ...args].filter(Boolean)


@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() type: 'initials' | 'photo' = 'initials';
  @Input() initials: string = '';
  @Input() photoUrl: string = 'https://via.placeholder.com/100';
  @Input() altText: string = 'Avatar';
  @Input() size: "large" | "medium" | "small" = "large";

  ngOnInit() {
    console.log('Photo URL:', this.photoUrl);
  }

  public get classes(): string[] {
    return getStyles(this.size)
  }



}
