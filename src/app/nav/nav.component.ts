import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Servicios/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  public userAdmin = this.loginService.adminUser()

  goProfile() {
    this.router.navigate(['/perfil']);
    // console.log(this.userAdmin,"soy ese")
  }
  goHome() {
    this.router.navigate(['/']);
  }
  goCarrito() {
    this.router.navigate(['/carrito']);
  }
  goPanelAdmin() {
    this.router.navigate(['/perfil/administrador']);
  }
  
  goProductos() {
    this.router.navigate(['/productos']);
  }

  goCategorias() {
    this.router.navigate(['/categorias']);
  }
  goEnvio() {
    this.router.navigate(['/formasDeEnvio']);
  }
}
