// import { IsotopeModule } from 'ngx-isotope';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestInterceptor } from './HttpInterceptors/http-request.interceptors';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpResponseInterceptors } from './HttpInterceptors/http-response.interceptor';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptors,
      multi: true
    }
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyACGYfdJyQc9fwmflLE712Omni29qPpWD8",
      // libraries: ['place']
    })
  ],
  exports: [
    LayoutModule,
    AgmCoreModule,
  ]
})
export class CoreModule { }


// AIzaSyACGYfdJyQc9fwmflLE712Omni29qPpWD8