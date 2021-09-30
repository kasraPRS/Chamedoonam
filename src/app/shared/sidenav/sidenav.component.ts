import { FiltersService } from './../../core/services/filters.service';
import { AccommodationService } from './../../core/services/accommodation.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() title: string;
  @Input() weekendPrice: number;
  @Input() holidayPrice: number;
  @Input() pricePerNight: number;
  @Input() capacity: number;

  nightPrice: any
  weekendPricew: any;
  night: any;




  isHoliday: boolean;
  isWeekend: boolean;
  peopleCount: number;
  daysCount: number;


  weekendSelected: number;
  isWeekendSelectedControl: boolean = false;
  formData: FormGroup;

  // 



  // startDate: string;

  // endDate: string;
  panelOpenState = false;

  constructor(
    private router: Router,
    private service: AccommodationService,
    private filtersService: FiltersService,
    private formBuilder: FormBuilder
  ) {

    this.formData = this.formBuilder.group({
      guestsCount: new FormControl(0, [Validators.required]),
      startDate: new FormControl(undefined, [Validators.required]),
      endDate: new FormControl(undefined, [Validators.required]),
      daysFormControlName: new FormControl(),
      weekendDaysFormControlName: new FormControl(),
      holdidaysFormControlName: new FormControl(),
      daysAndWeekendSelectedFormControlName: new FormControl(),
      weekendDaysPrice: new FormControl(),
      normalDaysPrice: new FormControl(),
      holidaysDaysPrice: new FormControl(),

      pricePerNightForm: new FormControl(this.pricePerNight),
      weekendPriceForm: new FormControl(this.weekendPrice),
      holidayPriceForm: new FormControl(this.holidayPrice),
      checkDisableDate: new FormControl()
    });

  }

  ngOnInit(): void {

    this.formData.valueChanges.subscribe(
      r => {
        this.filtersService.factor.next(r);
        this.peopleCount = r.guestsCount;
        this.filtersService.passenger.next(this.peopleCount);
      }
    )
  }

  get f() { return this.formData.controls }

  onClick(): void {

    if (localStorage.getItem('Token')) {
      console.log(this.formData.value);

      if (this.formData.value['startDate'] != this.formData.value['endDate']) {
        this.router.navigateByUrl('selected-accommodation');
      }

    } else {

      this.router.navigateByUrl('auth')
    }

  }
}
