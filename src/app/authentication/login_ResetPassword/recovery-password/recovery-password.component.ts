import { ChangeTitleService } from '../../../core/services/change-title.service';
import { Subscription } from 'rxjs';
import { LoginRegisterService } from '../../../core/services/login-register.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {
  subscription: Subscription[] = [];
  isWatingForVerification: boolean = false;
  constructor(
    private router: Router,
    private service: LoginRegisterService,
    private changeTitle: ChangeTitleService
  ) {

    changeTitle.setTitle('بازیابی رمز عبور');
    changeTitle.setDescription('شماره موبایل حساب کاربری خودرا وارد کنید  تا کد تایید به شماره همراه شما ارسال شود');

  }

  ngOnInit(): void {

  }
  signUp() {

    this.router.navigateByUrl('auth/signup');
  }
  onSubmit($event) {

    this.router.navigateByUrl('auth/otp');
    this.changeTitle.setPhoneNumber($event.phoneNumber);
    this.service.getPhoneRecoveryToken($event).pipe(take(1)).subscribe(
      r => {
        if (r.userId) {
          this.service.setUserId(r.userId);
          this.router.navigateByUrl('auth/otp')
        }
      }
    )

  }

}
