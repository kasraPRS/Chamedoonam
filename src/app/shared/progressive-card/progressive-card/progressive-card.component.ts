import { FormBuilder, FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CombineSearchFieldService } from './../../../core/services/combine-search-field.service';
import { Subscription, Subject } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RoutingService } from 'src/app/routing/routing.service';
@Component({
  selector: 'progressive-card',
  templateUrl: './progressive-card.component.html',
  styleUrls: ['./progressive-card.component.scss']
})
export class ProgressiveCardComponent implements OnInit, OnDestroy {
  @Input() title: string;

  @Input() list: any[] = [];
  @Input() formData: FormGroup;

  submitDisable: boolean = false;
  private unsubscribeFilter$: Subject<any> = new Subject<any>();



  options: any;
  panelOpenState = false;

  counter: number = 0;
  subscription: Subscription[] = [];
  constructor(
    private combine: CombineSearchFieldService,
    private router: Router,
    private formBuild: FormBuilder,
    private routingService: RoutingService,
  ) {
    this.formData = this.formBuild.group({
      checkInDate: new FormControl(undefined, Validators.required),
      checkOutDate: new FormControl(undefined, Validators.required),
      passengerCount: new FormControl(undefined, Validators.required),
      locationId: new FormControl(undefined, Validators.required),
      isProvince: new FormControl(),
      pageSize: new FormControl(20),
      currentPage: new FormControl(0)
    })

  }

  ngOnInit(): void { }


  onSubmit() {
    this.routingService.isNavigationInProgress.next(true);
    this.submitDisable = true;
    this.combine.searchParameters.next(this.formData.value);
    localStorage.setItem('visited-cities', JSON.stringify(this.formData.value));
    this.router.navigateByUrl('search-residence');
  }

  ngOnDestroy() {
    this.subscription.forEach(el => el.unsubscribe);
  }
}
