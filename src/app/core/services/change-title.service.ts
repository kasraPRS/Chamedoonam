import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeTitleService {
  // login and change password
  title = new Subject;
  description = new Subject;
  phoneNumber = new Subject;



  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
  }


  setDescription(description: string) {
    this.description.next(description);
  }

  setPhoneNumber(phone: string) {
    this.phoneNumber.next(phone);
  }
}
