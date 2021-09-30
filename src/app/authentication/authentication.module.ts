import { UserIdentificationComponent } from './signUp/user-identification/user-identification.component';
import { LoginComponent } from './login_ResetPassword/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoveryPasswordComponent } from './login_ResetPassword/recovery-password/recovery-password.component';
import { NewPasswordComponent } from './login_ResetPassword/new-password/new-password.component';
import { GetOtpComponent } from './login_ResetPassword/get-otp/get-otp.component';
import { OtpInputFieldComponent } from './shared/otp-input-field/otp-input-field.component';
import { PhoneInputFieldComponent } from './shared/phone-input-field/phone-input-field.component';
import { PasswordInputFieldComponent } from './shared/password-input-field/password-input-field.component';
import { GetPhoneNumberComponent } from './signUp/get-phone-number/get-phone-number.component';
import { GetUserOtpComponent } from './signUp/get-user-otp/get-user-otp.component';
import { PersonalInfoComponent } from './signUp/personal-info/personal-info.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: 'recovery',
    component: RecoveryPasswordComponent,

  },
  {
    path: '',

    children: [
      {
        path: 'recovery',
        component: RecoveryPasswordComponent,


      },
      {
        path: 'otp',
        component: GetOtpComponent,


      },
      {
        path: 'newpassword',
        component: NewPasswordComponent,


      },
      {
        path: 'signup',
        component: GetPhoneNumberComponent,


      },
      {
        path: 'signupOtp',
        component: GetUserOtpComponent,


      },
      {
        path: 'identification',
        component: PersonalInfoComponent,


      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RecoveryPasswordComponent,
    GetOtpComponent,
    NewPasswordComponent,
    OtpInputFieldComponent,
    PhoneInputFieldComponent,
    PasswordInputFieldComponent,
    GetPhoneNumberComponent,
    GetUserOtpComponent,
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [LoginComponent, RecoveryPasswordComponent, GetOtpComponent, NewPasswordComponent, PhoneInputFieldComponent
  ]
})
export class AuthenticationModule { }
