import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {

  constructor(private snackBar : MatSnackBar) { }


  createSnackBar(type:string,message : string , duration = 4000) : void{
    this.snackBar.open(message,'kapat', {
      duration,
      panelClass: [type],
      horizontalPosition: 'center',
      verticalPosition: 'top',

    })

  }
}
