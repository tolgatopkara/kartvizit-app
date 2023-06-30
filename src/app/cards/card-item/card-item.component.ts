import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Card } from 'src/app/models/card';
import { MatDialog } from '@angular/material/dialog';
import { AddCardDialogComponent } from '../add-card-dialog/add-card-dialog.component';
import { AreusureComponentComponent } from 'src/app/areusure-component/areusure-component.component';


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
    `  ]

})
export class CardItemComponent {
  dialog = inject(MatDialog);

  @Input() card!: Card;



  openUpdateCardDialog(card: Card) {
    this.dialog.open(AddCardDialogComponent,
      {
        width: '400px',
        data: card,
      });

  }


  openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AreusureComponentComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }

}
