import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResidenceComponent } from 'src/app/residence/residence/residence.component';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  items: any[] = [];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResidenceComponent,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.items = this.data['gallery'];
  }


  removeSlide() {
    this.items.length = this.items.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
