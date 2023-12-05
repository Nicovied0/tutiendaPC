import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable() // Agregar el decorador @Injectable()
export class LoginGuardian implements CanActivate {
  constructor(private loginService: LoginService, private router: Router,private authService:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authService.adminUser()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
