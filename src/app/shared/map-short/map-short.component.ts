import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-short',
  templateUrl: './map-short.component.html',
  styleUrls: ['./map-short.component.scss']
})
export class MapShortComponent implements OnInit {
  @Input() locationInfo: any;
  @Input() accommodations: any[];
  @Input() klass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
