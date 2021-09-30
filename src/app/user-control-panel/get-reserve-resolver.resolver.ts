import { UserReservesService } from './../core/services/user-reserves.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { userReservesDTO } from '../core/model/UserReservesDTO';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetReserveResolverService implements Resolve<userReservesDTO>{

  constructor(
    private userProfileService: UserReservesService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<userReservesDTO> {
    return this.userProfileService.getReserve();
  }
}