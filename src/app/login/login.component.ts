import { AuthService } from './../Servicios/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Servicios/login.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private authService: AuthService) { }

  public userLogin = false

  login(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email + password)
    this.userLogin = true
    console.log(this.userLogin)
    this.authService.login(email, password)
  }


  logout() {
    this.loginService.logout()
    this.userLogin = false
  }


}
