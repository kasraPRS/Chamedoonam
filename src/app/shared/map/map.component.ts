import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  lng = 54.30761718750001;
  lat = 32.74163382825949;

  @Input() locationInfo: any;
  @Input() allLocations: any;
  @Input() accommodations: any[];
  @Input() klass: string;
  constructor(
    private mapService: MapService
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    // this.mapService.accomodationMapInfo.subscribe(
    //   r => {
    //     this.locationInfo.filter(k => k)
    //     debugger;
    //   }
    // );
  }
}
