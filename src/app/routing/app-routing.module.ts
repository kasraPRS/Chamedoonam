import { GetReserveResolverService } from './../user-control-panel/get-reserve-resolver.resolver';
import { SearchService } from 'src/app/core/services/search.service';
import { MobileRoutes } from './mobile.routes';
import { DeviceDetectionService } from './../core/services/device-detection.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DesktopRoutes } from './desktop.routes';
import { ResidenceResolverService } from '../residence/resolver/residence-resolver.service';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    SearchService,
    ResidenceResolverService,
    GetReserveResolverService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private platform: DeviceDetectionService) {

    if (platform.isMobile()) {

      router.resetConfig(MobileRoutes.routes);

    } else {

      router.resetConfig(DesktopRoutes.routes);

    }
  }
}
