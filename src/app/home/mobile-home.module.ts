import { SharedModule } from './../shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeMobileComponent } from './mobile-home/home-mobile/home-mobile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeMobileComponent
  }
]

@NgModule({
  declarations: [HomeMobileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MobileHomeModule { }
