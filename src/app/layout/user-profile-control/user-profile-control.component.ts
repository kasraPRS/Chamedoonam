import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { userProfileNavigation } from './user-profile-navigation';
@Component({
  selector: 'app-user-profile-control',
  templateUrl: './user-profile-control.component.html',
  styleUrls: ['./user-profile-control.component.scss']
})
export class UserProfileControlComponent implements OnInit {
  userProfileNavigationItems = userProfileNavigation;
  constructor(
    private router: Router

  ) {
    router.events.subscribe(event => {

      if (event instanceof ActivationEnd
        && event.snapshot.firstChild
        && event.snapshot.firstChild.routeConfig) {
      }
    });
  }

  ngOnInit(): void {
  }

}
