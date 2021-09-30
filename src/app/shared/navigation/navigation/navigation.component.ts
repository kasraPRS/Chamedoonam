import { ProfileDTO } from './../../../core/model/ProfileDTO';
import { take } from 'rxjs/operators';
import { LoginRegisterService } from './../../../core/services/login-register.service';
import { SimpleLayoutComponent } from './../../../layout/simple-layout/simple-layout.component';
import { DialogService } from './../../../core/services/dialog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationDTO } from '../../../core/model/navigationDTO'
import { nav } from '../navigation';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationItems: NavigationDTO[] = [];
  navItem = nav;
  login: boolean = true;
  profile: ProfileDTO;

  @ViewChild('content') content;


  constructor(public dialog: MatDialog, private dialogService: DialogService, private loginService: LoginRegisterService) {


  }



  onScroll(e) {


  }

  ngOnInit(): void {
    if (localStorage.getItem('Token')) {
      this.login = true;
      this.loginService.getAcountProfile().pipe(take(1)).subscribe(r => {
        this.profile = r;
      })
    } else {
      this.login = false
    }
  }
  openDialog() {
    // this.dialog.open(PlateComponent);    
    this.dialogService.openDialog(SimpleLayoutComponent);
  }


}
