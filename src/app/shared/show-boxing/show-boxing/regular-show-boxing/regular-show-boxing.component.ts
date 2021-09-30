import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AccommodationService } from 'src/app/core/services/accommodation.service';
import { Router } from '@angular/router';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-regular-show-boxing',
  templateUrl: './regular-show-boxing.component.html',
  styleUrls: ['./regular-show-boxing.component.scss']
})
export class RegularShowBoxingComponent implements OnChanges {
  @Input() datas: any;
  @Input() title: string;

  @Input() mapShowingBox: string;

  isLoading = true;
  isFadingIn = false;
  showDefaultImage = false;

  constructor(
    private service: AccommodationService,
    private router: Router
  ) { }

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  disabled = new FormControl(false);


  onClick() {
    this.router.navigate(['/residence/' + this.datas.id])
  }
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
