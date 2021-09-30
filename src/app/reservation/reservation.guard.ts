import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FiltersService } from '../core/services/filters.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationGuard implements CanActivate {
  constructor(private filter: FiltersService, private router: Router,) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {




    return this.filter.factor.pipe(
      map(r => {

        if (r) {
          return true
        }
        this.router.navigate(['/']);
        return false;
      })
    )
  }

}
