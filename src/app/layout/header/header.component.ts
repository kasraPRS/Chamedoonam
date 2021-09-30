import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { nav } from 'src/app/shared/navigation/navigation';
import { NavigationDTO } from 'src/app/core/model/navigationDTO';
import { ProfileDTO } from 'src/app/core/model/ProfileDTO';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';
import { LoginRegisterService } from 'src/app/core/services/login-register.service';
import { SimpleLayoutComponent } from '../simple-layout/simple-layout.component';
import { take } from 'rxjs/operators';




import { OverlayContainer, CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  navigationItems: NavigationDTO[] = [];
  navItem = nav;
  login: boolean = true;
  profile: ProfileDTO;


  @ViewChild(MatSidenavContainer, { static: true }) sidenavContainer: MatSidenavContainer;
  @ViewChild(CdkScrollable, { static: true }) scrollable: CdkScrollable;
  @ViewChild(MatSidenavContent, { static: true }) content: MatSidenavContent;
  @ViewChild('toolBara', { static: true }) toolbar: MatToolbar;

  constructor(public dialog: MatDialog, private dialogService: DialogService, private loginService: LoginRegisterService) {

    if (localStorage.getItem('Token')) {
      this.login = true;
      this.loginService.getAcountProfile().subscribe(r => {
        this.profile = r;
        this.loginService.userProfile.next(r);
      })
    } else {
      this.login = false;
    }
  }

  ngOnInit(): void {

  }

  openDialog() {
    // this.dialog.open(PlateComponent);    
    this.dialogService.openDialog(SimpleLayoutComponent);
  }



  ngAfterViewInit() {
    // this.scrollable.elementScrolled().subscribe(() => {
    //   const scrollTop = this.sidenavContainer.scrollable.getElementRef().nativeElement.scrollTop;
    //   if (scrollTop > 0) {
    //     this.toolbar._elementRef.nativeElement.classList.add('sticky');
    //     this.toolbar._elementRef.nativeElement.classList.remove('fixed');
    //     // console.log('SCroll', "sticky");
    //   } else {
    //     this.toolbar._elementRef.nativeElement.classList.add('fixed');
    //     this.toolbar._elementRef.nativeElement.classList.remove('sticky');
    //   }
    // });
  }
}
