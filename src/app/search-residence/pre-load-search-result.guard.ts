import { SearchService } from './../core/services/search.service';
import { CombineSearchFieldService } from 'src/app/core/services/combine-search-field.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreLoadSearchResultGuard implements CanActivate {
  constructor(private combine: CombineSearchFieldService, private router: Router, private serach: SearchService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.combine.searchResult.pipe(
      map(r => {
        if (r.length) {
          // can access targeted route
          return true;
        }

        this.router.navigate(['/']);
        return false;
      })
    )

  }

}
