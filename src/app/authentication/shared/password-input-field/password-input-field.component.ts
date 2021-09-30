import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'password-input-field',
  templateUrl: './password-input-field.component.html',
  styleUrls: ['./password-input-field.component.scss']
})
export class PasswordInputFieldComponent implements OnInit {
  @Output() inputText = new EventEmitter<string>();
  formData: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formData = this.formBuilder.group({
      password: new FormControl(
        undefined,
        [
          Validators.required
        ]
      )
    })

  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.inputText.emit(this.formData.value.password)
  }
}
