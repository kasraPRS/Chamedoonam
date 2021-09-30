import { AuthenticationModule } from './../authentication/authentication.module';
// import { LoginModule } from './../login/login.module';
import { SharedModule } from './../shared/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { FooterComponent } from './footer/footer.component';
import { DesktopFullLayoutComponent } from './full-layout/desktop-full-layout/desktop-full-layout.component';
import { HeaderComponent } from './header/header.component';
import { FilterHeaderComponent } from './filter-header/filter-header.component';
import { UserProfileControlComponent } from './user-profile-control/user-profile-control.component';
import { AboutUsComponent } from './footer/about-us/about-us/about-us.component';
import { ContactUsComponent } from './footer/contact-us/contact-us/contact-us.component';
import { TestLayoutComponent } from './test-layout/test-layout.component';
import { RulesComponent } from './footer/rules/rules.component';



@NgModule({
  declarations: [
    SimpleLayoutComponent,
    FooterComponent,
    DesktopFullLayoutComponent,
    HeaderComponent,
    FilterHeaderComponent,
    UserProfileControlComponent,
    AboutUsComponent,
    ContactUsComponent,
    TestLayoutComponent,
    RulesComponent,
    // TempFilterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  entryComponents: [
    SimpleLayoutComponent,
    DesktopFullLayoutComponent
  ]
})
export class LayoutModule { }
