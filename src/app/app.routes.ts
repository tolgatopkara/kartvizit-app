import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadComponent() {
      return import('./about/about.component').then(m => m.AboutComponent);
    },
  },
  {
    path: 'cards',
    loadComponent() {
      return import('./cards/cards.component').then(m => m.CardsComponent);
    },
  }
];
