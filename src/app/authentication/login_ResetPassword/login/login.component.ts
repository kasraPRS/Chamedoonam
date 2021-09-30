import { ChangeTitleService } from '../../../core/services/change-title.service';
import { LoginRegisterService } from '../../../core/services/login-register.service';
import { Router, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData: FormGroup;
  subscription: Subscription[] = [];
  isWatingForVerification: boolean = false;
  previousUrl: string;
  constructor(

    private router: Router,
    private formBuilder: FormBuilder,
    private service: LoginRegisterService,
    private changeTitle: ChangeTitleService,
    private _location: Location
  ) {
    changeTitle.setTitle('ورود به حساب کاربری');

    this.formData = this.formBuilder.group({
      username: new FormControl(
        undefined,
        [
          Validators.required,
          Validators.pattern(/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/),
          Validators.minLength(11), Validators.maxLength(13)
        ]
      ),
      password: new FormControl(
        [
          Validators.required
        ]
      )
    });
  }

  get f() { return this.formData.controls }
  onClick() {
    this.router.navigateByUrl('auth/recovery');

  }
  ngOnInit(): void {

  }
  signUp() {
    this.router.navigateByUrl('auth/signup');
  }
  onSubmit() {
    this.isWatingForVerification = true;
    if (this.formData.invalid) {
      return;
    }
    this.service.login(this.formData.value).subscribe(

      r => {
        if (r) {
          this.service.saveToken(r['accessToken']);
          this.isWatingForVerification = true;
          this._location.back();
        } else {
          this.isWatingForVerification = false
        }

      }
    );
    setTimeout(() => {
      this.isWatingForVerification = false;
    }, 3000);
  }

}
