import { LoginRegisterService } from '../../../core/services/login-register.service';
import { Router } from '@angular/router';
import { ChangeTitleService } from '../../../core/services/change-title.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-get-otp',
  templateUrl: './get-otp.component.html',
  styleUrls: ['./get-otp.component.scss']
})
export class GetOtpComponent implements OnInit {
  formData: FormGroup;
  isWatingForVerification: boolean = false
  constructor(
    private router: Router,
    private changeTitle: ChangeTitleService,
    private formBuilder: FormBuilder,
    private service: LoginRegisterService

  ) {
    changeTitle.setDescription('لطفا کد ارسال شده به شماره همراه زیر را وارد کنید')
    // this.formData = this.formBuilder.group({
    // otp: new FormControl(
    //   undefined,
    //   [
    //     Validators.required,
    //     Validators.minLength(6), Validators.maxLength(6)
    //   ]
    // )
    // })

  }
  get f() { return this.formData.controls }

  ngOnInit(): void {

  }
  signUp() {
    this.router.navigateByUrl('auth/signup');
  }
  onSubmit($event) {
    this.service.setOtp($event)
    this.router.navigateByUrl('auth/newpassword');
  }
}
