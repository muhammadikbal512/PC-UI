import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.setPageTitle();
  }

  private setPageTitle(): void {
    const defaultPageTitle = 'Default Page Title';
  
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          let pageTitle = '';
  
          if (!child) {
            pageTitle = this.activatedRoute.snapshot.data['title'] || defaultPageTitle;
          } else {
            while (child.firstChild) {
              child = child.firstChild;
            }
  
            pageTitle = child.snapshot.data['title'] || defaultPageTitle;
          }
  
          return 'PlantCulture - ' + pageTitle;
        })
      )
      .subscribe((title: string) => this.title.setTitle(title));
  }
  
}
