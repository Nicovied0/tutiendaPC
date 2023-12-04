import { ProductosService } from './../Servicios/productos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Servicios/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private productosService: ProductosService) { }

  public userAdmin = this.loginService.adminUser()

  emptyCart: boolean | undefined = undefined

  ngOnInit() {
    this.getProductosStorage()
    console.log(this.emptyCart)
  }

  goProfile() {
    this.router.navigate(['/perfil']);
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
  goAyuda() {
    this.router.navigate(['/ayuda']);
  }
  goSponsors() {
    this.router.navigate(['/sponsors']);
  }

  navigateToOferts(componentId: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(componentId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }

  getProductosStorage() {
    const carritoService = this.productosService.getProductoCarrito();

    const tieneElementos = carritoService.length > 0;

    if (tieneElementos) {
      console.log('El carrito tiene productos.');
      this.emptyCart = true
      return true;
    } else {
      console.log('El carrito está vacío.');
      this.emptyCart = false
      return false;
    }
  }
}
