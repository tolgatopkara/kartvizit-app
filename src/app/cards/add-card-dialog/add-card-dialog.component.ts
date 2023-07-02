import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/models/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConfirmService } from 'src/app/services/confirm.service';


@Component({
  selector: 'app-add-card-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule,MatSnackBarModule, MatProgressBarModule ,MatIconModule,MatToolbarModule],
  templateUrl: './add-card-dialog.component.html',
  styles: [`
  .example-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
  }
  .example-full-width {
    width: 100%;
  }`
  ],
  providers: [SnackbarService, ConfirmService]

})
export class AddCardDialogComponent implements OnInit {
  cardService = inject(CardService);
  cardData: Card = inject(MAT_DIALOG_DATA);
  snackBarService = inject(SnackbarService)
  formBuilder: FormBuilder = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<AddCardDialogComponent>);
  confirmService = inject(ConfirmService);
  cardForm!: FormGroup
  showProgressBar = false;



  ngOnInit(): void {
    this.dialogRef.disableClose = true;  // Prevent user from closing dialog by clicking on background
    this.cardForm = this.formBuilder.group({
      name: [this.cardData?.name || '', [Validators.maxLength(50)]],
      title: [this.cardData?.title || '', [Validators.required, Validators.maxLength(255)]],
      phone: [this.cardData?.phone || '', [Validators.required, Validators.maxLength(20)]],
      email: [this.cardData?.email || '', [Validators.email, Validators.maxLength(50)]],
      address: [this.cardData?.address || '', [Validators.maxLength(255)]],
    });
  }

  addCard(): void {
    this.showProgressBar = true;
    this.cardService.addCard(this.cardForm.value).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (res: any) => {
        this.getSucces(res || 'Kartvizit Eklendi');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      , (err : any) => {
        this.getError(err.message || 'Kartvizit eklenirken bir sorun olustu' );
      })
  }

  updateCard(): void {
    this.showProgressBar = true;
    this.cardService.updateCard(this.cardForm.value, this.cardData.id).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (res: any) => {
        this.getSucces(res || 'Kartvizit Güncellendi');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }, (err : any) => {
        this.getError(err.message || 'Kartvizit guncellenirken bir sorun olustu' );
      })
  }

  deleteCard(): void {


    this.confirmService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if (res) {
        this.showProgressBar = true;
        this.cardService.deleteCard(this.cardData.id)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .subscribe((res: any) => {
            this.getSucces(res || 'Kartvizit Silindi');
            console.log(res);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }, (err : any) => {
            this.getError(err.message || 'Kartvizit silinirken bir sorun olustu' );
          })
      }
    });


  }



  getSucces(message: string): void {
    this.snackBarService.createSnackBar( 'success',message);
    this.cardService.getCards();
    this.showProgressBar = false;
    this.dialogRef.close();
  }

  getError(message : string) :void {
    this.snackBarService.createSnackBar('error',message);

    this.showProgressBar = false;
  }





}
