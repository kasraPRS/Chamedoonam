import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rates: any[] = [1, 2, 3, 4, 5];
  @Input() rating: number;

  private ratingArr = []
  constructor() { }

  ngOnInit(): void {
  }

  showIcon(index: number) {

    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
