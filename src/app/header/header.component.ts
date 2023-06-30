import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,   MatToolbarModule,RouterModule],
  template : `
  <header class="header">
  <mat-toolbar color="accent">
  <span>Kartvizit App</span>
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

}
