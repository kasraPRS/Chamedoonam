import { CombineSearchFieldService } from './../../core/services/combine-search-field.service';
import { SearchService } from './../../core/services/search.service';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Subscription, fromEvent } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() ctrlName: string;
  @Input() isProvince: string;
  @Input() formData: FormGroup;
  @Input() klass: string;
  @Input() searchValue: string;

  subscription: Subscription[] = [];
  options: any;
  keyUpSubscription: Subscription;
  showLoader: boolean = false;

  constructor(
    private getLocationService: SearchService,
    private combine: CombineSearchFieldService
  ) { }

  @ViewChild("searchFiel") searchFiel: ElementRef;

  searchLocation(value: string) {
    if (value) {
      this.showLoader = true;
      distinctUntilChanged(),
        this.subscription.push(
          this.getLocationService.getlocation(value).subscribe(
            r => {
              if (r) {
                this.showLoader = false;
                this.options = r;
              }
            }
          )
        )
    }
  }
  ngAfterViewInit() {
    this.subscription.push(
      this.keyUpSubscription = fromEvent(this.searchFiel.nativeElement, "keyup")
        .pipe(
          debounceTime(1000),
          map((event: Event) => (<HTMLInputElement>event.target).value)).subscribe(
            r => {
              this.searchLocation(r)
            })
    )

  }

  onKeyup(provinceId) {

    let searchResult = this.options.filter(k => k.title === provinceId);
    // debugger
    // let searchResult = this.options.filter(k => k.id === provinceId);

    if (searchResult[0]['discriminator'] === 3) {
      // this.combine.setProvince(false)
      this.formData.get(this.isProvince).setValue(false)
    } else {
      // this.combine.setProvince(true)
      this.formData.get(this.isProvince).setValue(true)
    }
    this.formData.get(this.ctrlName).setValue(searchResult[0]['id']);
  }
  ngOnInit(): void {
  }

}
