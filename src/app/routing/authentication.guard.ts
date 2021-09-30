import { RoutingService } from './routing.service';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterService } from '../core/services/login-register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private routingService: RoutingService,
    public loginService: LoginRegisterService
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.redirectToLoginIfUserIsNotLogin(state);
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.redirectToLoginIfUserIsNotLogin();
  }
  private redirectToLoginIfUserIsNotLogin(state?: RouterStateSnapshot) {
    if (!this.loginService.isUserLoggedId()) {
      this.router.navigateByUrl('');
      this.routingService.setLastSuccessfulRouteUrl(state.url);
      return false;
    }
    return true;

  }


}
