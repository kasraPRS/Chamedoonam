import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() residenceData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
