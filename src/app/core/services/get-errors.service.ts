import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetErrorsService {
  checkErrors = new BehaviorSubject<boolean>(false);
  constructor() { }
}
