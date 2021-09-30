
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer/footer.component';
import { ChFormFieldDirective } from './directives/ch-form-field/ch-form-field.directive';
import { RouterModule } from '@angular/router';
import { ProgressiveCardComponent } from './progressive-card/progressive-card/progressive-card.component';
import { ProfileCardComponent } from './profile-card/profile-card/profile-card.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { CardsComponent } from './cards/cards/cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { RatingComponent } from './rating/rating.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { DateComponent } from './date/date.component';
import { CounterComponent } from './counter/counter.component';
import { MapComponent } from './map/map.component';
import { VerticalShowBoxingComponent } from './vertical-show-boxing/vertical-show-boxing.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FriendlyPricePipe } from './pipe/frindly-price.pipe';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { SortingComponent } from './sorting/sorting.component';
import { MapImageComponent } from './map-image/map-image.component';
import { CalculatorDatePriceComponent } from './calculator-date-price/calculator-date-price.component';
import { RegularShowBoxingComponent } from './show-boxing/show-boxing/regular-show-boxing/regular-show-boxing.component';
import { HorizantalShowBoxingComponent } from './show-boxing/show-boxing/horizantal-show-boxing/horizantal-show-boxing.component';
import { MapShortComponent } from './map-short/map-short.component';
import { DatePickerComponent } from './sidenav/date-picker/date-picker.component';
import { CaptureScrollEventDirective } from './directives/capture-scroll-event.directive';
import { PeymentFilterPipe } from './pipe/peyment-filter.pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FilterDatepickerComponent } from './sidenav/filter-datepicker/filter-datepicker.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { PaginationComponent } from './pagination/pagination.component';
@NgModule({
  declarations: [
    CardsComponent,
    NavigationComponent,
    ProfileCardComponent,
    ProgressiveCardComponent,
    ChFormFieldDirective,
    RatingComponent,
    FooterComponent,
    SearchBoxComponent,
    DateComponent,
    CounterComponent,
    MapComponent,
    VerticalShowBoxingComponent,
    SidenavComponent,
    FriendlyPricePipe,
    SortingComponent,
    MapImageComponent,
    CalculatorDatePriceComponent,
    RegularShowBoxingComponent,
    HorizantalShowBoxingComponent,
    MapShortComponent,
    DatePickerComponent,
    CaptureScrollEventDirective,
    PeymentFilterPipe,
    GalleryComponent,
    FilterDatepickerComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AgmCoreModule,
    CarouselModule,
    SlickCarouselModule,
    NgOtpInputModule
  ],
  exports: [
    CardsComponent,
    NavigationComponent,
    ProfileCardComponent,
    ProgressiveCardComponent,
    RouterModule,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RatingComponent,
    ChFormFieldDirective,
    SearchBoxComponent,
    DateComponent,
    CounterComponent,
    MapComponent,
    VerticalShowBoxingComponent,
    SidenavComponent,
    FriendlyPricePipe,
    PeymentFilterPipe,
    CarouselModule,
    SortingComponent,
    CalculatorDatePriceComponent,
    MapImageComponent,
    RegularShowBoxingComponent,
    HorizantalShowBoxingComponent,
    MapShortComponent,
    GalleryComponent,
    CaptureScrollEventDirective,
    FilterDatepickerComponent,
    NgOtpInputModule,
    PaginationComponent
  ]
})
export class SharedModule { }
