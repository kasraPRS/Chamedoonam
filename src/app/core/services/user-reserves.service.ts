import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userReservesDTO } from '../model/UserReservesDTO';
import { RestAddresses } from '../constants/RestsAddresses';
@Injectable({
  providedIn: 'root'
})
export class UserReservesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getReserve(): Observable<userReservesDTO> {


    return this.httpClient.get<userReservesDTO>(RestAddresses.RESERVATION);

  }

  getReserveSort(value: string): Observable<userReservesDTO> {

    let params = new HttpParams();
    params = params.append('sort', value);
    return this.httpClient.get<userReservesDTO>(RestAddresses.RESERVATION, { params: params });

  }

  payment(jsonData): Observable<Response> {
    return this.httpClient.post<Response>(RestAddresses.PAYMENT, jsonData)
  }
}
