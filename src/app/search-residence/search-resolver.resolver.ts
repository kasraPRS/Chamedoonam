import { CombineSearchFieldService } from 'src/app/core/services/combine-search-field.service';
import { catchError, map } from 'rxjs/operators';
import { SearchItemDTO } from './../core/model/SearchItemsDTO';
import { SearchService } from 'src/app/core/services/search.service';
import { Observable, of, empty, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RoutingService } from '../routing/routing.service';
@Injectable({
  providedIn: 'root'
})
export class SearchResolverService implements Resolve<SearchItemDTO> {

  constructor(
    private router: Router,
    private service: SearchService,
    private combine: CombineSearchFieldService,
    private routerService: RoutingService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchItemDTO> {


    return this.service.search(this.combine.searchParameters.value)
      .pipe(
        // map(
        //   r => {
        //     console.log(r);
        //     return r;
        //   }
        // ),
        catchError(() => {
          if (this.router.url === this.routerService.getLastSuccessfulRouteUrl()) {
            this.router.navigateByUrl('/');

          } else {
            this.router.navigateByUrl(this.routerService.getLastSuccessfulRouteUrl());

          }
          return of(null);
        })
      )

  }


  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SearchItemDTO>{
  //   return this.service.search();
  // }

}
