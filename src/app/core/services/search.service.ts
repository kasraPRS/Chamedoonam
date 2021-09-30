import { SearchItemDTO } from './../model/SearchItemsDTO';
import { RestAddresses } from './../constants/RestsAddresses';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetLocationDTO } from '../model/GetLocationDTO';
import { CombineSearchFieldService } from './combine-search-field.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  getlocation(value: string): Observable<GetLocationDTO> {
    let params = new HttpParams();
    params = params.append('key', value);
    params = params.append('take', '10');
    return this.httpClient.get<GetLocationDTO>(RestAddresses.GET_LOCATION, { params: params })
  }


  search(options: any): Observable<SearchItemDTO> {
    return this.httpClient.post<SearchItemDTO>(RestAddresses.SEARCH, options)
  }
}
