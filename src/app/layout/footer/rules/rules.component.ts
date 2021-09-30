import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  panelOpenState = false;
  formData: FormGroup;
  isWatingForVerification = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _location: Location
  ) {

    this.formData = this.formBuilder.group({
      accommodationAccepted: new FormControl(undefined, [Validators.required]),
      exprenceAccepted: new FormControl(undefined, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  get f() { return this.formData.controls }

  onSubmit() {

    this._location.back();

  }
}
