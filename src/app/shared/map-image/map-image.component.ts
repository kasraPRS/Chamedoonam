import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-image',
  templateUrl: './map-image.component.html',
  styleUrls: ['./map-image.component.scss']
})
export class MapImageComponent implements OnInit {
  @Input() locationInfo: any;
  @Input() accommodations: any[];
  @Input() klass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
