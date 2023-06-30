import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <h1 class="page-title">Anasayfa</h1>
      <p class="page-description">
        Kartvizit uygulamasına hoşgeldiniz.
      </p>
    </main>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
