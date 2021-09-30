import { AppComponent } from './../../app.component';
import { AccommodationReviewDTO } from './../model/AccommodationReviewDTO';
import { AccommodationInvoiceDTO } from './../model/AccommodationInvoiceDTO';
import { AccommodationCalenderDTO } from './../model/AccommodationCalenderDTO';
import { AccommodationDTO } from './../model/AccomodationSpecDTO';
import { Observable, BehaviorSubject, onErrorResumeNext } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestAddresses } from '../constants/RestsAddresses';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  id = new BehaviorSubject<string>('');
  dayCount = new BehaviorSubject<number>(null);

  accommodation = new BehaviorSubject<any>([]);

  reservationData = new BehaviorSubject<any>([]);

  customerData = new BehaviorSubject<any>([]);

  invoiceData = new BehaviorSubject<any>(AccommodationInvoiceDTO);

  invoiceDataFormData = new BehaviorSubject<any>([]);

  constructor(
    private httpClient: HttpClient
  ) { }

  setId(id: string) {
    this.id.next(id);
  }
  setDayCount(day: number) {
    this.dayCount.next(day);
  }

  setAccommodation(accommodation) {
    this.accommodation.next(accommodation)
  }

  getAccommodation(param: string): Observable<AccommodationDTO> {
    return this.httpClient.get<AccommodationDTO>(RestAddresses.GET_ACCOMMODATION + param)
  }
  getAccommodationCalender(param: string): Observable<AccommodationCalenderDTO> {
    return this.httpClient.get<AccommodationCalenderDTO>(RestAddresses.GET_ACCOMMODATION_CALENDER + param)
  }
  getAccommodationReview(id: string, pageSize: string, CurrentPage: string): Observable<AccommodationReviewDTO> {
    let params = new HttpParams();
    params = params.append('pageSize', pageSize);
    params = params.append('CurrentPage', CurrentPage);
    return this.httpClient.get<AccommodationReviewDTO>(RestAddresses.GET_ACCOMMODATION_REVIEW + id, { params: params })
  }

  getInvoice(data): Observable<AccommodationInvoiceDTO> {
    let params = new HttpParams();

    params = params.append('CouponCode', data.CouponCode || data.coupnaCode);
    params = params.append('StartDate', data.StartDate || data.startDate);
    params = params.append('EndDate', data.EndDate || data.endDate);
    params = params.append('GuestsCount', data.GuestsCount || data.guestsCount);
    return this.httpClient.get<AccommodationInvoiceDTO>(RestAddresses.GET_ACCOMMODATION_INVOICE + this.id.value, { params: params })
  }


  addOrder(params): Observable<Response> {
    return this.httpClient.post<Response>(RestAddresses.ADD_ORDER + this.id.value, params);
  }

  reserves(params): Observable<Response> {
    return this.httpClient.post<Response>(RestAddresses.ADD_ORDER_ACCOMMODATION + this.id.value + "/Orders", params);
  }
}
