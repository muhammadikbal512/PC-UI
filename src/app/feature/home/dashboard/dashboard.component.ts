import { Component } from '@angular/core';
import { HeroComponent } from './component/hero/hero.component';
import { DishComponent } from './component/dish/dish.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ChefComponent } from './component/chef/chef.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { BeritaComponent } from './component/berita/berita.component';
import { VideoComponent } from './component/video/video.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeroComponent,
    DishComponent,
    WelcomeComponent,
    ChefComponent,
    TestimonialComponent,
    BeritaComponent,
    VideoComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
