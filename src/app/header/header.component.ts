import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {  RouterModule } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,   MatToolbarModule,RouterModule ,MatSlideToggleModule,FormsModule],
  template : `
  <header class="header">
  <mat-toolbar color="accent">
  <span>Kartvizit App</span>
  <mat-slide-toggle (ngModelChange)="onChangeTheme()" [(ngModel)]="isDarkTheme">Slide me!</mat-slide-toggle>

  <span class="example-spacer"></span>
<ul class="header-menu">
  <li class="header-menu-item">
    <a class="header-menu-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact : true}" routerLink="/">Anasayfa</a>
  </li>
  <li class="header-menu-item">
    <a class="header-menu-link" routerLinkActive="active" routerLink="/about">Hakkında</a>
  </li>
  <li class="header-menu-item">
    <a class="header-menu-link" routerLinkActive="active" routerLink="/cards">Kartvizitler</a>
  </li>
</ul>

</mat-toolbar>


</header>
  `,
 styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkTheme = false;

  onChangeTheme() {

    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    }
    else {
      document.body.classList.remove('dark-theme');
    }
  }
}
