import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <h1 class="page-title">Hakkinda</h1>
      <p class="page-description">
        Kartvizit guzel bir uygulamadir.
      </p>
    </main>
  `,
  styles: [
  ]
})
export class AboutComponent {

}
