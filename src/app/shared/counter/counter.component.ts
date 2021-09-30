import { FiltersService } from './../../core/services/filters.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() title;

  @Input() formData: FormGroup;

  @Input() ctrlName: string;

  @Input() countParam: number = 0;

  @Output() counter = new EventEmitter<number>();

  count: number = 0;


  @Input() capacity: number;

  constructor(
    private filterService: FiltersService
  ) {
  }

  add() {
    if (this.capacity) {
      if (this.countParam < this.capacity - 1) {
        this.countParam++
        this.formData.get(this.ctrlName).setValue(this.countParam);

        this.filterService.passenger.next(this.countParam)
        // this.counter.emit(++this.count);
      }
    } else {
      this.countParam++
      this.formData.get(this.ctrlName).setValue(this.countParam);
      this.filterService.passenger.next(this.countParam)
      // this.counter.emit(++this.count);
    }


  }

  remove() {
    if (this.countParam > 0) {
      this.countParam--
      this.formData.get(this.ctrlName).setValue(this.countParam);
      this.filterService.passenger.next(this.countParam)

      // this.counter.emit(--this.count);
    }
  }

  ngOnInit(): void {
    this.formData.get(this.ctrlName).setValue(this.countParam);
    this.filterService.passenger.next(this.countParam)

    // this.counter.emit(this.count = 0);

  }

}
