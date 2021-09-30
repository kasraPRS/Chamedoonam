import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { SearchPagination } from 'src/app/core/model/SearchPaginationDTO';
import { CombineSearchFieldService } from 'src/app/core/services/combine-search-field.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  paginationItems: SearchPagination;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  length: number;

  currentPage: number;

  formData: FormGroup;
  constructor(
    private shareData: CombineSearchFieldService,
    private formBuilder: FormBuilder
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
      currentPage: new FormControl()
    })
  }

  ngOnInit(): void {
    this.currentPage = this.shareData.searchParameters.value['passengerCount'] + 1;

    this.shareData.searchParameters.subscribe(
      r => {
        this.formData.patchValue(r);
      }
    );
    this.subscription.push(
      this.shareData.searchResult.subscribe(
        r => {
          this.paginationItems = r.pagination;

        }
      )
    )
  }
  onNextPageClick() {

    this.formData.get('currentPage').setValue(this.currentPage++);
    this.shareData.searchParameters.next(this.formData.value);

  }
  onPriviousPageClick() {
    this.formData.get('currentPage').setValue(this.currentPage--);
    this.shareData.searchParameters.next(this.formData.value);
  }
  ngOnDestroy() {

  }

}
