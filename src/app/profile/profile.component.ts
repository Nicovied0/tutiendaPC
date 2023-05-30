import { Component } from '@angular/core';
import { LoginService } from '../login/login.service'; import Swal from 'sweetalert2'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private loginService: LoginService) { }

  public profile = false

  ngOnInit() {
    console.log(this.loginService.isAuthenticated())
    if (this.loginService.isAuthenticated() === true) {
      this.profile = true
    }
  }
  logout() {
    console.log("se deslogeo")
    this.loginService.logout()
    window.location.reload()
  }
  consoleToken() {
    console.log(this.loginService.getIdToken())
    console.log(this.loginService.isAuthenticated())
    if (this.loginService.isAuthenticated() === true) {
      // alert('Usted se encuentra logeado')
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
}
