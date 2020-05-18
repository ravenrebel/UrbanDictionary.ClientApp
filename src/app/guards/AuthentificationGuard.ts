import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../service/current-user.service';

@Injectable()
export class AuthentificationGuard implements CanActivate {

    constructor(private currentUserService: CurrentUserService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.currentUserService.hasAuthentication();
    }
}
