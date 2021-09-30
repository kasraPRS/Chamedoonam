import { Router } from '@angular/router';
import { SignUpService } from './../../../core/services/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-get-user-otp',
  templateUrl: './get-user-otp.component.html',
  styleUrls: ['./get-user-otp.component.scss']
})
export class GetUserOtpComponent implements OnInit {

  constructor(
    private service: SignUpService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  onSubmit($event) {
    this.service.confirmPhoneNumber($event).pipe(take(1)).subscribe();
    // this.router.navigate([{ outlets: { primary: 'identification', authentication: 'identification' } }])

    this.router.navigateByUrl('auth/identification')
  }
}
