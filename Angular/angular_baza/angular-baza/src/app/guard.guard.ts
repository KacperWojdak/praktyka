import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private dataservice: ApiService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    //return true;
  const routeurl: string = state.url;
  return this.isLogin(routeurl);

  }

  isLogin(routeurl: string){
    if (this.dataservice.isLoggedIn()){
      return true;
    }

    this.dataservice.redirectUrl = routeurl;
    this.router.navigate(['/login'], {queryParams: {returnUrl: routeurl}} );

  }
  
}
