import { SharedModule } from './../shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidenceComponent } from './residence/residence.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { StatisticComponent } from './shared/statistic/statistic.component';
import { ReviewComponent } from './shared/review/review.component';
import { OptionsComponent } from './shared/options/options.component';
import { ResidenceResolverService } from './resolver/residence-resolver.service';
const routes: Routes = [
  {
    path: ':id',
    component: ResidenceComponent,
    resolve: { cres: ResidenceResolverService }
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]

@NgModule({
  declarations: [ResidenceComponent, GalleryComponent, StatisticComponent, ReviewComponent, OptionsComponent
  ],
  exports: [
    ResidenceComponent, GalleryComponent, StatisticComponent, ReviewComponent, OptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ResidenceModule { }
