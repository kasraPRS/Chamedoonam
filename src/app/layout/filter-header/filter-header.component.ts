import { RoutingService } from './../../routing/routing.service';
import { debounceTime, filter, take } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FiltersService } from './../../core/services/filters.service';
import { Component, OnInit, ViewChild, OnChanges, OnDestroy, AfterViewInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { CombineSearchFieldService } from 'src/app/core/services/combine-search-field.service';
import { MatDialog } from '@angular/material/dialog';
import { AccommodationDTO } from 'src/app/core/model/AccomodationSpecDTO';

import * as moment from 'jalali-moment';
import { Options, LabelType } from 'ng5-slider';
import { SearchService } from 'src/app/core/services/search.service';
import { SearchItemDTO } from 'src/app/core/model/SearchItemsDTO';
@Component({
  selector: 'app-filter-header',
  templateUrl: './filter-header.component.html',
  styleUrls: ['./filter-header.component.scss']
})



export class FilterHeaderComponent implements OnInit, OnDestroy, AfterViewInit {


  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  panelOpenState = false;
  subscription: Subscription[] = [];
  type: any;
  rules: any;
  options: any;
  priceRenge: any;


  selectedRules: any[] = [];
  selectedOptions: any[] = [];
  selectedTypes: any[] = [];

  checked = false;
  disabled = false;


  formData: FormGroup;

  accommodation: AccommodationDTO[] = [];

  checkinDateValue: any;
  checkoutDateValue: any;
  searchValue: string;
  passengerCountParam: any;
  //  slider 5 
  // // value: number = 100;

  optionss: Options = {
    floor: 0,
    ceil: 0,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'تومان' + value;
        case LabelType.High:
          return 'تومان' + value;
        default:
          return 'تومان' + value;
      }
    }
  };



  constructor(
    private getFilterOptions: FiltersService,
    private observer: CombineSearchFieldService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private searchService: SearchService

  ) {

    this.formData = this.formBuilder.group({
      locationId: new FormControl(),
      types: new FormControl([]),
      instantBooking: new FormControl(false),
      checkInDate: new FormControl(Date, Validators.required),
      checkOutDate: new FormControl(Date, Validators.required),
      doubleBedCount: new FormControl(0),
      singleBedCount: new FormControl(0),
      roomCount: new FormControl(0),
      rules: new FormControl([]),
      bathRoomCount: new FormControl(0),
      wcCount: new FormControl(0),
      options: new FormControl([]),
      passengerCount: new FormControl(0),
      isProvince: new FormControl(),
      pageSize: new FormControl(1),
      currentPage: new FormControl(0)
    });

    this.subscription.push(
      this.getFilterOptions.getFilterOptions().subscribe(
        r => {
          this.priceRenge = r['priceRange'];
          this.optionss.floor = this.priceRenge.min;
          this.optionss.ceil = this.priceRenge.max;

          this.options = r['accommodationOptions'];
          this.type = r['accommodationTypes'];
          this.rules = r['accommodationRules'];

        }
      ))
  }


  someMethod() {
    this.trigger.closeMenu();
  }

  ngOnInit(): void {

    if (localStorage.getItem(('visited-cities'))) {
      const obj = JSON.parse(localStorage.getItem('visited-cities'));

      this.checkinDateValue = moment(obj.checkInDate, 'jYYYY/jM/jD');
      this.checkoutDateValue = moment(obj.checkOutDate, 'jYYYY/jM/jD');
      this.searchValue = obj.locationId;

      this.formData.patchValue(obj);
      this.observer.searchParameters.next(obj);
      this.searchFilterd(obj);

    }

  }

  ngAfterViewInit() {

    this.observer.searchParameters.subscribe(
      r => {
        this.searchFilterd(r);
      }
    )

    this.subscription.push(
      this.formData.valueChanges.pipe(debounceTime(1500)).subscribe(
        r => {
          this.searchFilterd(r);
          localStorage.setItem('visited-cities', JSON.stringify(r));
          this.observer.searchParameters.next(r);
        }
      )
    );
  }

  searchFilterd(itemOfFilters: any) {
    this.subscription.push(
      this.searchService.search(itemOfFilters).subscribe(
        result => {
          this.observer.setSearchResult(result)
        }
      ));
  }

  ngOnDestroy() {
    this.subscription.forEach(el => el.unsubscribe);
  }
}
