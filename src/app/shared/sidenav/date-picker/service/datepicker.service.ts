import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatepickerService {
  onFilterChange: Observable<Filter>;
  onFilterChangeHolidays: Observable<HolidayFilter>;


  checkInBehvaior = new BehaviorSubject<any>(null)
  checkOutBehvaior = new BehaviorSubject<any>(null)

  checkInJalaliString = new BehaviorSubject<any>('');
  checkOutJalaliString = new BehaviorSubject<any>('');

  constructor() {
    this.onFilterChange = combineLatest(this.checkInBehvaior, this.checkOutBehvaior, (checkIn, checkOut) => {
      return new Filter(checkIn, checkOut);
    });

    this.onFilterChangeHolidays = combineLatest(this.checkInJalaliString, this.checkOutJalaliString, (checkInJalali, checkOutJalali) => {
      return new HolidayFilter(checkInJalali, checkOutJalali);
    })
  }
}

class Filter {
  constructor(public checkIn: any, public checkOut: any) {

  }
}

class HolidayFilter {
  constructor(public checkInJalali: any, public checkOutJalali: any) { }
}