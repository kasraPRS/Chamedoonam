import { MatSidenavModule } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from "./material.persian-date.adapter";
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from "../shared/material.persian-date.adapter";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';

import { MatRadioModule } from '@angular/material/radio';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { Ng5SliderModule } from 'ng5-slider';

import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    // MatDialog,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatChipsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    ScrollingModule,
    Ng5SliderModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    // MatDialog,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatChipsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    ScrollingModule,
    Ng5SliderModule,
    MatPaginatorModule
  ],
  providers: [
    DatePipe,
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
  ]
})
export class MaterialModule {
  constructor(private matIconRegistery: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistery.addSvgIcon("locat", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/icon_location.svg"));
    this.matIconRegistery.addSvgIcon("user_profile", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/counter.svg"));
    this.matIconRegistery.addSvgIcon("user_account", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/account.svg"));
    this.matIconRegistery.addSvgIcon("user_change_password", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/change_password.svg"));
    this.matIconRegistery.addSvgIcon("user_become_host", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/become_host.svg"));
    this.matIconRegistery.addSvgIcon("user_like", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/like.svg"));
    this.matIconRegistery.addSvgIcon("user_reservations", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/reservations.svg"));
    this.matIconRegistery.addSvgIcon("user_logOut", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/exit.svg"));
    this.matIconRegistery.addSvgIcon("user_plus", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/profile/pluss.svg"));
    this.matIconRegistery.addSvgIcon("user_meter", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/meter.svg"));
    this.matIconRegistery.addSvgIcon("room", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/door.svg"));
    this.matIconRegistery.addSvgIcon("shower", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/shower.svg"));
    this.matIconRegistery.addSvgIcon("group", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/group.svg"));
    this.matIconRegistery.addSvgIcon("bed", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/bed.svg"));
    this.matIconRegistery.addSvgIcon("wc", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/wc.svg"));
    this.matIconRegistery.addSvgIcon("clock_out", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/clock_out.svg"));
    this.matIconRegistery.addSvgIcon("clock_in", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svgs/clock_in.svg"));

    // user profile control

    this.matIconRegistery.addSvgIcon("ads", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/ads.svg"));
    this.matIconRegistery.addSvgIcon("money", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/money.svg"));
    this.matIconRegistery.addSvgIcon("favorites", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/favorites.svg"));
    this.matIconRegistery.addSvgIcon("reservations", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/reservations.svg"));
    this.matIconRegistery.addSvgIcon("transactions", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/transactions.svg"));
    this.matIconRegistery.addSvgIcon("password_recovery", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/password_recovery.svg"));
    this.matIconRegistery.addSvgIcon("messages", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/messages.svg"));
    this.matIconRegistery.addSvgIcon("credit_card", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/credit_card.svg"));
    this.matIconRegistery.addSvgIcon("account", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/profile_icons/account.svg"));

    this.matIconRegistery.addSvgIcon("more-photo", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/picters.svg"));
  }
}
