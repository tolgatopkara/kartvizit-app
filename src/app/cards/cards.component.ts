import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from "./card-item/card-item.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddCardDialogComponent } from './add-card-dialog/add-card-dialog.component';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  template: ` <main>
  <div class="d-flex align-items-center">
    <div class="flex-grow-1">
      <h1 class="page-title">Kartvizitler</h1>
      <p class="page-description">
        Bu ekranda kartvizitlerinizi yonetebilirsiniz
      </p>
      <hr />
    </div>
    <button mat-raised-button color="primary" (click)="openDialog()">Kartvizit Ekle</button>
  </div>

  <div class="cards">
    <div class="row">
      <div class="col-12" *ngIf="!cardService.cards">
      <span>Kartvizitler yukleniyor lutfen bekleyiniz...</span>
      </div>
      <div class="col-12" *ngIf="cardService.cards?.length === 0">
      <span>Henuz kartvizit eklemediniz <a class="text-primary" href="javascript:alert('Lutfen Bilgileri Dogru Doldurgunuzdan Emin Olun!');" (click)="openDialog()">Buraya Tiklayarak</a> lutfen kartvizit ekleyin</span>
      </div>
      <div class="col-12 col-md-4 col-lg-3" *ngFor="let card of cardService.cards">
        <app-card-item [card]="card" />
      </div>
    </div>
  </div>
</main>
`,
  imports: [CommonModule, CardItemComponent, MatDialogModule, MatButtonModule, AddCardDialogComponent, ],

})
export class CardsComponent implements OnInit {

  cardService = inject(CardService);
  dialog = inject(MatDialog);


  ngOnInit(): void {
    this.cardService.getCards();
  }

  openDialog(): void {
    this.dialog.open(AddCardDialogComponent, {
      width: '500px',

    });
  }




}