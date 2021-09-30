import { LoginRegisterService } from './../../core/services/login-register.service';
import { LoginService } from './../../routing/login.service';
import { AccommodationInvoiceDTO } from './../../core/model/AccommodationInvoiceDTO';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FiltersService } from './../../core/services/filters.service';
import { CombineSearchFieldService } from './../../core/services/combine-search-field.service';
import { AccommodationDTO } from './../../core/model/AccomodationSpecDTO';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AccommodationService } from './../../core/services/accommodation.service';
import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { FactorDTO } from 'src/app/core/model/FactorDTO';

@Component({
  selector: 'app-selected-accommodation',
  templateUrl: './selected-accommodation.component.html',
  styleUrls: ['./selected-accommodation.component.scss']
})
export class SelectedAccommodationComponent implements OnInit, OnDestroy, AfterViewInit {

  checked = false;

  subscription: Subscription[] = [];
  residenceData: AccommodationDTO;

  checkin: any;
  checkout: any;
  holidayPrice: any;
  nightPrice: any
  weekendPrice: any;
  night: any;
  weekendSelectedDays: any;

  isHoliday: boolean;
  isWeekend: boolean;
  ifWeekendSelectedonRenge: boolean = false;
  passenger: any;

  specialOffer: boolean = false;
  active_discount: boolean = false;

  formCoupan: FormGroup;
  addOrder: FormGroup;

  factor: FactorDTO;

  invoice: AccommodationInvoiceDTO;

  invoiceFormData = new BehaviorSubject<any>([]);

  constructor(
    private service: AccommodationService,
    private combine: CombineSearchFieldService,
    private filtersService: FiltersService,
    private router: Router,
    private formBuilder: FormBuilder,
    private _location: Location,
    private loginService: LoginRegisterService
  ) {

    this.formCoupan = this.formBuilder.group({
      CouponCode: new FormControl(),
      StartDate: new FormControl(),
      EndDate: new FormControl(),
      GuestsCount: new FormControl(),

    });

    this.addOrder = this.formBuilder.group({
      couponCode: new FormControl(),
      GuestsCount: new FormControl(1, Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      nationalId: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl(),
      birthday: new FormControl(null),
      address: new FormControl(),
      agreement: new FormControl(undefined, Validators.required),
    })
  }

  ngOnInit(): void {

    this.service.accommodation.subscribe(
      r => {

      }
    );

    this.subscription.push(
      this.filtersService.factor.subscribe(
        r => {


          this.factor = r; //came from sidenave (last page)

          // this.formCoupan.get('CouponCode').setValue()
          this.formCoupan.get('StartDate').setValue(this.factor.startDate); // set from sidenav 
          this.formCoupan.get('EndDate').setValue(this.factor.endDate); // set from sidenav 
          this.formCoupan.get('GuestsCount').setValue(this.addOrder.value.GuestsCount.toString()); // set from sidenav 


        }
      ),

      this.service.accommodation.subscribe(
        r => {
          this.residenceData = r;
          if (!this.residenceData) {
            this._location.back();
          }
        }
      )
    )
  }


  coupan() {
    this.addOrder.get('couponCode').setValue(this.formCoupan.value['CouponCode']);

    this.service.invoiceDataFormData.next(this.formCoupan.value); // set form data for next page

    this.service.getInvoice(this.formCoupan.value).subscribe(
      r => {

        this.invoice = r;
        this.service.invoiceData.next(this.invoice);
      }
    );

  }

  onSubmit() {
    if (localStorage.getItem('Token')) {
      if (this.checked) {

        this.service.reservationData.next(this.factor); // factorData

        if (this.addOrder.valid) {
          this.service.customerData.next(this.addOrder.value);

          this.router.navigateByUrl('selected-accommodation/payment');
        }
      }
    } else {
      this.router.navigateByUrl('auth');
    }
  }



  ngAfterViewInit() {

    this.addOrder.get('firstName').setValue(this.loginService.userProfile.value.firstName);
    this.addOrder.get('lastName').setValue(this.loginService.userProfile.value.lastName);
    this.addOrder.get('phone').setValue(this.loginService.userProfile.value.phoneNumber);
    this.addOrder.get('email').setValue(this.loginService.userProfile.value.email);

  }


  ngOnDestroy() {
    this.subscription.forEach(el => el.unsubscribe())
  }

}
