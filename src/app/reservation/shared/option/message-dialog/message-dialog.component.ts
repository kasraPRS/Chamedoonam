import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentGetwayComponent } from 'src/app/reservation/payment-getway/payment-getway.component';
import { UserReservationComponent } from 'src/app/user-control-panel/user-reservation/user-reservation.component';
@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit {
  item: any;
  constructor(
    public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.item = this.data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
