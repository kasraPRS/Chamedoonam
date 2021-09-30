import { ProfileDTO } from './../model/ProfileDTO';
import { Injectable } from '@angular/core';
import { RestAddresses } from '../constants/RestsAddresses';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../model/LoginDTO';
import { PhoneRecoveryDTO } from '../model/PhoneRecoveryDTO';
const TOKEN_LOCAL_STORAGE_KEY = 'Token';
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  userProfile = new BehaviorSubject<ProfileDTO>(null);

  userId = new BehaviorSubject<string>('');
  otp = new BehaviorSubject<string>('');

  private _userLoggedIn$ = new BehaviorSubject(false);

  get userLoggedIn$(): Observable<boolean> {
    return this._userLoggedIn$.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  private _userLoggedOut$ = new BehaviorSubject(false);

  get userLoggedOut$(): Observable<boolean> {
    return this._userLoggedOut$.asObservable();
  }

  isUserLoggedId() {
    return localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) !== undefined
      && localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) !== null
  }

  logoutUser() {
    localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
    this._userLoggedOut$.next(true);
    this._userLoggedOut$.complete();
  }

  publishedUserLoggedInEvent() {
    this._userLoggedIn$.next(true);
    this._userLoggedIn$.complete();
  }

  login(param): Observable<LoginDTO> {
    return this.httpClient.post<LoginDTO>(RestAddresses.LOGIN, param)
  }

  saveToken(token: string) {
    localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token);
  }



  // Recover Password


  getPhoneRecoveryToken(phone: number): Observable<PhoneRecoveryDTO> {
    return this.httpClient.post<PhoneRecoveryDTO>(RestAddresses.RECOVERY_TOKEN, phone)
  }

  setUserId(userId: any) {
    this.userId.next(userId)
  }

  setOtp(token: string) {
    this.otp.next(token);
  }

  confirmRecoveryPassword(newPassword: string): Observable<Response> {
    const obj = {
      "userId": this.userId.value,
      "token": this.otp.value,
      "newPassword": newPassword
    }
    return this.httpClient.post<Response>(RestAddresses.CONFIRM_RECOVERY_PASSWORD, obj);
  }

  // Get profile

  getAcountProfile(): Observable<ProfileDTO> {
    return this.httpClient.get<ProfileDTO>(RestAddresses.PROFILE)
  }
}

