import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'phone-input-field',
  templateUrl: './phone-input-field.component.html',
  styleUrls: ['./phone-input-field.component.scss']
})
export class PhoneInputFieldComponent implements OnInit {
  formData: FormGroup;
  isWatingForVerification: boolean = false;
  @Input() label: string;
  @Input() placeHolder: string;

  @Output() inputText = new EventEmitter<string>();


  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      phoneNumber: new FormControl(
        undefined,
        [
          Validators.required,
          Validators.pattern('(\\+98|\\+\\u06F9\\u06F8|0|\\u06F0)?(9|\\u06F9)[\\u06F0-\\u06F90-9]{9}'),
          Validators.minLength(11), Validators.maxLength(13)
        ]
      )
    });
  }
  get f() { return this.formData.controls }

  ngOnInit(): void {
  }
  onSubmit() {
    this.inputText.emit(this.formData.value);
    localStorage.setItem('phone', this.formData.value.phoneNumber);
  }
}
