import { Router } from '@angular/router';
import { LoginRegisterService } from '../../../core/services/login-register.service';
import { ChangeTitleService } from '../../../core/services/change-title.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  hide = true;
  formData: FormGroup;
  isWatingForVerification: boolean = false;
  newPassword: string;
  constructor(
    private changeTitle: ChangeTitleService,
    private formBuilder: FormBuilder,
    private service: LoginRegisterService,
    private router: Router

  ) {
    this.changeTitle.setDescription('لطفا رمز عبور جدید خود را برای شماره زیر وارد کنید')

    this.formData = this.formBuilder.group({
      passOne: new FormControl(
        undefined,
        [
          Validators.required
        ]
      ),
      reEnterPass: new FormControl(
        undefined,
        [
          Validators.required
        ]
      )
    })
  }
  get f() { return this.formData.controls }

  ngOnInit(): void {
    this.service.userId.subscribe()

  }
  signUp() {
    this.router.navigateByUrl('auth/signup');
  }
  onSubmit() {

    if (
      this.formData.value['passOne'] === this.formData.value['reEnterPass']
    ) {

      this.newPassword = this.formData.value['passOne'];
      this.service.confirmRecoveryPassword(this.newPassword).subscribe(
        res => {


          if (res.status) {
            this.router.navigateByUrl('');
          }

        })

    } else {

      return
    }
  }
}
