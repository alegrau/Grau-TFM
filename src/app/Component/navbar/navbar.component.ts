import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() photoUrl: string = 'https://www.kipu.com.pe/assets/images/logo.svg';
}
