import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { UserReservesService } from './../../core/services/user-reserves.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { userReservesDTO } from 'src/app/core/model/UserReservesDTO';
import { peymentDic } from '../payment-dic';
import { MessageDialogComponent } from 'src/app/reservation/shared/option/message-dialog/message-dialog.component';
@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.scss']
})
export class UserReservationComponent implements OnInit {
  userReservesList: any;

  panelOpenState = false;

  paymentOption: string;

  dicItems = peymentDic;


  test: any[] = [];

  message: any;
  constructor(
    private userProfileService: UserReservesService,
    private router: ActivatedRoute,
    public dialog: MatDialog,


  ) {
    if (localStorage.getItem('Token')) {
      this.router.data.pipe(take(1)).subscribe(
        r => {
          this.userReservesList = r.cres;
          this.test = this.dicItems.filter((k, i) => this.userReservesList[i])

        }
      )
    }
  }

  ngOnInit(): void {
  }

  sorting(event) {
    this.userProfileService.getReserveSort(event.value).subscribe(
      r => {
        this.userReservesList = r;
        this.test = this.dicItems.filter((k, i) => this.userReservesList[i])
      }
    );
  }
  radioChange(event) {
    this.paymentOption = event.value
  }


  openDialog() {
    this.dialog.open(MessageDialogComponent, {
      data: {
        message: this.message.message
      }
    });
  }
  payRequest(orderRequest) {
    this.userReservesList.filter(k => k.orderStatus === 8)[0].trackID

    const jsonData = {
      trackingCode: this.userReservesList.filter(k => k.orderStatus === 8)[0].trackID,
      paymentType: this.paymentOption,
      // couponCode: "string"
    }

    this.userProfileService.payment(jsonData).subscribe(
      r => {
        if (r['payLink']) {
          window.location.replace(r['payLink'])
        } else {
          this.message = r;
          this.openDialog();

        }

      }
    )
  }



}
