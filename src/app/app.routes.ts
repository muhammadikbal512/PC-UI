import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/component/default/default.component';
import { DashboardComponent } from './feature/home/dashboard/dashboard.component';
import { MenuComponent } from './feature/menu/menu.component';
import { VipRoomComponent } from './feature/vip-room/vip-room.component';
import { AboutComponent } from './feature/about/about.component';
import { ContactComponent } from './feature/contact/contact.component';
import { ReservationComponent } from './feature/reservation/reservation.component';

export const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
            data: {
              title: 'Home'
            }
        },
        {
            path: 'menu',
            component: MenuComponent,
            data: {
              title: 'Menu'
            }
        },
        {
            path: 'vip-room',
            component: VipRoomComponent,
            data: {
              title: 'Vip Room'
            }
        },
        {
          path: 'about',
          component: AboutComponent,
          data: {
            title: 'About'
          }
        },
        {
          path: 'contact',
          component: ContactComponent,
          data: {
            title: 'Contact'
          }
        },
        {
          path: 'reservation',
          component: ReservationComponent,
          data: {
            title: 'Reservation'
          }
        }
    ],
  },


  {
    path: '',
    redirectTo: 'home/dashboard',
    pathMatch: 'full',
  },
  
];
