import { AccommodationService } from './../../../core/services/accommodation.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccommodationReviewDTO } from 'src/app/core/model/AccommodationReviewDTO';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  items: AccommodationReviewDTO;
  constructor(
    private router: ActivatedRoute,
    private service: AccommodationService,

  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      r => {
        this.service.getAccommodationReview(r.id, '20', '1').subscribe(
          r => { }
        )
      }
    )
  }

}
