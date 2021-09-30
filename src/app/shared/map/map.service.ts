import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  accomodationMapInfo = new BehaviorSubject<any>([]);
  constructor() { }
}
