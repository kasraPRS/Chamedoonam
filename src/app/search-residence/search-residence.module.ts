import { PreLoadSearchResultGuard } from './pre-load-search-result.guard';
import { SearchResolverService } from './search-resolver.resolver';
import { SharedModule } from './../shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerachResidenceComponent } from './serach-residence/serach-residence.component';
import { SearchMapComponent } from './search-map/search-map.component';

const routes: Routes = [
  {
    path: '',
    component: SerachResidenceComponent,
    // resolve: { cres: SearchResolverService }
    // canActivate: [PreLoadSearchResultGuard]
  },
  {
    path: 'map',
    component: SearchMapComponent,
    // canActivate: [PreLoadSearchResultGuard]

  }
]

@NgModule({
  declarations: [SerachResidenceComponent, SearchMapComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchResidenceModule { }
