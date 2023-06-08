import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable() // Agregar el decorador @Injectable()
export class LoginGuardian implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.loginService.adminUser()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
