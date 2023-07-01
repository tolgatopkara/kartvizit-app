import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-areusure-component',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule],
  template: `
    <h1 mat-dialog-title>Delete file</h1>
<div mat-dialog-content>
  Would you like to delete ?
</div>
<div mat-dialog-actions>
  <button [mat-dialog-close]="false" mat-button mat-dialog-close>No</button>
  <button [mat-dialog-close]="true" color="warn" mat-button mat-dialog-close cdkFocusInitial>Yes</button>
</div>

  `,
  styles: [`button {
    margin-right: 8px;
  }
   `


  ],

})
export class AreusureComponentComponent {

  // dialogRef = inject(MatDialogRef<AreusureComponentComponent>);

  // onClickNo() {
  //   this.dialogRef.close(false);
  // }

  // onClickYes() {
  //   this.dialogRef.close(true);
  // }
}
