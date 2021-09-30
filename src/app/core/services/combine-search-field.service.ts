import { Subject, Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { AccommodationDTO } from '../model/AccomodationSpecDTO';

@Injectable({
  providedIn: 'root'
})
export class CombineSearchFieldService {



  searchResult = new BehaviorSubject<any>([]);
  searchResultData = this.searchResult.asObservable();
  searchParameters = new BehaviorSubject<any>([]);

  constructor() {


  }

  setSearchResult(data: any) {
    this.searchResult.next(data);
  }

}
