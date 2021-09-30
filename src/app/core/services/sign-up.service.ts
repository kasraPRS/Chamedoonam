import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestAddresses } from '../constants/RestsAddresses';
import { SignUpDTO } from "../model/SignUpDTO";
import { ConfirmPhoneNumberDTO } from '../model/ConfirmPhoneNumberDTO';
import { RegisterDTO } from '../model/RegisterDTO';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  phone = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) { }

  signUp(data): Observable<SignUpDTO> {
    this.phone.next(data.phoneNumber);
    return this.httpClient.post<SignUpDTO>(RestAddresses.SIGN_UP, data)
  }

  confirmPhoneNumber(data): Observable<ConfirmPhoneNumberDTO> {
    const obj = {
      'phoneNumber': this.phone.value,
      'token': data
    }
    return this.httpClient.post<ConfirmPhoneNumberDTO>(RestAddresses.CONFIRM_PHONE_NUMBER, obj)
  }

  registe(data): Observable<RegisterDTO> {
    return this.httpClient.post<RegisterDTO>(RestAddresses.REGISTER, data)
  }

}
