import { GetFilterOptionsDTO } from './../model/GetFilterOptionsDTO';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestAddresses } from '../constants/RestsAddresses';
import { FactorDTO } from '../model/FactorDTO';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  night = new BehaviorSubject<number>(null);
  // night = new Subject;
  passenger = new BehaviorSubject<number>(null);


  holidayPrice = new BehaviorSubject<number>(null);
  nightPrice = new BehaviorSubject<number>(null);
  // nightPrice = new Subject;
  weekendPrice = new BehaviorSubject<number>(null);

  checkIn = new BehaviorSubject<string>('');
  checkOut = new BehaviorSubject<string>('');


  isWeekend = new BehaviorSubject<boolean>(false);
  isHoliday = new BehaviorSubject<boolean>(false);




  ifWeekendSelectedonRenge = new BehaviorSubject<boolean>(false);
  weekendSelectedRengeDays = new BehaviorSubject<number>(null);




  factor = new BehaviorSubject<FactorDTO>(null);
  constructor(
    private HttpClient: HttpClient
  ) { }

  getFilterOptions(): Observable<GetFilterOptionsDTO> {
    return this.HttpClient.get<GetFilterOptionsDTO>(RestAddresses.GETFILTERS)
  }


  setWeekned(weekend: number) {

    this.weekendSelectedRengeDays.next(weekend)
  }
}
