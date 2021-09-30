import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CombineSearchFieldService } from './../../core/services/combine-search-field.service';
import { GetVideoDTO } from './../../core/model/GetVideoDTO';
import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { HomeService } from "../../core/services/home.service";
import { Subscription, Subject } from 'rxjs';
import { home } from '../home';
import { myIran } from '../iran-mac';
import { MediaObserver } from '@angular/flex-layout';
import { takeUntil } from 'rxjs/operators';
import { RoutingService } from 'src/app/routing/routing.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  list = [1, 2, 3, 4, 5];
  accommodations: any;
  experiences: any
  subscription: Subscription[] = [];
  homeItems = home;
  myIranMac = myIran;
  topVideo: GetVideoDTO;
  bottomVideo: GetVideoDTO;
  srcTop: string;
  coverTop: string;
  srcBot: string;
  coverBot: string;

  takeAccommodationCount: number = 4;
  takeExprienceCount: number = 6;
  formData: FormGroup
  private unsubscribeFilter$: Subject<any> = new Subject<any>();

  private unsubscribe$ = new Subject();
  gridColsNumber = 1;
  gridColsNumberOverFour = 1;

  constructor(
    private service: HomeService,
    media: MediaObserver,
    private combine: CombineSearchFieldService,
    private routingService: RoutingService,
    private router: Router,
    private formBuild: FormBuilder) {

    this.formData = this.formBuild.group({
      // checkInDate: new FormControl('', Validators.required),
      // checkOutDate: new FormControl('', Validators.required),
      // passengerCount: new FormControl('', Validators.required),
      locationId: new FormControl('', Validators.required),
      isProvince: new FormControl()
    })

    this.subscription.push(this.service.getBestAccommodations(this.takeAccommodationCount, '1').subscribe(
      r => {
        this.accommodations = r;
      }
    ))
    this.subscription.push(this.service.getBestExprience(this.takeExprienceCount).subscribe(
      r => {
        this.experiences = r;

      }
    ))
    this.subscription.push(this.service.getHomePageVideo('HomePageVideoTop').subscribe(r => {
      this.topVideo = r;
      this.srcTop = r.videoLink;
      this.coverTop = r.cover;

    }))
    this.subscription.push(this.service.getHomePageVideo('HomePageVideoBot').subscribe(r => {
      this.bottomVideo = r;
      this.srcBot = r.videoLink;
      this.coverBot = r.cover


    }))

    media.asObservable().pipe(takeUntil(this.unsubscribe$)).subscribe(
      () => {
        if (media.isActive('lt-sm')) {
          this.gridColsNumber = 2;
          this.gridColsNumberOverFour = 2;

        }
        if (media.isActive('gt-xs')) {
          this.gridColsNumber = 3;
          this.gridColsNumberOverFour = 3;

        }
        if (media.isActive('gt-sm')) {
          this.gridColsNumber = 4;
          this.gridColsNumberOverFour = 6;

        }
        if (media.isActive('gt-md')) {
          this.gridColsNumber = 4;
          this.gridColsNumberOverFour = 6;

        }
        if (media.isActive('gt-lg')) {
          this.gridColsNumber = 4;
          this.gridColsNumberOverFour = 6;
        }
      }
    )
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {

    this.subscription.forEach(el => el.unsubscribe);


  }

  moreAccommodation() {
    this.takeAccommodationCount = this.takeAccommodationCount + 4;

    this.subscription.push(this.service.getBestAccommodations(this.takeAccommodationCount, '1').subscribe(
      r => {
        this.accommodations = r;
      }
    ))
  }

  moreExprience() {
    this.takeExprienceCount = this.takeExprienceCount + 6;
    this.subscription.push(this.service.getBestExprience(this.takeExprienceCount).subscribe(
      r => {
        this.experiences = r
      }
    ))
  }
  showLocation(id) {
    this.routingService.isNavigationInProgress.next(true);
    this.combine.searchParameters.next(this.formData.get('locationId').setValue(id));
    this.combine.searchParameters.next(this.formData.get('isProvince').setValue(false));
    localStorage.setItem('visited-cities', JSON.stringify(this.formData.value));
    this.router.navigateByUrl('search-residence');
  }
  ngAfterViewInit() {

  }

}
