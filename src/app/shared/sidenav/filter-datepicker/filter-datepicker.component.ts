import { FiltersService } from './../../../core/services/filters.service';
import { AccommodationCalenderDTO } from './../../../core/model/AccommodationCalenderDTO';
import { AccommodationService } from './../../../core/services/accommodation.service';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'jalali-moment';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormGroup } from '@angular/forms';
import { DatepickerService } from '../date-picker/service/datepicker.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-filter-datepicker',
  templateUrl: './filter-datepicker.component.html',
  styleUrls: ['./filter-datepicker.component.scss']
})
export class FilterDatepickerComponent implements OnInit {
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

  calendar: AccommodationCalenderDTO;
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
  disableBusyDaysPersian: any[] = [];


  selectedDays: any[] = [];




  checkinConverted: any;
  checkOutConverted: any;

  diffDays: any;


  allDaysPicked: any[] = [];


  ifHolidaysOnWeekend: any[] = [];
  convertedHolidaysStringToDate: any[] = [];




  constructor(
    private datepickerService: DatepickerService,
    private router: ActivatedRoute,
    private service: AccommodationService,
    private _snackBar: MatSnackBar
  ) {
    const currentYear = moment().year();
    this.minDate = moment();
    this.maxDate = moment([currentYear + 1, 11, 31]);
  }


  myFilter = (d): any => {

    return this.disableBusyDays.findIndex(item => item === new Date(d).toDateString()) <= 0;

  }


  addEventFromDate(event: MatDatepickerInputEvent<moment.Moment>) {


    const x = moment(event.value).format("YYYY/MM/DD"); // date farsi
    this.checkin = x;
    this.checkinConverted = new Date(moment.from(x, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD'));

    this.formData.get(this.startDate).setValue(x);

    const y = new Date(x);

    this.checkin = y;

  }

  addEventToDate(event: MatDatepickerInputEvent<moment.Moment>) {
    const x = moment(event.value).format("YYYY/MM/DD"); // date farsi


    this.checkOutConverted = new Date(moment.from(x, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD'));

    this.checkout = x;

    this.formData.get(this.endDate).setValue(x);

    if (!isNaN(this.checkOutConverted)) {

      if (new Date(this.checkOutConverted).getDate() != new Date(this.checkinConverted).getDate()) {
        const sub = Math.abs(this.checkOutConverted - this.checkinConverted);
        this.diffDays = Math.ceil(sub / 864e5);

        this.formData.get(this.daysFormControlName).setValue(this.diffDays); // set days

        const y = new Date(x);

        this.checkout = y;

        // calc Days

        this.calculatePriceAndDayType();
      } else {
        this.openSnackBar('امکان انتخاب یک روز وجود ندارد', 'close');
      }

    } else {
      return;
    }

  }

  calculatePriceAndDayType() {

    for (var arr = [], dt = new Date(this.checkinConverted); dt <= this.checkOutConverted; dt.setDate(dt.getDate() + 1)) {

      arr.push(new Date(dt).getDay()); // all day selected renge 

    }
    this.weekendDays = arr.filter(k => k === 4 || k === 5).length; // calculate weekend

    if (arr.indexOf(4) && arr.indexOf(5)) {

      this.weekendDays = arr.filter(k => k === 4 || k === 5).length; // calculate weekend

    } else {
      this.weekendDays = this.weekendDays - 1;

    }


    if (this.ifHolidaysOnWeekend.filter(k => k === 4 || k === 5).length) {

      this.weekendDays = this.weekendDays - this.ifHolidaysOnWeekend.length;
    }

    if (this.weekendDays > 0) {

      const normalPrice = (this.diffDays - this.weekendDays - this.ifHolidaysOnWeekend.length) * this.pricePerNight;

      const weekendPrices = (this.weekendDays) * this.weekendPrice;

      this.formData.get(this.normalDaysPrice).setValue(normalPrice); // calc normal price

      this.formData.get(this.weekendDaysPrice).setValue(weekendPrices); // calc weekend price

      this.formData.get(this.weekendDaysFormControlName).setValue(this.weekendDays); // set weekend days

    } else {

      this.formData.get(this.weekendDaysPrice).setValue(0); // calc weekend price

      this.formData.get(this.weekendDaysFormControlName).setValue(0); // set weekend days

      const normalPrice = (this.diffDays - this.ifHolidaysOnWeekend.length) * this.pricePerNight;

      this.formData.get(this.normalDaysPrice).setValue(normalPrice); // calc normal price

    }

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }


  ngOnInit() {

    this.router.params.subscribe(
      r => {
        this.service.getAccommodationCalender(r.id).subscribe(
          r => {
            this.calendar = r;

            this.disableBusyDaysPersian = r.busyDays;
            this.disableBusyDays = this.calendar.busyDays.map(el => moment(el, 'jYYYY/jMM/jDD'));
            this.disableBusyDays = this.disableBusyDays.map(el => new Date(el).toDateString());


            // this.convertedHolidaysStringToDate = this.calendar.holidays.map(x => new Date(moment.from(x, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')));
            // this.convertedHolidaysStringToDate = this.calendar.holidays.map(el => new Date(el))

            // console.log('test', this.convertedHolidaysStringToDate);




          }
        )
      }
    );

    this.formData.get(this.endDate).valueChanges.subscribe(
      r => {

        this.allDaysPicked = [];

        const endDay = new Date(r);

        const startDay = new Date(this.formData.get(this.startDate).value);

        while (startDay <= endDay) {
          this.allDaysPicked = [...this.allDaysPicked, moment(startDay).format("YYYY/MM/DD")]
          moment(startDay.setDate(startDay.getDate() + 1));
        }

        console.log(this.allDaysPicked);


        if (this.allDaysPicked.filter(k => this.disableBusyDaysPersian.includes(k)).length) {
          this.openSnackBar('امکان انتخاب روزهایی که از قبل رزرو شده اند وجود ندارد.', 'close');
        }


        this.holidayDays = this.calendar.holidays.filter(k => this.allDaysPicked.includes(k));
        console.log(this.holidayDays);


        var holidayCount = this.holidayDays.length;

        if (this.allDaysPicked.indexOf(this.holidayDays[0]) === 0) {
          holidayCount = holidayCount - 1;
        }


        const holidayPriceCalculate = this.holidayDays.length * this.holidayPrice;

        this.formData.get(this.holidaysDaysPrice).setValue(holidayPriceCalculate);
        this.formData.get(this.holdidaysFormControlName).setValue(holidayCount);
        this.formData.get(this.daysFormControlName).setValue(this.diffDays - holidayCount); // set days

        this.ifHolidaysOnWeekend = this.holidayDays.map(x => new Date(moment.from(x, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')).getDay()); // convert date to number 


      }
    );
  }
}
