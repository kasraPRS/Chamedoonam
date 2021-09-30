import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const TOKEN_LOCAL_STORAGE_KEY = 'Token';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
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

  saveToken(token: string) {
    localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token);
  }
}
