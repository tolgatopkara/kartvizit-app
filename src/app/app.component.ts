import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HeaderComponent,HttpClientModule,],
  template: `
    <app-header></app-header>
  <router-outlet></router-outlet> `,
  styles: [
    ``
  ],

})
export class AppComponent {
  title = 'kartvizit-app';
}
