import { RoutingService } from './routing/routing.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isNavigationInProgress: boolean;

  constructor(private routingService: RoutingService, private router: Router) {
    this.routingService.isNavigationInProgress$.subscribe(value => {
      this.isNavigationInProgress = value;
    })
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}