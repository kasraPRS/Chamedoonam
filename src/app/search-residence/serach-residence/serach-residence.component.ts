import { CombineSearchFieldService } from './../../core/services/combine-search-field.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { AccommodationDTO } from 'src/app/core/model/AccomodationSpecDTO';

import { PageModeEnum } from '../../core/enums/pageMode.enum';
import { MapService } from 'src/app/shared/map/map.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-serach-residence',
  templateUrl: './serach-residence.component.html',
  styleUrls: ['./serach-residence.component.scss']
})
export class SerachResidenceComponent implements OnInit, AfterViewInit, OnDestroy {
  accommodations: AccommodationDTO[] = [];
  accomodationsLocations: any[] = [];

  onTouchLocation: any[] = [];

  private unsubscribe$ = new Subject();
  gridColsNumber = 1;
  subscription: Subscription[] = [];
  pageSize: string = '0';


  pageMode = PageModeEnum.regularSearch;
  pageModeType = PageModeEnum;

  sortingFormData: FormGroup;

  constructor(
    media: MediaObserver,
    private shareData: CombineSearchFieldService,
    private mapService: MapService,
    private formBuilder: FormBuilder

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
    this.sortingFormData = this.formBuilder.group({
      showOnMap: ''
    })
  }

  ngOnInit(): void {

    this.sortingFormData.valueChanges.subscribe(
      r => {
        if (this.sortingFormData.value['showOnMap']) {
          this.pageMode = PageModeEnum.searchOnMap;
        } else {
          this.pageMode = PageModeEnum.regularSearch;
        }
      }
    );
  }

  ngAfterViewInit() {
    this.subscription.push(
      this.shareData.searchResultData.subscribe(
        r => {
          if (r.items) {
            window.scrollTo(0, 0);
            this.accommodations = r.items;
            this.accomodationsLocations = this.accommodations.map(k => ({ 'id': k.id, 'lat': +k.locationInfo['lat'], 'lng': +k.locationInfo['lng'] }))
          }
        }
      ));
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