import { Component } from '@angular/core';
import { LoginService } from '../Servicios/login.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private loginService: LoginService, private router: Router) { }

  public profile = false
  public getProfile: any

  ngOnInit() {
    console.log(this.loginService.isAuthenticated())
    if (this.loginService.isAuthenticated() === true) {
      this.profile = true
    }
    if (this.loginService.sessionActive()) {

      this.profile = true
    }
    this.userProfile()
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
      Swal.fire({
        title: 'Felicitaciones!',
        text: 'Usted se encuentra logeado',
        icon: 'success',
        confirmButtonText: 'Continuar'
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Usted no se encuentra logueado!',
        icon: 'warning',
        confirmButtonText: 'Continuar'
      })
    }
  }

  userProfile() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('usuario') || '[]')
    this.getProfile = usuarioLogeado
  }
  
  goPanel() {
    this.router.navigate(['/perfil/administrador']);
  }
}
