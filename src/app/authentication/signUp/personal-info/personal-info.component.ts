import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { SignUpService } from './../../../core/services/sign-up.service';
import { ChangeTitleService } from './../../../core/services/change-title.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LayoutDirective } from '@angular/flex-layout';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  formData: FormGroup;
  hide: boolean = false;
  isWatingForVerification: boolean = false;
  pass: string;
  constructor(
    private formBuilder: FormBuilder,
    private changeTitle: ChangeTitleService,
    private service: SignUpService,
    private router: Router

  ) {
    this.formData = this.formBuilder.group({
      firstName: new FormControl(
        undefined,
        [Validators.required]
      ),
      lastName: new FormControl(
        undefined,
        [Validators.required]
      ),
      phoneNumber: new FormControl(
        '',
        [Validators.required,
        Validators.pattern(/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/),
        Validators.minLength(11), Validators.maxLength(13)]
      ),
      email: new FormControl(undefined, [Validators.email]),
      password: new FormControl(
        undefined,
        [
          Validators.required
        ]
      ),
      invitationCode: new FormControl()
    });
    this.changeTitle.setTitle('ثبت نام در چمدونم ');
    this.changeTitle.setDescription('اطلاعات خود را وارد کنید');
  }

  ngOnInit(): void {

    console.log(this.formData.value);

    this.formData.get('phoneNumber').setValue(localStorage.getItem('phone'));
    localStorage.removeItem('phone');

  }
  get f() { return this.formData.controls }

  onSubmit() {
    if (this.formData.value['password'] === this.formData.value['passwordTwo']) {
      this.formData.value['password'] = this.formData.value['passwordTwo'];
    }
    if (this.formData.valid) {
      this.service.registe(this.formData.value).pipe(take(1)).subscribe(
        r => {
          if (r) {
            this.router.navigateByUrl('/');
          }
        }
      );
    }
  }
}
