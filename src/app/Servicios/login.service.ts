import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  token: any;

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('profile')
    localStorage.removeItem('token')
  }

  adminUser() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')

    if (usuarioLogeado.role === 'userAdmin@gmail.com') {
      return true
    }
    return false
  }
}
