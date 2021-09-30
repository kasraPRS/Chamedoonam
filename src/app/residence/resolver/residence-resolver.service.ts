import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { AccommodationDTO } from 'src/app/core/model/AccomodationSpecDTO';
import { Observable, of } from 'rxjs';
import { AccommodationService } from 'src/app/core/services/accommodation.service';

@Injectable({
  providedIn: 'root'
})
export class ResidenceResolverService implements Resolve<AccommodationDTO> {

  constructor(
    private service: AccommodationService,
    private routerActive: ActivatedRoute
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AccommodationDTO> {
    this.service.id.next(route.params.id);
    return this.service.getAccommodation(route.params.id);
  }


}
