import { FiltersService } from './../../core/services/filters.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calculator-date-price',
  templateUrl: './calculator-date-price.component.html',
  styleUrls: ['./calculator-date-price.component.scss']
})
export class CalculatorDatePriceComponent implements OnInit {

  night: any;
  nightPrice: any;
  weekendPrice: any;

  passenger: any;
  constructor(
    private filterService: FiltersService
  ) {



  }

  ngOnInit(): void {
    this.filterService.night.subscribe(
      r => {
        this.night = r.toString();

      }
    )

    this.filterService.passenger.subscribe(
      r => {
        this.passenger = r.toString();

      }
    )
  }

}
