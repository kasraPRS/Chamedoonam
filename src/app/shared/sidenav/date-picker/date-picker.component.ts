import { AccommodationCalenderDTO } from './../../../core/model/AccommodationCalenderDTO';
import { Component, OnInit, Input } from '@angular/core';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormGroup } from '@angular/forms';

import { DatepickerService } from './service/datepicker.service';
import * as moment from 'jalali-moment';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from 'src/app/core/services/accommodation.service';
import { DatePipe, getLocaleFirstDayOfWeek } from '@angular/common';
import { MatGridTileFooterCssMatStyler } from '@angular/material/grid-list';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() formData: FormGroup;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() weekendDaysFormControlName: string;
  @Input() daysFormControlName: string;
  @Input() daysAndWeekendSelectedFormControlName: string;
  @Input() holdidaysFormControlName: string;
  // prices
  @Input() weekendPrice: number;
  @Input() holidayPrice: number;
  @Input() pricePerNight: number;

  // calculate price
  @Input() weekendDaysPrice: string;
  @Input() normalDaysPrice: string;
  @Input() holidaysDaysPrice: string;

  calender: AccommodationCalenderDTO;
  selectedDate: any;


  checkin: any;
  checkout: any;
  weekendDays: number = 0;
  holidayDays: any[] = [];

  minDate: moment.Moment;
  maxDate: moment.Moment;
  maxDateForCheckout: moment.Moment;

  testArray: any[] = [];
  checkOutStartDay: any;


  disableBusyDays: any[] = [];


  selectedDays: any[] = [];

  constructor(
    private datepickerService: DatepickerService,
    private router: ActivatedRoute,
    private service: AccommodationService,
    private datePipe: DatePipe
  ) {
    const currentYear = moment().year();
    this.minDate = moment();
    this.maxDate = moment([currentYear + 1, 11, 31]);
  }


  addEventFromDate(event: MatDatepickerInputEvent<moment.Moment>) {

    const x = moment(event.value).format("jYYYY/jMM/jDD"); // date farsi
    this.formData.get(this.startDate).setValue(x);

    const y = new Date(x);

    this.checkin = y;

    this.datepickerService.checkInBehvaior.next(this.checkin);


  }




  addEventToDate(event: MatDatepickerInputEvent<moment.Moment>) {

    const x = moment(event.value).format("jYYYY/jMM/jDD"); // date farsi
    this.formData.get(this.endDate).setValue(x);

    const y = new Date(x);

    this.checkout = y;

    this.datepickerService.checkOutBehvaior.next(this.checkout);

    // calc Days

    this.calculatePriceAndDayType();
  }
  // check if holidays



  // check if weekend



  calculatePriceAndDayType() {
    this.datepickerService.onFilterChange.subscribe(
      r => {

        const sub = Math.abs(r.checkOut - r.checkIn);
        const diffDays = Math.ceil(sub / 864e5);

        this.formData.get(this.daysFormControlName).setValue(diffDays); // set days

        for (var arr = [], dt = new Date(r.checkIn); dt <= r.checkOut; dt.setDate(dt.getDate() + 1)) {

          arr.push(new Date(dt).getDay());

        }

        this.weekendDays = arr.filter(k => k === 3 || k === 4).length; // calculate weekend
        const weekendPrices = this.weekendDays * this.weekendPrice;

        if (this.weekendDays > 0) {

          const normalPrice = (diffDays - this.weekendDays) * this.pricePerNight;

          this.formData.get(this.normalDaysPrice).setValue(normalPrice); // calc normal price

          this.formData.get(this.weekendDaysPrice).setValue(weekendPrices); // calc weekend price

          this.formData.get(this.weekendDaysFormControlName).setValue(this.weekendDays); // set weekend days

        } else {

          this.formData.get(this.weekendDaysPrice).setValue(0); // calc weekend price

          this.formData.get(this.weekendDaysFormControlName).setValue(0); // set weekend days

          const normalPrice = diffDays * this.pricePerNight;

          this.formData.get(this.normalDaysPrice).setValue(normalPrice); // calc normal price

        }

      }

    )

  }



  myFilter = (d): any => {

    return this.disableBusyDays.findIndex(item => item === new Date(d).toDateString()) <= 0

  }



  ngOnInit(): void {
    this.router.params.subscribe(
      r => {
        this.service.getAccommodationCalender(r.id).subscribe(
          r => {
            this.calender = r;

            this.disableBusyDays = this.calender.busyDays.map(el => moment(el, 'jYYYY/jMM/jDD'));
            this.disableBusyDays = this.disableBusyDays.map(el => new Date(el).toDateString());

          }
        )
      }
    );


    this.formData.get(this.endDate).valueChanges.subscribe(
      r => {
        this.selectedDays = [];

        const endDay = new Date(r);

        const startDay = new Date(this.formData.get(this.startDate).value);

        while (startDay < endDay) {
          this.selectedDays = [...this.selectedDays, moment(startDay).format("YYYY/MM/D")]
          moment(startDay.setDate(startDay.getDate() + 1));
        }

        this.holidayDays = this.calender.holidays.filter(k => this.selectedDays.includes(k));
        const holidayPriceCalculate = this.holidayDays.length * this.holidayPrice;
        this.formData.get(this.holidaysDaysPrice).setValue(holidayPriceCalculate);
        this.formData.get(this.holdidaysFormControlName).setValue(this.holidayDays.length);

      }
    );

  }

}
