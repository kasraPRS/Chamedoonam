import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { RoutingService } from './../../routing/routing.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterService } from './../../core/services/login-register.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccommodationService } from 'src/app/core/services/accommodation.service';
import { paymentDTO } from '../../core/model/PaymentDTO';
import { AccommodationInvoiceDTO } from 'src/app/core/model/AccommodationInvoiceDTO';

import { MessageDialogComponent } from '../shared/option/message-dialog/message-dialog.component';

import { Location } from '@angular/common';
import { FactorDTO } from 'src/app/core/model/FactorDTO';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-getway',
  templateUrl: './payment-getway.component.html',
  styleUrls: ['./payment-getway.component.scss']
})
export class PaymentGetwayComponent implements OnInit, OnDestroy {
  factorData: FactorDTO;
  invoiceData: AccommodationInvoiceDTO;
  customerData: any;
  subscription: Subscription[] = [];

  formData: FormGroup;
  formCoupan: FormGroup;

  constructor(
    private service: AccommodationService,
    public dialog: MatDialog,
    private navigationService: RoutingService,
    private _location: Location,
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.formCoupan = this.formBuilder.group({
      CouponCode: new FormControl(),
      StartDate: new FormControl(),
      EndDate: new FormControl(),
      GuestsCount: new FormControl(),

    });

    this.formData = this.formBuilder.group({
      startDate: new FormControl(),
      endDate: new FormControl(),
      guestsCount: new FormControl(),
      couponCode: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      nationalId: new FormControl(),
      birthday: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
    });

    this.subscription.push(
      this.service.customerData.subscribe(
        r => {
          this.formData.patchValue(r);
          this.customerData = r;

        }
      ),
      this.service.reservationData.subscribe(
        r => {

          this.formData.patchValue(r); // check for invoice or normal price

          this.formData.get('guestsCount').setValue(this.customerData['GuestsCount']);

          this.service.getInvoice(r).subscribe(
            r => {
              this.invoiceData = r;
            }
          );
        }
      ),
      this.service.invoiceDataFormData.subscribe(
        r => {
          this.formCoupan.patchValue(r);
          if (this.formCoupan.value['CouponCode']) {
            this.service.getInvoice(this.formCoupan.value).subscribe(
              r => {
                this.invoiceData = r;
              }
            )
          } else {
            this.service.invoiceData.subscribe(
              r => {
                this.invoiceData = r;
              }
            )
          }
        }
      )
    )

  }

  openDialog() {
    this.dialog.open(MessageDialogComponent, {
      data: 'زرو شما ثبت شده لطفا تا تایید میزبان منتظر بمانید'
    });
  }


  addOrderAccommodation() {
    this.navigationService.isNavigationInProgress.next(true);
    this.service.addOrder(this.formData.value).subscribe(
      r => {

        if (r) {
          this.openDialog();
          this.navigationService.isNavigationInProgress.next(false);
        } else {
          this.navigationService.isNavigationInProgress.next(false);
          this.router.navigateByUrl('/');
        }
      }
    )
  }

  back() {
    this._location.back();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.forEach(el => el.unsubscribe());
  }

}
