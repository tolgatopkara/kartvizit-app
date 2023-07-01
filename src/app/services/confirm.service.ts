import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AreusureComponentComponent } from '../areusure-component/areusure-component.component';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  dialog = inject(MatDialog);
  CardService = inject(CardService);




  openConfirmDialog() {
    return this.dialog.open(AreusureComponentComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "10px" },
    });
  }


}
