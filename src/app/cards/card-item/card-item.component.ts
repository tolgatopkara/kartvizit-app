import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Card } from 'src/app/models/card';
import { MatDialog } from '@angular/material/dialog';
import { AddCardDialogComponent } from '../add-card-dialog/add-card-dialog.component';
import { ConfirmService } from 'src/app/services/confirm.service';


@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatListModule],
  templateUrl: './card-item.component.html',
  styles: [` mat-card-header {
      background-color: #3f51b5;
      color: white;
      cursor: pointer;
    }
    `  ],
  providers: [ConfirmService]

})
export class CardItemComponent {
  dialog = inject(MatDialog);
  confirmService = inject(ConfirmService);

  @Input() card!: Card;



  openUpdateCardDialog(card: Card) {
    this.dialog.open(AddCardDialogComponent,
      {
        width: '400px',
        data: card,
      });

  }

  onDelete(cardId: number) {
    this.confirmService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          console.log(cardId);
          console.log(res);
          this.confirmService.CardService.deleteCard(cardId).subscribe(() => {
            this.confirmService.CardService.getCards();
          });
        }
      });
    console.log(cardId);


  }



}
