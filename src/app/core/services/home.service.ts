import { RestAddresses } from './../constants/RestsAddresses';
import { GetVideoDTO } from './../model/GetVideoDTO';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBestAccommodationsDTP } from '../model/GetBestAccommodationsDTO';
import { GetBestExprienceDTO } from '../model/GetBestExprienceDTO';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) { }

  getBestAccommodations(take: number, maxImages: string): Observable<GetBestAccommodationsDTP> {
    let params = new HttpParams();
    params = params.append('take', take.toString());
    params = params.append('maxImages', maxImages);
    return this.httpClient.get<GetBestAccommodationsDTP>(RestAddresses.GET_BEST_ACCOMMODATIONS, { params: params })
  }


  getBestExprience(take: number) {
    let params = new HttpParams();
    params = params.append('take', take.toString());
    return this.httpClient.get<GetBestExprienceDTO>(RestAddresses.GET_BEST_EXPRIENCE, { params: params })

  }


  getHomePageVideo(param): Observable<GetVideoDTO> {
    let params = new HttpParams();
    params = params.append('videoKey', param);
    return this.httpClient.get<GetVideoDTO>(RestAddresses.GET_Video, { params: params })
  }
}
