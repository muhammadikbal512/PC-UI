import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import jika diperlukan

@Component({
  selector: 'app-sidebar-mobile',
  standalone: true, // Menandakan bahwa ini adalah standalone component
  imports: [CommonModule, RouterModule], // Import module yang diperlukan
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.css'],
})
export class SidebarMobileComponent {
  @Input() isMenuOpen: boolean = false;
}
