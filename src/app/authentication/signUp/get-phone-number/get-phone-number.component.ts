import { Router } from '@angular/router';
import { ChangeTitleService } from './../../../core/services/change-title.service';
import { SignUpService } from './../../../core/services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-get-phone-number',
  templateUrl: './get-phone-number.component.html',
  styleUrls: ['./get-phone-number.component.scss']
})
export class GetPhoneNumberComponent implements OnInit {
  isWatingForVerification = false;
  constructor(
    private service: SignUpService,
    private changeTitle: ChangeTitleService,
    private router: Router
  ) {
    this.changeTitle.setTitle('ثبت نام در چمدونم');
  }

  ngOnInit(): void {
  }

  onSubmit($event) {
    this.service.signUp($event).pipe(take(1)).subscribe(
      r => {
        if (r) {
          this.router.navigateByUrl('auth/signupOtp')

        } else {
          return;
        }

      }
    );
    // this.router.navigate([{ outlets: { primary: 'signupOtp', authentication: 'signupOtp' } }])

  }
}
