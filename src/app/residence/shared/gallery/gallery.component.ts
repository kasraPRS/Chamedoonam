import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { takeUntil } from 'rxjs/operators';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  @Input() residenceData: any;
  gridColsNumber = 1;
  private unsubscribe$ = new Subject();

  constructor(
    media: MediaObserver

  ) {
    media.asObservable().pipe(takeUntil(this.unsubscribe$)).subscribe(
      () => {
        if (media.isActive('lt-sm')) {
          this.gridColsNumber = 4;

        }
        if (media.isActive('gt-xs')) {
          this.gridColsNumber = 4;

        }
        if (media.isActive('gt-sm')) {
          this.gridColsNumber = 4;

        }
        if (media.isActive('gt-md')) {
          this.gridColsNumber = 4;

        }
        if (media.isActive('gt-lg')) {
          this.gridColsNumber = 4;
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
