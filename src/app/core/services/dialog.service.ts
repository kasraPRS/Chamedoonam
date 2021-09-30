import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }


  openDialog(comName) {
    const dialogRef = this.dialog.open(comName);
    dialogRef.afterClosed().subscribe(
      r => {
        this.router.navigateByUrl('');
      }
    )

  }
}

