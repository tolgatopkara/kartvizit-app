import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatButtonModule, FormsModule, MatInputModule] ,
  template : `
        <mat-form-field style="min-width: 300px;" class="example-form-field">
  <mat-label>Kartvizit Ara</mat-label>
  <input matInput type="text" #searchText (keyup)="search(searchText.value)" >
  <button matSuffix mat-icon-button aria-label="Clear">
    <mat-icon>search</mat-icon>
  </button>
</mat-form-field>

  `,
  styles: [``]
})
export class CardSearchComponent {

  cardService = inject(CardService);

  search(searchText: string){
    searchText = searchText.trim().toLowerCase();
    this.cardService.filteredCards = this.cardService.cards.filter(card => {
      return card.title.toLowerCase().trim().indexOf(searchText) > -1 || (card.name?.toLowerCase().trim().indexOf(searchText) ?? -1) > -1 ;
  } );


}


}
