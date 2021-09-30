import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private scrollEvent = new ReplaySubject();
  private clickEvent = new ReplaySubject();
  public scrollEvent$ = this.scrollEvent.asObservable();
  public clickEvent$ = this.clickEvent.asObservable();

  constructor() { }

  sendScrollEvent(event: any) {
    this.scrollEvent.next(event);
  }

  sendClickEvent(event: any) {
    this.clickEvent.next(event);
  }
}
