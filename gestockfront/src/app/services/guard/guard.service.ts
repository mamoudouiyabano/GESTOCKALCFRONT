import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private userService: UsersService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.userService.isUserLoggedAndAccessTokenValid();
  }

}
