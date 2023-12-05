import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



@Injectable()
export class LoginService {
  token: any;

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('profile')
    localStorage.removeItem('token')
  }

  adminUser() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('usuario') || '[]')

    if (usuarioLogeado.email === 'userAdmin@gmail.com') {
      return true
    }
    return false
  }
}
