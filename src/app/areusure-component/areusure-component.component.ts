import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-areusure-component',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule],
  template: `
    <h1 mat-dialog-title>Delete file</h1>
<div mat-dialog-content>
  Would you like to delete cat.jpeg?
</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>No</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
</div>

  `,
  styles: [`button {
    margin-right: 8px;
  }
   `


  ]
})
export class AreusureComponentComponent {
  constructor(public dialogRef: MatDialogRef<AreusureComponentComponent>) { }


}
