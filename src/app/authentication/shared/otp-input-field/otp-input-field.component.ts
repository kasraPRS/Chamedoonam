import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-otp-input-field',
  templateUrl: './otp-input-field.component.html',
  styleUrls: ['./otp-input-field.component.scss']
})
export class OtpInputFieldComponent implements OnInit {
  @Input() label: string;
  @Input() frName: string;

  @Output() inputText = new EventEmitter<string>();
  formData: FormGroup;
  isWatingForVerification: boolean = false;

  otp: string;
  showOtpComponent = true;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px',
      'margin-bottom': '16px'
    }
  };
  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      otp: new FormControl(
        undefined,
        [
          Validators.required,
          Validators.minLength(5), Validators.maxLength(6)
        ]
      )
    })
  }
  get f() { return this.formData.controls }

  ngOnInit(): void {
  }
  onSubmit() {
    this.inputText.emit(this.formData.value.otp);
  }

  onOtpChange(otp) {
    this.formData.get('otp').setValue(otp);
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }
}
