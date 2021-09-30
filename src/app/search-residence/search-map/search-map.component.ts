import { debounceTime, takeUntil } from 'rxjs/operators';
import { MediaObserver } from '@angular/flex-layout';
import { CombineSearchFieldService } from './../../core/services/combine-search-field.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { MapService } from 'src/app/shared/map/map.service';
import { AccommodationDTO } from 'src/app/core/model/AccomodationSpecDTO';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent implements OnInit, AfterViewInit, OnDestroy {
  accommodations: AccommodationDTO[] = [];
  gridColsNumber = 1;
  accomodationsLocations: any[] = [];
  accomodationsLocationsAll: any[] = [];
  formData: FormGroup;
  subscription: Subscription[] = [];

  onTouchLocation: any[] = [];

  hasError = false;

  private unsubscribe$ = new Subject();


  constructor(
    private shareData: CombineSearchFieldService,
    media: MediaObserver,
    private mapService: MapService,
  ) {

    media.asObservable().pipe(takeUntil(this.unsubscribe$)).subscribe(
      () => {
        if (media.isActive('lt-sm')) {
          this.gridColsNumber = 2;
        }
        if (media.isActive('gt-xs')) {
          this.gridColsNumber = 3;
        }
        if (media.isActive('gt-sm')) {
          this.gridColsNumber = 4;
        }
        if (media.isActive('gt-md')) {
          this.gridColsNumber = 4;
        }
        if (media.isActive('gt-lg')) {
          this.gridColsNumber = 4;
        }
      }
    )
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.subscription.push(
      this.shareData.searchResult.subscribe(
        r => {
          if (r.items) {
            this.accommodations = r.items;
            this.accomodationsLocations = r.items.map(k => ({ 'id': k.id, 'lat': +k.locationInfo['lat'], 'lng': +k.locationInfo['lng'] }))
          }
        }
      )
    );
    this.mapService.accomodationMapInfo.pipe(debounceTime(1000)).subscribe(
      r => {
        this.onTouchLocation = this.accomodationsLocations.filter(k => k.id === r);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.forEach(el => el.unsubscribe);
  }
}
