import { FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  @Input() klass;
  @Input() formData: FormGroup;
  @Input() checkInDate: string;
  @Input() checkOutDate: string;
  // @Input() checkinDateValue: Date;
  @Output() days = new EventEmitter<number>();
  selectedDate: any;

  minDate: moment.Moment;
  maxDate: moment.Moment;

  fromData: any;
  toData: any;


  @Input() checkinDateValue: string;
  @Input() checkoutDateValue: string;
  constructor(
  ) {
    const currentYear = moment().year();
    this.minDate = moment();
    this.maxDate = moment([currentYear + 1, 11, 31]);
  }

  addEventFromDate(event: MatDatepickerInputEvent<moment.Moment>) {

    this.fromData = new Date(moment(event.value).format('YYYY/MM/DD'));

    this.formData.get(this.checkInDate).setValue(moment(this.fromData).format('YYYY/MM/DD').toString());
  }

  addEventToDate(event: MatDatepickerInputEvent<moment.Moment>) {
    const x = moment(event.value).format('YYYY/MM/DD');
    const y = new Date(x);
    this.toData = y;

    const sub = Math.abs(this.toData - this.fromData);
    const diffDays = Math.ceil(sub / 864e5);
    this.days.emit(diffDays);
    this.formData.get(this.checkOutDate).setValue(moment(this.toData).format('YYYY/MM/DD').toString());
  }

  onSelect(event) {
    this.selectedDate = event;
  }

  ngOnInit(): void {

  }
}
