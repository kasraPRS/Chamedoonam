import { Component, OnInit, Input } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MapService } from '../map/map.service'
@Component({
  selector: 'vertical-show-boxing',
  templateUrl: './vertical-show-boxing.component.html',
  styleUrls: ['./vertical-show-boxing.component.scss']
})
export class VerticalShowBoxingComponent implements OnInit {
  @Input() datas: any;
  @Input() klass;
  @Input() title: string;
  constructor(
    private router: Router,
    private mapService: MapService
  ) { }
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  disabled = new FormControl(false);

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/residence/' + this.datas.id])
  }
  sendLocation(accommodationId) {
    this.mapService.accomodationMapInfo.next(accommodationId);
  }
}
