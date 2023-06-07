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
  constructor(private loginService: LoginService) { }

  public userLogin = false

  login(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email + password)
    this.loginService.login(email, password)
    this.userLogin = true
  }

  consoleToken() {
    console.log(this.loginService.getIdToken())
    console.log(this.loginService.isAuthenticated())
    if (this.loginService.isAuthenticated() === true) {
      // alert('Usted se encuentra logeado')
      // this.userLogin = true
      Swal.fire({
        title: 'Felicitaciones!',
        text: 'Usted se encuentra logeado',
        icon: 'success',
        confirmButtonText: 'Continuar'
      })
    } else {
      // alert('Usted no se encuentra logeado')
      Swal.fire({
        title: 'Error!',
        text: 'Usted no se encuentra logueado!',
        icon: 'warning',
        confirmButtonText: 'Continuar'
      })
    }
  }

  logout() {
    console.log("se deslogeo")
    this.loginService.logout()
    this.userLogin = false
  }
}
