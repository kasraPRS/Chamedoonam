import { BaseFullLayoutComponent } from './../base-layout.component';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectionService } from 'src/app/core/services/device-detection.service';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-test-layout',
  templateUrl: './test-layout.component.html',
  styleUrls: ['./test-layout.component.scss']
})
export class TestLayoutComponent extends BaseFullLayoutComponent implements OnInit {
  showMenu = false;


  constructor(
    public appStateService: DeviceDetectionService,
    public router: Router,
  ) {
    super(appStateService, router);
    router.events.subscribe(event => {
      if (event instanceof ActivationEnd
        && event.snapshot.firstChild
        && event.snapshot.firstChild.routeConfig) {
        this.showMenu = (event.snapshot.firstChild.routeConfig.path === 'search-residence');
        // || event.snapshot.firstChild.routeConfig.path === 'residence'
      }
    });
  }

  ngOnInit(): void {
  }

}
