import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AccommodationService } from 'src/app/core/services/accommodation.service';
import { Router } from '@angular/router';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-horizantal-show-boxing',
  templateUrl: './horizantal-show-boxing.component.html',
  styleUrls: ['./horizantal-show-boxing.component.scss']
})
export class HorizantalShowBoxingComponent implements OnChanges {
  @Input() datas: any;
  @Input() title: string;

  isLoading = true;
  isFadingIn = false;
  showDefaultImage = false;

  constructor(
    private service: AccommodationService,
    private router: Router
  ) {

  }
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  disabled = new FormControl(false);

  ngOnChanges(changes: SimpleChanges): void {
    this.isFadingIn = true;
    this.isFadingIn = false;
    this.showDefaultImage = false;

  }

  onImgLoaded() {
    this.isLoading = false;
    this.fadeIn();
  }

  onImgError() {
    this.isLoading = false;
    this.showDefaultImage = true;
    this.fadeIn();
  }

  private fadeIn() {
    setTimeout(() => {
      this.isFadingIn = true;
    }, 100);
  }
}
