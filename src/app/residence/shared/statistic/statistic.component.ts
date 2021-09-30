import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() infoAccuracyScore: number;
  @Input() localAccessScore: number;
  @Input() hostingScore: number;
  @Input() cleanLinessScore: number;

  constructor() { }

  ngOnInit(): void {
  }

}
