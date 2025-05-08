import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarMobileComponent } from '../sidebar-mobile/sidebar-mobile.component'; // Import SidebarMobileComponent

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, SidebarMobileComponent], // Tambahkan SidebarMobileComponent di sini
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routerLink: string = '';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      const url = event.url;
      const segments = url?.split('/').slice(1);

      if (segments != undefined) {
        this.routerLink = segments[1];
      }
    });
  }
}
