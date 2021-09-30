import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'reservation-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() residenceData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
