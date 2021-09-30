import { FiltersService } from './../../core/services/filters.service';
import { AccommodationDTO } from './../../core/model/AccomodationSpecDTO';
import { Router, ActivatedRoute } from '@angular/router';
import { AccommodationService } from './../../core/services/accommodation.service';
import { Subscription, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RoutingService } from 'src/app/routing/routing.service';
import { MediaObserver } from '@angular/flex-layout';
import { take, takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { GalleryComponent } from 'src/app/shared/gallery/gallery.component';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.scss']
})
export class ResidenceComponent implements OnInit, OnDestroy, AfterViewInit {

  subscription: Subscription[] = [];
  residenceData: AccommodationDTO;
  gridColsNumber = 1;

  images: any[] = [];
  locationInfo: any[] = [];
  private unsubscribe$ = new Subject();

  constructor(
    private service: AccommodationService,
    private router: ActivatedRoute,
    private routerService: RoutingService,
    private filtersService: FiltersService,
    public dialog: MatDialog,
    media: MediaObserver
  ) {
    media.asObservable().pipe(takeUntil(this.unsubscribe$)).subscribe(
      () => {
        if (media.isActive('lt-sm')) {
          this.gridColsNumber = 4;

        }
        if (media.isActive('gt-xs')) {
          this.gridColsNumber = 4;

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
    );
    this.routerService.isNavigationInProgress.next(true);

    this.router.data.subscribe(
      r => {
        this.residenceData = r.cres;
        this.service.accommodation.next(this.residenceData);
        this.images = this.residenceData.images.slice(1, 3);
      }
    )

  }

  openDialog() {
    this.dialog.open(GalleryComponent, {
      data: {
        gallery: this.residenceData.images
      }
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.subscription.push(this.router.params.pipe(take(1)).subscribe(
      r => {
        this.service.id.next(r.id)
      }
    ));

  }
  ngAfterViewInit(): void {
    this.routerService.isNavigationInProgress.next(false);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(el => el.unsubscribe());
  }
}
