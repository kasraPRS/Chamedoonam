import { NavigationDTO } from 'src/app/core/model/navigationDTO';
import { ProfileDTO } from 'src/app/core/model/ProfileDTO';
import { nav } from 'src/app/shared/navigation/navigation';
import { take } from 'rxjs/operators';
import { LoginRegisterService } from 'src/app/core/services/login-register.service';
import { DialogService } from 'src/app/core/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';


import { BaseFullLayoutComponent } from '../../base-layout.component';

import { DeviceDetectionService } from '../../../core/services/device-detection.service';




@Component({
  selector: 'app-desktop-full-layout',
  templateUrl: './desktop-full-layout.component.html',
  styleUrls: ['./desktop-full-layout.component.scss']
})
export class DesktopFullLayoutComponent extends BaseFullLayoutComponent implements OnInit, AfterViewInit {
  showMenu = false;

  navigationItems: NavigationDTO[] = [];
  navItem = nav;
  login: boolean = true;
  profile: ProfileDTO;




  constructor(
    public router: Router,
    public dialog: MatDialog,
    private dialogService: DialogService,
    private loginService: LoginRegisterService,
    public appStateService: DeviceDetectionService,
  ) {
    super(appStateService, router);
    if (localStorage.getItem('Token')) {
      this.login = true;
      this.loginService.getAcountProfile().subscribe(r => {
        this.profile = r;
        this.loginService.userProfile.next(this.profile)
      })
    } else {

      this.login = false;

    }

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

  // onActivate(event) {
  //   window.scroll(0, 0);
  // }

  scroll(className: string) {
    const elementList = document.querySelectorAll(className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

  }
}
