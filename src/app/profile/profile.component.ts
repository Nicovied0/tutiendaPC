import { AuthService } from './../Servicios/auth.service';
import { Component } from '@angular/core';
import { LoginService } from '../Servicios/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private loginService: LoginService,private authService: AuthService, private router: Router) { }

  public profileAdmin :boolean|null= null
  public profile: boolean|null = null
  public getProfile: any

  ngOnInit() {
    this.logeado()
    this.userProfile()
  }

  logeado(){
    this.profileAdmin =  this.authService.adminUser()
    this.profile = this.authService.publicUser()
    console.log("se ejecuto profileAdmin" + this.profileAdmin)
    console.log("se ejecuto profile" + this.profile)
  }

  logout() {
    console.log("se deslogeo")
    this.loginService.logout()
    window.location.reload()
  }


  userProfile() {
    const usuarioLogeado = JSON.parse(localStorage.getItem('profile') || '[]')

    this.getProfile = usuarioLogeado
    console.log(this.getProfile)
  }
  
  goPanel() {
    this.router.navigate(['/perfil/administrador']);
  }
}
