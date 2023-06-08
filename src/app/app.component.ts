import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './Servicios/login.service';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuTiendaPC';
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDo-JU7iEw2rhIcuJWn5wx2x7ahGF7-Ylo",
      authDomain: "app-angular-login.firebaseapp.com",
    });

    this.userAdmin()
  }

  async userAdmin() {
    const usuerLoguado = await this.loginService.adminUser()
    console.log(usuerLoguado,"estoy logueado")
  }
}
